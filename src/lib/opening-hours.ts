import type { Site } from './site';

export const dayKeys = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
] as const;

export type DayKey = (typeof dayKeys)[number];

export const germanDayLong: Record<DayKey, string> = {
  monday: 'Montag',
  tuesday: 'Dienstag',
  wednesday: 'Mittwoch',
  thursday: 'Donnerstag',
  friday: 'Freitag',
  saturday: 'Samstag',
  sunday: 'Sonntag',
};

export const germanDayShort: Record<DayKey, string> = {
  monday: 'Mo',
  tuesday: 'Di',
  wednesday: 'Mi',
  thursday: 'Do',
  friday: 'Fr',
  saturday: 'Sa',
  sunday: 'So',
};

export const displayOrder: readonly DayKey[] = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
];

export type SalonStatus = {
  isOpen: boolean;
  message: string;
  todayKey: DayKey;
};

function getInBerlin(now: Date) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Europe/Berlin',
    weekday: 'long',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).formatToParts(now);
  const weekday = (parts.find((p) => p.type === 'weekday')?.value.toLowerCase() ?? 'monday') as DayKey;
  const hour = parseInt(parts.find((p) => p.type === 'hour')?.value ?? '0', 10);
  const minute = parseInt(parts.find((p) => p.type === 'minute')?.value ?? '0', 10);
  return { weekday, hour, minute };
}

export function getSalonStatus(now: Date, hours: Site['hours']): SalonStatus {
  const { weekday: today, hour, minute } = getInBerlin(now);
  const currentMin = hour * 60 + minute;
  const todayHours = hours[today];

  if (todayHours) {
    const [oh, om] = todayHours.open.split(':').map(Number);
    const [ch, cm] = todayHours.close.split(':').map(Number);
    const openMin = oh * 60 + om;
    const closeMin = ch * 60 + cm;

    if (currentMin >= openMin && currentMin < closeMin) {
      return {
        isOpen: true,
        message: `Bis ${todayHours.close} Uhr geöffnet`,
        todayKey: today,
      };
    }
    if (currentMin < openMin) {
      return {
        isOpen: false,
        message: `Öffnet heute um ${todayHours.open} Uhr`,
        todayKey: today,
      };
    }
  }

  const todayIdx = dayKeys.indexOf(today);
  for (let i = 1; i <= 7; i++) {
    const nextKey = dayKeys[(todayIdx + i) % 7];
    const nextHours = hours[nextKey];
    if (nextHours) {
      const prefix = i === 1 ? 'Öffnet morgen' : `Öffnet ${germanDayLong[nextKey]}`;
      return {
        isOpen: false,
        message: `${prefix} um ${nextHours.open} Uhr`,
        todayKey: today,
      };
    }
  }

  return { isOpen: false, message: 'Geschlossen', todayKey: today };
}
