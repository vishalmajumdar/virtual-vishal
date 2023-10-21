import HomeHero from "../components/HomeHero";
import HomeAbout from "../components/HomeAbout";
import Divider from "../components/Divider";
import HomeFeatures from "../components/HomeFeatures";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <Divider />
      <HomeAbout />
      <Divider />
      <HomeFeatures />
    </div>
  );
};

export default Home;
