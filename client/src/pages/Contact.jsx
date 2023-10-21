import CommonHero from "../components/CommonHero";
import ContactFAQ from "../components/ContactFAQ";
import ContactForm from "../components/ContactForm";
import Divider from "../components/Divider";

const Contact = () => {
  return (
    <>
      <CommonHero
        heading="We're Here to Help"
        brief="We're just a message or a call away. Reach out to us with any questions, inquiries, or feedback. We value your communication and are dedicated to assisting you on your blogging journey."
        cta="Send Message"
      />
      <Divider />
      <ContactForm />
      <Divider />
      <ContactFAQ />
      <Divider />
    </>
  );
};

export default Contact;
