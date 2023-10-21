const ContactForm = () => {
  return (
    <div className="hero py-10 bg-base-200">
      <div className="hero-content">
        <div className="max-w-3xl flex flex-col md:flex-row gap-5 lg:w-[768px]">
          <div className="contact-details basis-[60%] flex flex-col justify-center items-start">
            <h1 className="text-4xl font-bold font-serif">Let's Connect</h1>
            <div className="mt-5">
              <p className="leading-7">
                Email -{" "}
                <a href="mailto:contact@vishalmajumdar.me">
                  contact@vishalmajumdar.me
                </a>
                <br />
                Phone - <a href="tel:+91888XXXXX11">888-(XXX)-(XX11)</a>
                <br />
                Address -{" "}
                <a href="https://maps.app.goo.gl/oosYaKbY1PiVzJs76">
                  Noida, UP, India
                </a>
              </p>
            </div>
          </div>
          <div className="contact-form basis-[40%]">
            <form className="form-control">
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full max-w-xs"
              />
              <br />
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full max-w-xs"
              />
              <br />
              <input
                type="text"
                placeholder="Phone Number"
                className="input input-bordered w-full max-w-xs"
              />
              <br />
              <input
                type="submit"
                placeholder="Submit"
                className="input input-bordered w-full max-w-xs"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
