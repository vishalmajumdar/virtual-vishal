import CommonHero from "../components/CommonHero";
import Divider from "../components/Divider";
import Blogging from "../components/Blogging";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Blog = (props) => {
  const navigate = useNavigate();

  // Use localStorage.getItem to set initial values
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [userID, setUserID] = useState(localStorage.getItem("userID") || "");

  useEffect(() => {
    // Check if user is authenticated

    if (!token && !userID) {
      navigate("/signin");
    }
  }, [token, userID, navigate]);
  return (
    <>
      <CommonHero
        heading="Elevate Your Blogging"
        brief="Empower your writing with OpenAI's advanced tools. Craft engaging, insightful, and SEO-friendly blog posts effortlessly. Transform your ideas into compelling content with ease."
        cta="Get Started"
      />
      <Divider />
      <Blogging />
      <Divider />
    </>
  );
};

export default Blog;
