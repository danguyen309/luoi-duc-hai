import Banners from '../sections/landing-page/banners';
import Contact from '../sections/landing-page/contact';
import FeaturedProducts from '../sections/landing-page/featured-products';
import Hero from '../sections/landing-page/hero';
import Partners from '../sections/landing-page/partners';
import WhyChooseUs from '../sections/landing-page/why-choose-us';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return (
    <main className="">
      <Banners />
      <WhyChooseUs />
      <FeaturedProducts />
      <Partners />
    </main>
  );
}
