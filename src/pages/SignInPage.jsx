import { useNavigate } from "react-router-dom";
import SignInComponent from "../components/Auth/SignInComponent/SignInComponent";

const SignInPage = () => {
  const navigate = useNavigate();
  return (
    <div className=" flex flex-col-reverse md:grid md:grid-cols-12 overflow-hidden">
      <div
        className="absolute top-5 left-5 z-50 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img
          src="/assets/logo.png" // Replace with the correct path
          alt="Home"
          className="w-12 "
        />
      </div>
      {/* Left Section */}

      <div className="relative col-span-7 hidden md:block  h-screen">
        <img
          src="/assets/sign-in.png" // Updated path
          alt="Login"
          className="w-full h-full object-cover bg-top"
          loading="lazy" // Added lazy loading
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Right Section */}
      {/* <div className="flex items-center col-span-4  border-2 justify-center bg-gradient-to-b from-blue-800 to-blue-900 h-[60vh] lg:h-screen"> */}
      <SignInComponent />
      {/* </div> */}
    </div>
  );
};

export default SignInPage;
