const Avatar = (props) => {
  return (
    <div className="avatar">
      <div className="w-16 rounded-full">
        <img src={props.img} />
      </div>
    </div>
  );
};

const Card = (props) => {
  return (
    <div className="card bg-base-100 shadow-xl basis-[80%] md:basis-[30%]">
      <div className="card-body">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="card-title font-serif">{props.name}</h2>
            <h4 className="card-title text-sm mt-2">{props.designation}</h4>
          </div>
          <Avatar img={props.img} />
        </div>
        <p className="text-left">{props.review}</p>
      </div>
    </div>
  );
};

const HomeTestimonials = () => {
  return (
    <div className="hero py-10 bg-base-200">
      <div className="hero-content text-center flex-col">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold font-serif">
            Testimonials from Satisfied Bloggers
          </h1>
          <p className="py-6">
            Discover what fellow bloggers have to say about their experience
            with our AI-powered tools. We take pride in providing top-notch
            solutions that truly make a difference in the blogging world. Here
            are some testimonials from bloggers who have harnessed the power of
            our technology:
          </p>
        </div>
        <div className="max-w-5xl flex flex-wrap gap-3 justify-center">
          {/* Cards Start */}
          <Card
            name="John D."
            designation="Lifestyle Blogger"
            review="I can't believe the transformation in my blog since I started using Virtual Vishal's AI tools. The content suggestions are a game-changer, and my audience engagement has soared. It's like having a personal content assistant!"
            img="https://i.pravatar.cc/400?img=70"
          />
          <Card
            name="Sarah M."
            designation="Travel Blogger"
            review="SEO used to be a headache for me, but with Virtual Vishal's AI, I've seen a significant boost in my rankings. The keyword suggestions are incredibly accurate, and my blog is reaching a broader audience than ever before."
            img="https://i.pravatar.cc/400?img=49"
          />
          <Card
            name="Michael S."
            designation="Tech Blogger"
            review="As a tech blogger, I need to stay ahead of the curve. Virtual Vishal's AI helps me uncover the latest trends and insights in the tech world. It's an invaluable resource for my work."
            img="https://i.pravatar.cc/400?img=69"
          />
          {/* Cards End */}
        </div>
      </div>
    </div>
  );
};

export default HomeTestimonials;
