const Imaging = () => {
  return (
    <div className="hero py-10 bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-3xl flex flex-col items-center">
          <h1 className="text-4xl font-bold font-serif">
            Enter Topic to Generate an Image
          </h1>
          {/* Imaging Block Starts */}
          <div className="join py-6">
            <input
              className="input input-bordered join-item"
              placeholder="Enter Topic"
            />
            <button className="btn join-item rounded-r-full">
              Generate Image
            </button>
          </div>
          {/* Imaging Block Ends */}
          <h4>History</h4>
          <br />
          <small>1. Cute Otter</small>
          <div className="py-6 text-left max-w-lg">
            <img
              src="/otter.png"
              alt="otter generate by openai"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imaging;
