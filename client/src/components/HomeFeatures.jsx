const HomeFeatures = () => {
  return (
    <div className="hero py-10 bg-base-200">
      <div className="hero-content text-center flex-col">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold font-serif">Features & Benefits</h1>
          <p className="py-6">
            Elevate your blogging experience with the remarkable features and
            benefits of Virtual Vishal's AI-powered solutions. Our innovative
            tools are designed to empower bloggers at every level, making
            content creation easier, more engaging, and more impactful. Here's
            what you can expect:
          </p>
        </div>
        <div className="max-w-5xl flex flex-wrap gap-3 justify-center">
          {/* Cards Start */}
          <div className="card w-96 bg-base-100 shadow-xl card-normal basis-[80%] sm:basis-[40%] md:basis-[30%]">
            <div className="card-body">
              <h2 className="card-title">Content Enhancement</h2>
              <ul className="flex flex-col text-left">
                <li>
                  Boost the quality of your content with AI-driven proofreading
                  and grammar correction.
                </li>{" "}
                <br />
                <li>
                  Uncover fresh insights and ideas for your blog topics with
                  advanced content analysis.
                </li>
              </ul>
            </div>
          </div>
          {/* Card 2 */}
          <div className="card w-96 bg-base-100 shadow-xl card-normal basis-[80%] sm:basis-[40%] md:basis-[30%]">
            <div className="card-body">
              <h2 className="card-title">Audience Engagement</h2>
              <ul className="flex flex-col text-left">
                <li>
                  Tailor your content to your target audience with data-driven
                  recommendations.
                </li>
                <br />
                <li>
                  Optimize your headlines and meta descriptions for higher
                  click-through rates.
                </li>
              </ul>
            </div>
          </div>
          {/* Card 3 */}
          <div className="card w-96 bg-base-100 shadow-xl card-normal basis-[80%] sm:basis-[40%] md:basis-[30%]">
            <div className="card-body">
              <h2 className="card-title">Time Efficiency</h2>
              <ul className="flex flex-col text-left">
                <li>
                  Save time on research and ideation with AI-generated content
                  suggestions.
                </li>
                <br />
                <li>
                  Automate routine tasks, so you can focus on what you do
                  best—creating compelling content.
                </li>
              </ul>
            </div>
          </div>
          {/* Card 4 */}
          <div className="card w-96 bg-base-100 shadow-xl card-normal basis-[80%] sm:basis-[40%] md:basis-[30%]">
            <div className="card-body">
              <h2 className="card-title">SEO Optimization</h2>
              <ul className="flex flex-col text-left">
                <li>
                  Improve your search engine rankings with AI-guided SEO
                  suggestions.
                </li>
                <br />
                <li>
                  Ensure your content is well-structured and optimized for
                  discoverability.
                </li>
              </ul>
            </div>
          </div>
          {/* Card 5 */}
          <div className="card w-96 bg-base-100 shadow-xl card-normal basis-[80%] sm:basis-[40%] md:basis-[30%]">
            <div className="card-body">
              <h2 className="card-title">Data Insights</h2>
              <ul className="flex flex-col text-left">
                <li>
                  Gain valuable insights into your content performance and
                  audience behavior.
                </li>
                <br />
                <li>
                  Make data-informed decisions to refine your content strategy.
                </li>
              </ul>
            </div>
          </div>
          {/* Card 6 */}
          <div className="card w-96 bg-base-100 shadow-xl card-normal basis-[80%] sm:basis-[40%] md:basis-[30%]">
            <div className="card-body">
              <h2 className="card-title">User-Friendly Interface</h2>
              <ul className="flex flex-col text-left">
                <li>
                  Our user-friendly platform makes it easy to harness the power
                  of AI, even for beginners.
                </li>
                <br />
                <li>
                  Intuitive tools and real-time feedback ensure a smooth user
                  experience.
                </li>
              </ul>
            </div>
          </div>
          {/* Cards End */}
        </div>
      </div>
    </div>
  );
};

export default HomeFeatures;
