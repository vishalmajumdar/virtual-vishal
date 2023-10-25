import CommonHero from "../components/CommonHero";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";
import Divider from "../components/Divider";

const Dashboard = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  // Use localStorage.getItem to set initial values
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [userID, setUserID] = useState(localStorage.getItem("userID") || "");

  const handleSignOut = () => {
    localStorage.removeItem("userID");
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setToken("");
    setUserID("");
  };

  useEffect(() => {
    // Check if user is authenticated

    if (!token && !userID) {
      navigate("/signin");
    }
  }, [token, userID, navigate]);

  return (
    <>
      <CommonHero
        heading="Dashboard"
        cta={`You are signed ${isLoggedIn ? "in" : "out"}.`}
      />
      <Divider />
    </>
  );
};

export default Dashboard;
