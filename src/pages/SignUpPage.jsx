import { useNavigate } from "react-router-dom";
import SignUpComponent from "../components/Auth/SignUpComponent/SignUpComponent";

const SignUpPage = () => {
  const navigate = useNavigate();

  return (
    <div className=" flex flex-col-reverse md:grid md:grid-cols-12 overflow-hidden">
      <div
        className="absolute top-5 left-5 z-50  cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img
          src="/assets/logo.png" // Replace with the correct path
          alt="Home"
          className="w-12"
        />
      </div>
      {/* Left Section */}
      <div className="relative col-span-7 hidden md:block  h-screen">
        <img
          src="/assets/sign-up.png" // Updated path
          alt="Signup"
          className="w-full h-full object-cover"
          loading="lazy" // Added lazy loading
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Right Section */}
      {/* <div className="flex items-center justify-center bg-gradient-to-b from-blue-800 to-blue-900 h-[60vh] lg:h-screen"> */}
      <SignUpComponent />
      {/* </div> */}
    </div>
  );
};

export default SignUpPage;
