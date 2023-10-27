import CommonHero from "../components/CommonHero";
import Divider from "../components/Divider";
import Imaging from "../components/Imaging";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Image = () => {
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
        heading="Visualize Imagination"
        brief="Experience the power of OpenAI's image generation technology to bring your ideas to life in vivid detail. Create stunning visuals effortlessly, from concept to reality. Try it now and transform your creativity into captivating images"
        cta="Try it Now"
      />
      <Divider />
      <Imaging />
      <Divider />
    </>
  );
};

export default Image;
