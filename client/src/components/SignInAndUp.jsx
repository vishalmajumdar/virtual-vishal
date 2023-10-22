import { Link, useLocation } from "react-router-dom";
import AddParticles from "./AddParticles";

const SignIn = () => {
  return (
    <>
      <h1 className="max-w-xl mb-5 text-5xl font-bold font-serif">Sign In</h1>
      <form className="form-control gap-1 sm:min-w-[400px] items-center">
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="submit"
          className="input input-bordered w-full max-w-xs cursor-pointer"
        />
        <small className="mt-3">
          Not registered? <Link to={"/signup"}> Sign Up</Link>
        </small>
      </form>
    </>
  );
};

const SignUp = () => {
  return (
    <>
      <h1 className="max-w-xl mb-5 text-5xl font-bold font-serif">Sign Up</h1>
      <form className="form-control gap-1 sm:min-w-[400px] items-center">
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="submit"
          className="input input-bordered w-full max-w-xs cursor-pointer"
        />
        <small className="mt-3">
          Already registered? <Link to={"/signin"}> Sign In</Link>
        </small>
      </form>
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
