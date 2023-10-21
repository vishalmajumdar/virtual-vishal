const CommonHero = (props) => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-xl">
          <h1 className="mb-5 text-5xl font-bold font-serif">
            {props.heading}
          </h1>
          <p className="mb-5">{props.brief}</p>
          <button className="btn btn-primary">{props.cta}</button>
        </div>
      </div>
    </div>
  );
};

export default CommonHero;
