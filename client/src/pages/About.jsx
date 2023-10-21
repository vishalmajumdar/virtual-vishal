import AboutConnect from "../components/AboutConnect";
import AboutStory from "../components/AboutStory";
import AboutTeam from "../components/AboutTeam";
import CommonHero from "../components/CommonHero";
import Divider from "../components/Divider";

const About = () => {
  return (
    <>
      <CommonHero
        heading="Our Journey: Empowering Bloggers"
        brief="Discover how we're revolutionizing blogging with AI-powered tools. Join us as we share our story and the future of blogging today."
        cta="Explore Now"
      />
      <Divider />
      <AboutStory />
      <Divider />
      <AboutTeam />
      <Divider />
      <AboutConnect />
      <Divider />
    </>
  );
};

export default About;
