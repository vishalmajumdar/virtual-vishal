import { Link } from "react-router-dom";
const DashboardHub = () => {
  return (
    <>
      <div className="hero py-10 bg-base-200">
        <div className="hero-content text-center flex-col">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold font-serif">
              Your Creative Hub Awaits
            </h1>
            <p className="py-6">
              Welcome to your central hub for creativity. Discover a suite of
              powerful tools, each tailored to enhance your content creation
              journey. From generating articles to crafting blog posts and even
              creating stunning images, we've got you covered. Explore the tools
              that will elevate your content creation experience.
            </p>
          </div>
          <div className="max-w-5xl flex flex-wrap gap-3 justify-center">
            {/* Cards Start */}
            <div className="card bg-base-100 shadow-xl card-normal basis-[80%] sm:basis-[60%] md:basis-[50%] lg:basis-[30%] min-w-[300px]">
              <div className="card-body justify-between">
                <h2 className="card-title font-serif">Article Summarizer</h2>
                <ul className="flex flex-col text-left list-disc	">
                  <li>Efficient Summaries</li>
                  <li>Clear Content</li>
                  <li>Time Saver</li>
                  <li>SEO-Friendly</li>
                </ul>

                <Link to={"/dashboard/summarize"}>
                  <button className="btn w-full mt-3">Open</button>
                </Link>
              </div>
            </div>
            {/* Card 2 */}
            <div className="card bg-base-100 shadow-xl card-normal basis-[80%] sm:basis-[60%] md:basis-[50%] lg:basis-[30%] min-w-[300px]">
              <div className="card-body justify-between">
                <h2 className="card-title font-serif">Blog Writer</h2>
                <ul className="flex flex-col text-left list-disc	">
                  <li>Creative Writing</li>
                  <li>Content Variety</li>
                  <li>Time Efficiency</li>
                  <li>SEO Guidance</li>
                </ul>
                <Link to={"/dashboard/blog"}>
                  {" "}
                  <button className="btn w-full mt-3">Open</button>
                </Link>
              </div>
            </div>
            {/* Card 3 */}
            <div className="card bg-base-100 shadow-xl card-normal basis-[80%] sm:basis-[60%] md:basis-[50%] lg:basis-[30%] min-w-[300px]">
              <div className="card-body justify-between">
                <h2 className="card-title font-serif text-left">
                  Image Generator
                </h2>
                <ul className="flex flex-col text-left list-disc	">
                  <li>Visualize Ideas</li>
                  <li>Versatile Graphics</li>
                  <li>Customization</li>
                  <li>Design Efficiency</li>
                </ul>
                <Link to={"/dashboard/image"}>
                  {" "}
                  <button className="btn w-full mt-3">Open</button>
                </Link>
              </div>
            </div>
            {/* Cards End */}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHub;
