const ContactFAQ = () => {
  return (
    <div className="hero py-10 bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-3xl flex flex-col items-center">
          <h1 className="text-4xl font-bold font-serif">
            Frequently Asked Questions (FAQs)
          </h1>
          <p className="py-6 max-w-lg">
            Here are answers to some common questions you might have about
            Virtual Vishal and our AI-powered tools for bloggers:
          </p>
          {/* Accordian Start */}
          <div className="join join-vertical w-full text-left">
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                What is Virtual Vishal?
              </div>
              <div className="collapse-content">
                <p>
                  Virtual Vishal is a technology company dedicated to
                  revolutionizing the world of blogging with AI-powered
                  solutions. We provide tools to enhance content creation,
                  engagement, and more.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                How can I get started with your AI tools?
              </div>
              <div className="collapse-content">
                <p>
                  Getting started is easy! Visit homepage or just sign up, and
                  choose the tool that aligns with your blogging goals.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                Do I need technical expertise to use your tools?
              </div>
              <div className="collapse-content">
                <p>
                  Not at all. Our tools are designed to be user-friendly, and
                  you don't need technical expertise to use them effectively.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                Are there free trials available?
              </div>
              <div className="collapse-content">
                <p>
                  Yes, we offer free trials for many of our tools. Visit our
                  pricing page to explore them.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                How do I contact your customer support?
              </div>
              <div className="collapse-content">
                <p>
                  You can reach us by emailing,calling or submitting the form
                  above.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                Can your tools help with SEO optimization?
              </div>
              <div className="collapse-content">
                <p>
                  Absolutely. Our tools offer AI-guided SEO suggestions to
                  improve your content's search engine rankings.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                What kind of support do you provide for bloggers?
              </div>
              <div className="collapse-content">
                <p>
                  We offer various forms of support, including webinars,
                  educational content, and one-on-one guidance, all designed to
                  empower bloggers at every level.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                Is my data safe with Virtual Vishal?
              </div>
              <div className="collapse-content">
                <p>
                  We take data security seriously. Visit our Privacy Policy to
                  learn more about our data protection measures.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                What sets Virtual Vishal apart from other AI-powered solutions?
              </div>
              <div className="collapse-content">
                <p>
                  Our commitment to bloggers, our user-friendly tools, and our
                  dedication to fostering a supportive community make us unique
                  in the AI-powered blogging landscape.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                Can I cancel my subscription at any time?
              </div>
              <div className="collapse-content">
                <p>
                  Yes, you can cancel your subscription at any time, and we
                  offer flexible pricing plans to suit your needs.
                </p>
              </div>
            </div>
          </div>
          {/* Accordian End */}
          <p className="py-6 max-w-md">
            If you have any other questions or need further assistance, feel
            free to contact us. We're here to help you on your blogging journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactFAQ;
