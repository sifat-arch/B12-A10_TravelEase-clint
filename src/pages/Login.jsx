import React from "react";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {
  const { logInUser, signInUserWithGoogle } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    // login user
    logInUser(email, password)
      .then((res) => {
        console.log("logged user", res.user);
        if (res.user) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Logged in",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        e.target.reset();
        navigate(location.state || "/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGoogleLogin = () => {
    signInUserWithGoogle()
      .then((res) => {
        console.log("logged user", res.user);
        if (res.user) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Login with google done",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(location.state || "/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-lg  bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
          Login to Your Account
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your password"
            />

            <div className="flex justify-between items-center mt-4">
              {/* checkbox */}
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  Remember{" "}
                  <a href="/terms" className="text-purple-600 hover:underline">
                    me
                  </a>
                </label>
              </div>

              <div>
                <Link
                  to="/forget-password"
                  className="text-sm text-purple-600 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full btn-primary py-7 hover:bg-purple-700 transition"
          >
            Login
          </button>

          {/* google button */}
          <button
            className="btn w-full py-5.5 bg-white text-black border-[#e5e5e5]"
            onClick={handleGoogleLogin}
            type="button"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
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
        <p className="text-center text-sm text-gray-600 mt-5">
          Don’t have an account?{" "}
          <Link to="/register" className="text-purple-600 hover:underline ">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
