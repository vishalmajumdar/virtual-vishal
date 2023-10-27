const Summarizer = () => {
  return (
    <div className="hero py-10 bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-3xl flex flex-col items-center">
          <h1 className="text-4xl font-bold font-serif">
            Enter URL to Summarize
          </h1>
          {/* Summary Block Starts */}
          <div className="join py-6">
            <input
              className="input input-bordered join-item"
              placeholder="Enter URL"
            />
            <button className="btn join-item rounded-r-full">Summarize</button>
          </div>
          <h4>History</h4>
          <br />
          <small>https://www.gkv.ac.in/</small>
          {/* Summary Block Ends */}
          <p className="py-6">
            Gurukula Kangri University, founded in 1902, aims to revive the
            ancient Indian Gurukula System of education. Located on the banks of
            the Ganges, the university provides education in vedic literature,
            Indian philosophy, Indian culture, modern sciences, and research. It
            is fully funded by the UGC/Government of India. The university also
            has a women's campus, Kanya Gurukula Campus, established in 1922 in
            Dehradun and another campus in Hardwar established in 1993.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Summarizer;
