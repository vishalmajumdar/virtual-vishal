import { Link, useLocation, useNavigate } from "react-router-dom";
import AddParticles from "./AddParticles";
import { useEffect, useState, useContext } from "react";
import { AppContext } from "../App";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);

  const handleSignIn = async (e) => {
    e.preventDefault();

    if (email === "" || password == "") return setError("All fields required");
    else setError("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_API_URL}/api/users/signin`,
        {
          method: "POST",
          body: JSON.stringify({ email, password }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = await response.json();
      console.log(result.status, result);

      setError(result.msg);

      if (response.status === 200) {
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          navigate("/dashboard");
          setIsLoggedIn(true);
          setError("");
        }, 3000);
        localStorage.setItem("token", result.token);
        localStorage.setItem("userID", result.userID);
      }
    } catch (err) {
      console.log(err);
    }
  };

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
      <h1 className="max-w-xl mb-5 text-5xl font-bold font-serif">Sign In</h1>
      <form
        className="form-control gap-1 sm:min-w-[400px] items-center"
        onSubmit={handleSignIn}
      >
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full max-w-xs"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full max-w-xs"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {isLoading ? (
          <button className="btn btn-wide">
            <span className="loading loading-infinity"></span>
          </button>
        ) : (
          <input
            type="submit"
            className="input input-bordered w-full max-w-xs cursor-pointer"
          />
        )}

        <small className="mt-3">
          Not registered? <Link to={"/signup"}> Sign Up</Link>
        </small>
        {error && <small>{error}</small>}
      </form>
    </>
  );
};

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password == "")
      return setError("All fields required");
    else setError("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_API_URL}/api/users/signup`,
        {
          method: "POST",
          body: JSON.stringify({ name, email, password }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        if (response.status === 200) setShowToast(true);
      }, 3000);

      console.log(response.status);
      setTimeout(() => {
        setShowToast(false);
      }, 5000);

      setError(result.msg);
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <h1 className="max-w-xl mb-5 text-5xl font-bold font-serif">Sign Up</h1>
      <form
        className="form-control gap-1 sm:min-w-[400px] items-center"
        onSubmit={handleSignup}
      >
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {password !== confirmPassword ? (
          <>
            <small>Password does not match</small>
            <input
              disabled
              type="submit"
              className="input input-bordered w-full max-w-xs cursor-pointer"
            />
          </>
        ) : isLoading ? (
          <button className="btn btn-wide">
            <span className="loading loading-infinity"></span>
          </button>
        ) : (
          <input
            type="submit"
            className="input input-bordered w-full max-w-xs cursor-pointer"
          />
        )}
        <small className="mt-3">
          Already registered? <Link to={"/signin"}> Sign In</Link>
        </small>
        {error !== "" && <small>{error}</small>}
      </form>
      {/* Toast After Successful Registration */}
      {showToast && (
        <div className="toast toast-start">
          <div className="alert alert-success">
            <span>Email registered successfully.</span>
          </div>
        </div>
      )}
    </>
  );
};

const SignInAndUp = () => {
  const location = useLocation();
  const link = location.pathname;
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center flex-col">
          {link === "/signin" ? <SignIn /> : <SignUp />}
        </div>
        <AddParticles />
      </div>
    </>
  );
};

export default SignInAndUp;
