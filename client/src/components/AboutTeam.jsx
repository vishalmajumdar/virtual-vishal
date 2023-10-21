const AboutTeam = () => {
  return (
    <div className="hero py-10 bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-3xl flex flex-col items-center">
          <h1 className="text-4xl font-bold font-serif">
            Meet Our Team - Vishal Majumdar
          </h1>
          {/* Card Start */}
          <div className="card shadow-xl">
            <div className="card-body flex flex-col items-center">
              {/* Avatar Start */}
              <div className="avatar flex justify-center my-5">
                <div className="w-24 rounded-full">
                  <img src="https://resume.vishalmajumdar.me/assets/images/profile-picture.jpg" />
                </div>
              </div>
              {/* Avatar End */}
              <h2 className="card-title">Founder and Developer</h2>
              <p>
                Vishal Majumdar is the driving force behind Virtual Vishal,
                shaping our direction and ensuring our AI solutions meet
                bloggers' needs.
              </p>
            </div>
          </div>
          {/* Card End */}
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
