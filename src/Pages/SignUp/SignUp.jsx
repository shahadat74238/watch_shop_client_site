import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsEyeSlash, BsGithub } from "react-icons/bs";
import { BsEye } from "react-icons/bs";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const SignUp = () => {
  const [type, setType] = useState(false);
  const {createUser, googleSignIn} = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    googleSignIn()
    .then(res => {
      console.log(res.user);
    })
    .catch(err => {
      console.log(err.message);
    })
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);

    createUser(email, password)
    .then(res => {
      console.log(res.user);
    })
    .catch(err => {
      console.log(err.message);
    });
  };

  return (
    <div className="min-h-screen -mt-16">
      <div className="h-[40vh] bg-primary-color  bg-cover bg-no-repeat bg-center">
        <h1 className="text-3xl pt-[20vh] text-white font-bold text-center uppercase">
          Login
        </h1>
      </div>
      <div className="max-w-7xl mx-auto py-10 justify-between items-center grid grid-cols-1 lg:grid-cols-2">
        <div className="md:w-3/4 mx-auto px-5 md:px-10 lg:px-0  md:pb-8 rounded-lg">
          <div className="md:px-14 px-8 py-6 rounded-md border border-secondary-color">
            <h1 className="font-bold uppercase text-2xl text-secondary-color">Sign Up</h1>
            <form onSubmit={handleSignUp}>
              <div>
                <input
                  type="name"
                  name="name"
                  id="name"
                  required
                  placeholder="Full Name"
                  className="mt-6 outline-none border-b-2 border-[#C5C5C5] py-2 placeholder:text-[#C5C5C5]  bg-transparent  w-full"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="photo"
                  id="photo"
                  placeholder="Photo URL"
                  className="mt-6 outline-none border-b-2 border-[#C5C5C5] py-2 placeholder:text-[#C5C5C5]  bg-transparent  w-full"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Username or Email"
                  className="mt-6 outline-none border-b-2 border-[#C5C5C5] py-2 placeholder:text-[#C5C5C5]  bg-transparent  w-full"
                />
              </div>
              <div className="relative">
                <input
                  type={type ? "text" : "password"}
                  name="password"
                  id="password"
                  required
                  placeholder="Password"
                  className={`${
                    type ? "text-base py-3" : ""
                  } mt-4 outline-none placeholder:font-normal placeholder:text-base text-2xl font-bold border-b-2  border-[#C5C5C5] py-2 placeholder:text-[#C5C5C5] bg-transparent w-full`}
                />
                <span
                  onClick={() => setType(!type)}
                  className="absolute cursor-pointer bottom-4 right-0"
                >
                  {type ? <BsEye></BsEye> : <BsEyeSlash></BsEyeSlash>}
                </span>
              </div>
              <div className="mt-3">
                <p className="text-red-700 font-semibold">Show Error</p>
              </div>
              <div className="flex justify-between items-center mt-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="check"
                    id="check "
                    className="cursor-pointer h-5 w-5 mr-3"
                  />
                  <label htmlFor="check" className="">
                    Remember Me
                  </label>
                </div>
                <p className="text-secondary-color underline cursor-pointer">
                  Forgot Password
                </p>
              </div>
              <button className="w-full h-12 hover:bg-white hover:border hover:border-secondary-color duration-500 hover:text-secondary-color bg-secondary-color uppercase font-semibold text-lg text-white mt-10">
                Sign up
              </button>
            </form>
            <p className="mt-6 ">
              Don’t have an account?{" "}
              <Link to="/signIn" className="text-secondary-color underline">
                Sign In
              </Link>
            </p>
          </div>
          <div className="divider px-10 text-[#C5C5C5]">Or</div>
          <div className="space-y-3 px-10">
            <button onClick={handleGoogleSignIn} className="w-full border-2 border-secondary-color py-2  rounded-lg">
              <FcGoogle className="inline mr-5 text-lg" />
              Continue with Google
            </button>
            <button className="w-full border-2 border-secondary-color py-2  rounded-lg">
              <BsGithub className="inline mr-5 text-lg" />
              Continue with Github
            </button>
          </div>
        </div>
        <div className="hidden lg:visible lg:block">
          <img
            src="https://i.ibb.co/19cZDZ1/undraw-Account-re-o7id.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
