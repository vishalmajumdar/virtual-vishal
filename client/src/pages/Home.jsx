import HomeHero from "../components/HomeHero";
import HomeAbout from "../components/HomeAbout";
import Divider from "../components/Divider";
import HomeFeatures from "../components/HomeFeatures";
import HomeTestimonials from "../components/HomeTestimonials";
import HomeCTA from "../components/HomeCTA";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <Divider />
      <HomeAbout />
      <Divider />
      <HomeFeatures />
      <Divider />
      <HomeTestimonials />
      <Divider />
      <HomeCTA />
      <Divider />
    </div>
  );
};

export default Home;
