import CommonHero from "../components/CommonHero";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Divider from "../components/Divider";
import DashboardHub from "../components/DashboardHub";

const Dashboard = () => {
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
        heading="Welcome to Your Creative Hub"
        brief="Your journey begins here, where you can unleash your creativity using our powerful tools. Generate articles, craft engaging blog posts, and bring your ideas to life with image generation. Explore the endless possibilities and take your content to the next level."
        cta="Get Started"
      />
      <Divider />
      <DashboardHub />
      <Divider />
    </>
  );
};

export default Dashboard;
