const AboutStory = () => {
  return (
    <div className="hero py-10 bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold font-serif">
            Our Story - Transforming Blogging with AI
          </h1>
          <p className="py-6">
            Founded in 2023, Virtual Vishal is established with a clear vision:
            to revolutionize blogging through AI-powered solutions. Over the
            years, our journey has seen key milestones:
          </p>
          {/* Table Start */}
          <div className="flex justify-center">
            <div className="overflow-x-auto">
              <table className="table table-zebra-zebra">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Date</th>
                    <th>MileStone</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>1</th>
                    <td>Oct 10, 2023</td>
                    <td>Introduction of AI-driven content optimization.</td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <th>2</th>
                    <td>Oct 15, 2023</td>
                    <td>Collaboration with influential bloggers.</td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <th>3</th>
                    <td>Oct 20, 2023</td>
                    <td>
                      Expansion into SEO optimization, content ideation, and
                      data analytics.
                    </td>
                  </tr>
                  {/* row 4 */}
                  <tr>
                    <th>4</th>
                    <td>Oct 25, 2023</td>
                    <td>Serving bloggers from 24 countries globally.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Table End */}
          <p className="py-6">
            Our mission is simple: to empower bloggers with advanced AI tools
            that simplify content creation, elevate quality, and engage
            audiences. We're committed to making blogging excellence accessible
            to all, regardless of niche or experience. Join us as we shape the
            future of blogging with AI.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutStory;
