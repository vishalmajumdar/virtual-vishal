const HomeHero = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(hero.gif)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              AI-Powered Solutions for Top Bloggers
            </h1>
            <p className="mb-5">
              Supercharge Your Blogging with AI-Powered Tools. Elevate Your
              Content and Engagement. Unleash the Future of Blogging Today.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHero;
