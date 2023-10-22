import CommonHero from "../components/CommonHero";
import Divider from "../components/Divider";
import PricingPlans from "../components/PricingPlans";
import AboutConnect from "../components/AboutConnect";

const Pricing = () => {
  return (
    <>
      <CommonHero
        heading="Choose Your Ideal Plan"
        brief="Discover the pricing plans that fit your needs and goals. Whether you're just starting or looking to scale, we have options that suit every blogger. Explore the features and benefits of each plan below."
        cta="Explore Pricing"
      />
      <Divider />
      <PricingPlans />
      <Divider />
      <AboutConnect />
      <Divider />
    </>
  );
};

export default Pricing;
