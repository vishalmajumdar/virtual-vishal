import CommonHero from "../components/CommonHero";
import Divider from "../components/Divider";

const NotFound = () => {
  return (
    <>
      <CommonHero
        heading="Oops, Something's Missing"
        brief="We're here to help you find your way. If you have questions, need assistance, or simply want to chat, please don't hesitate to reach out. We're committed to guiding you on your journey."
        cta="Contact Us"
      />
      <Divider />
    </>
  );
};

export default NotFound;
