import CommonHero from "../components/CommonHero";
import Divider from "../components/Divider";
import Summarizer from "../components/Summarizer";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const summarize = (props) => {
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
        heading="Summarize with Ease"
        brief="Unlock the magic of OpenAI's summarization technology to condense your articles into crisp, digestible summaries. Make your content shine with clarity and brevity. Try it now and revolutionize your writing"
        cta="Try it Now"
      />
      <Divider />
      <Summarizer />
      <Divider />
    </>
  );
};

export default summarize;
