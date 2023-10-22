const PricingPlans = () => {
  return (
    <>
      <div className="hero py-10 bg-base-200">
        <div className="hero-content text-center flex-col">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold font-serif">
              Pricing Plans - Your Path to Success
            </h1>
            <p className="py-6">
              Explore our primary pricing plans, each carefully designed to meet
              the unique needs of bloggers like you. Whether you're a seasoned
              pro or just starting out, there's a plan for everyone:
            </p>
          </div>
          <div className="max-w-5xl flex flex-wrap gap-3 justify-center">
            {/* Cards Start */}
            <div className="card bg-base-100 shadow-xl card-normal basis-[80%] sm:basis-[60%] md:basis-[50%] lg:basis-[30%]">
              <div className="card-body justify-between">
                <h2 className="card-title font-serif">Basic - $0/month</h2>
                <ul className="flex flex-col text-left list-disc	">
                  <li>Ideal for: Bloggers who are just getting started</li>
                  <li>Features: Article Summarizer</li>
                  <li>Support: Email support</li>
                  <li>Storage: 500 MB</li>
                </ul>
                <button className="btn w-full mt-3">Select</button>
              </div>
            </div>
            {/* Card 2 */}
            <div className="card bg-base-100 shadow-xl card-normal basis-[80%] sm:basis-[60%] md:basis-[50%] lg:basis-[30%]">
              <div className="card-body justify-between">
                <h2 className="card-title font-serif">Pro - $4.99/month</h2>
                <ul className="flex flex-col text-left list-disc	">
                  <li>Ideal for: Bloggers looking to grow their audience</li>
                  <li>Features: Article Generator</li>
                  <li>Support: Email & Phone support</li>
                  <li>Storage: 1000 MB</li>
                </ul>
                <button className="btn w-full mt-3">Select</button>
              </div>
            </div>
            {/* Card 3 */}
            <div className="card bg-base-100 shadow-xl card-normal basis-[80%] sm:basis-[60%] md:basis-[50%] lg:basis-[30%]">
              <div className="card-body justify-between">
                <h2 className="card-title font-serif text-left">
                  Premium - $9.99/month
                </h2>
                <ul className="flex flex-col text-left list-disc	">
                  <li>Ideal for: Advanced bloggers and professionals</li>
                  <li>Features: All OpenAI Tools</li>
                  <li>Support: Priority support</li>
                  <li>Storage: 1500 MB</li>
                </ul>
                <button className="btn w-full mt-3">Select</button>
              </div>
            </div>
            {/* Cards End */}
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPlans;
