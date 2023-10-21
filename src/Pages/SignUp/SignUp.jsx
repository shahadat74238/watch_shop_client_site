import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsEyeSlash} from "react-icons/bs";
import { BsEye } from "react-icons/bs";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';


const SignUp = () => {
  const [type, setType] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { createUser, googleSignIn, profileUpdate } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        console.log(res.user);
        toast.success('Successfully Sign In!')
        // Navigate
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    const accepted = form.get('check');
    console.log(name, photo, email, password);

    if(password.length < 6 ){
      setError("Password should be at least 6 characters longer!");
      return;
    }
    else if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!])(?!.*\s).{6,16}$/.test(password)) {
      setError("Password should be at least one uppercase letter, one lowercase letter and one number!!!");
      return;
    }
    else if(accepted === null){
      setError("Please accept our trams and conditions!");
      return;
    }

    createUser(email, password)
      .then((res) => {
        profileUpdate(name, photo).then(() => {
          window.location.reload();
        });
        console.log(res.user);
        toast.success('Successfully Sign In!')
        // Navigate
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="min-h-screen mt-16">
      
      <div className="container mx-auto py-10 justify-between items-center">
        <div className="md:w-2/3 lg:w-2/5 mx-auto px-5 md:px-10 lg:px-0  md:pb-8 rounded-lg">
          <div className="md:px-14 px-8 py-6 rounded-md border border-secondary-color">
            <h1 className="font-bold uppercase text-2xl text-secondary-color">
              Sign Up
            </h1>
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
                  className="absolute dark:text-white cursor-pointer bottom-4 right-0"
                >
                  {type ? <BsEye></BsEye> : <BsEyeSlash></BsEyeSlash>}
                </span>
              </div>
              <div className="mt-3">
                <p className="text-red-700 font-semibold">{error}</p>
              </div>
              <div className="flex justify-between items-center mt-6">
                <div>
                  <input
                    type="checkbox"
                    name="check"
                    id="check "
                    className="cursor-pointer h-5 w-5 mr-3"
                  />
                  <label htmlFor="check" className="dark:text-white">
                    Trams and Condition
                  </label>
                </div>
              </div>
              <button className="w-full h-12 hover:bg-white hover:border hover:border-secondary-color duration-500 hover:text-secondary-color bg-secondary-color uppercase font-semibold text-lg text-white mt-10">
                Sign up
              </button>
            </form>
            <p className="mt-6 dark:text-white">
              Don’t have an account?{" "}
              <Link to="/signIn" className="text-secondary-color underline">
                Sign In
              </Link>
            </p>
          </div>
          <div className="divider px-10 text-[#C5C5C5]">Or</div>
          <div className="space-y-3 px-10">
            <button
              onClick={handleGoogleSignIn}
              className="w-full dark:text-white border-2 border-secondary-color py-2  rounded-lg"
            >
              <FcGoogle className="inline mr-5 text-lg" />
              Continue with Google
            </button>
            
          </div>
        </div>
        
      </div>
      <Toaster />
    </div>
  );
};

export default SignUp;
