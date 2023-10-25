import CommonHero from "../components/CommonHero";
import { useContext } from "react";
import { AppContext } from "../App";

const Dashboard = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);

  const handleSignOut = () => {
    localStorage.removeItem("userID");
    setIsLoggedIn(false);
  };
  return (
    <>
      <CommonHero
        heading="Dashboard"
        cta={`You are signed ${isLoggedIn ? "in" : "out"}.`}
      />
      {isLoggedIn && (
        <button className="btn btn-primary" onClick={handleSignOut}>
          Sign out
        </button>
      )}
    </>
  );
};

export default Dashboard;
