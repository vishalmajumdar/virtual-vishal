import { Link } from "react-router-dom";
const AboutConnect = () => {
  return (
    <div className="hero py-5 bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-3xl flex flex-col items-center">
          <h1 className="text-4xl font-bold font-serif">
            Contact Us - Let's Connect
          </h1>
          <p className="py-6">
            We're here to answer your questions, provide support, and hear your
            feedback. Feel free to reach out to us. Click on the button to
            connect with us -
          </p>

          <button className="btn btn-xs sm:btn-sm md:btn btn-wide">
            <Link to={"/contact"}>Get in Touch</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutConnect;
