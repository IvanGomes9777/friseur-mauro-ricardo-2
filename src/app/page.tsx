import { About } from '@/components/sections/about';
import { Contact } from '@/components/sections/contact';
import { Hero } from '@/components/sections/hero';
import { OpeningHours } from '@/components/sections/opening-hours';
import { Portfolio } from '@/components/sections/portfolio';
import { Reviews } from '@/components/sections/reviews';
import { Services } from '@/components/sections/services';

export default function HomePage() {
  return (
    <>
      <Hero imageSrc="/images/hero.jpg" videoSrc="/hero.mp4" />
      <About />
      <Services />
      <Portfolio />
      <OpeningHours />
      <Reviews />
      <Contact />
    </>
  );
}
