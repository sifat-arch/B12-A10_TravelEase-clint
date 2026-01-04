import React from "react";
import { Link, useLocation, useNavigate } from "react-router"; 
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import cover from "../assets/cover.jpg";

const Login = () => {
  const { logInUser, signInUserWithGoogle, theme } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    logInUser(email, password)
      .then((res) => {
        if (res.user) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Logged in Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        e.target.reset();
        navigate(location.state || "/");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Login Failed!",
          text: err.message || "Something went wrong during login.",
        });
      });
  };

  const handleGoogleLogin = () => {
    signInUserWithGoogle()
      .then((res) => {
        if (res.user) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Login with Google done",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(location.state || "/");
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Login Failed!",
          text: err.message || "Something went wrong during Google login.",
        });
      });
  };

  const isDark = theme === "dark";

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative px-4"
      style={{ backgroundImage: `url(${cover})` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Login Form Container */}
      <div
        className={`relative z-10 w-full max-w-lg shadow-2xl rounded-3xl p-8 backdrop-blur-md ${
          isDark ? "bg-gray-900/80 text-white" : "bg-white/90 text-black"
        }`}
      >
        <h2 className="text-3xl font-bold text-center mb-8">
          Login to Your <span className="text-yellow-500"> Account</span>
        </h2>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-transparent"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-transparent"
              placeholder="Enter your password"
            />

            <div className="flex justify-between items-center mt-3">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500"
                />
                <label htmlFor="remember" className="text-sm cursor-pointer">
                  Remember me
                </label>
              </div>
              <Link
                to="/forget-password"
                className="text-sm font-semibold text-yellow-500 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-xl transition duration-300 shadow-lg"
          >
            Login
          </button>

          {/* Divider */}
          <div className="flex items-center my-6 text-gray-400">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="px-3 text-sm uppercase">OR</span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>

          {/* Google Login Button */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 py-3 bg-white text-black border border-gray-300 rounded-xl hover:bg-gray-100 transition duration-300 shadow-md"
          >
            <svg
              aria-label="Google logo"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </form>

        {/* Register Redirect */}
        <p className="text-center text-sm mt-8">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-yellow-500 font-bold hover:underline"
          >
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
