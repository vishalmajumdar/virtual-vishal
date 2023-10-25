import Divider from "../components/Divider";
import SignInAndUp from "../components/SignInAndUp";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem("token");
    const userID = localStorage.getItem("userID");

    if (token && userID) {
      navigate("/dashboard");
    }
  }, []);
  return (
    <>
      <SignInAndUp />
      <Divider />
    </>
  );
};

export default SignUp;
