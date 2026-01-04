// import React, { useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router";
// import useAuth from "../hooks/useAuth";
// import Swal from "sweetalert2";
// import cover from "../assets/cover.jpg";
// const Register = () => {
//   const { registerUser, signInUserWithGoogle, theme } = useAuth();
//   const [error, setError] = useState("");
//   const location = useLocation();
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     // check password
//     if (password.length < 6) {
//       return setError("Password Length must be at least 6 characters");
//     }
//     if (!/[A-Z]/.test(password)) {
//       return setError("Password must contain at least one uppercase letter");
//     }
//     if (!/[a-z]/.test(password)) {
//       return setError("Password must contain at least one Lowercase letter");
//     }

//     //  firebase register
//     registerUser(email, password)
//       .then((res) => {
//         if (res.user) {
//           Swal.fire({
//             position: "top-end",
//             icon: "success",
//             title: "You have been registered",
//             showConfirmButton: false,
//             timer: 1500,
//           });
//         }

//         e.target.reset();
//         navigate(location.state || "/");
//       })
//       .catch((err) => {
//         Swal.fire({
//           icon: "error",
//           title: "Login Failed!",
//           text: err.message || "Something went wrong during register.",
//         });
//       });
//   };

//   const handleGoogleLogin = () => {
//     signInUserWithGoogle()
//       .then((res) => {
//         console.log("logged user", res.user);
//         if (res.user) {
//           Swal.fire({
//             position: "top-end",
//             icon: "success",
//             title: "Login with google done",
//             showConfirmButton: false,
//             timer: 1500,
//           });
//           navigate(location.state || "/");
//         }
//       })
//       .catch((err) => {
//         Swal.fire({
//           icon: "error",
//           title: "Login Failed!",
//           text: err.message || "Something went wrong during Google login.",
//         });
//       });
//   };
//   console.log(theme);
//   return (
//     <div
//       className={`min-h-screen flex items-center justify-center ${
//         theme === "light" ? "bg-gray-50" : "bg-gray-800"
//       }`}
//     >
//       <div
//         className={`w-full max-w-lg  shadow-lg rounded-2xl p-8 ${
//           theme === "light" ? "bg-white" : "bg-gray-700"
//         }`}
//       >
//         <h2
//           className={`text-3xl font-bold text-center mb-8 ${
//             theme === "light" ? "text-black" : "text-white"
//           } `}
//         >
//           Register to Your <span className="text-yellow-500"> Account</span>
//         </h2>

//         <form onSubmit={handleLogin} className="space-y-5">
//           {/* Name */}
//           <div>
//             <label
//               className={`block text-sm font-medium text-gray-600 mb-1 ${
//                 theme === "light" ? "text-gray-500" : "text-white"
//               }`}
//             >
//               Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               required
//               className="w-full border border-gray-300 rounded-lg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//               placeholder="your Name"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label
//               className={`block text-sm font-medium text-gray-600 mb-1 ${
//                 theme === "dark" && "text-white"
//               }`}
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               required
//               className="w-full border border-gray-300 rounded-lg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//               placeholder="Enter your email"
//             />
//           </div>

//           {/* Photo URL */}
//           <div>
//             <label
//               className={`block text-sm font-medium text-gray-600 mb-1 ${
//                 theme === "dark" && "text-white"
//               }`}
//             >
//               Photo URL
//             </label>
//             <input
//               type="text"
//               name="photo"
//               required
//               className="w-full border border-gray-300 rounded-lg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//               placeholder="Enter your PhotoURL"
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label
//               className={`block text-sm font-medium text-gray-600 mb-1 ${
//                 theme === "dark" && "text-white"
//               }`}
//             >
//               Password
//             </label>
//             <input
//               type="text"
//               name="password"
//               required
//               className="w-full border border-gray-300 rounded-lg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//               placeholder="Enter your password"
//             />
//           </div>
//           <div>
//             <p className="text-orange-500 font-semibold">{error}</p>
//           </div>

//           {/* checkbox */}
//           <div className="flex items-center space-x-2">
//             <input
//               type="checkbox"
//               id="terms"
//               required
//               className="w-4 h-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
//             />
//             <label
//               htmlFor="terms"
//               className={`text-sm text-gray-600 ${
//                 theme === "dark" && "text-white"
//               }`}
//             >
//               I agree to the{" "}
//               <a href="/#" className="text-yellow-500 hover:underline">
//                 Terms & Conditions
//               </a>
//             </label>
//           </div>

//           {/* Login Button */}
//           <button
//             type="submit"
//             className="w-full btn-primary py-7 bg-yellow-500 hover:bg-yellow-700 transition"
//           >
//             Register
//           </button>

//           {/* google button */}
//           <button
//             type="button"
//             onClick={handleGoogleLogin}
//             className="btn w-full py-5.5 bg-white text-black border-[#e5e5e5]"
//           >
//             <svg
//               aria-label="Google logo"
//               width="16"
//               height="16"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 512 512"
//             >
//               <g>
//                 <path d="m0 0H512V512H0" fill="#fff"></path>
//                 <path
//                   fill="#34a853"
//                   d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
//                 ></path>
//                 <path
//                   fill="#4285f4"
//                   d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
//                 ></path>
//                 <path
//                   fill="#fbbc02"
//                   d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
//                 ></path>
//                 <path
//                   fill="#ea4335"
//                   d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
//                 ></path>
//               </g>
//             </svg>
//             Login with Google
//           </button>
//         </form>

//         {/* Register Redirect */}
//         <p
//           className={`text-center text-sm text-gray-600 mt-5 ${
//             theme === "dark" && "text-white"
//           }`}
//         >
//           Don't have an account?{" "}
//           <Link to="/login" className="text-yellow-500 hover:underline ">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;

import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router"; // react-router-dom ব্যবহার করুন
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import cover from "../assets/cover.jpg";

const Register = () => {
  const { registerUser, signInUserWithGoogle, theme } = useAuth();
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // পাসওয়ার্ড ভ্যালিডেশন
    if (password.length < 6) {
      return setError("Password Length must be at least 6 characters");
    }
    if (!/[A-Z]/.test(password)) {
      return setError("Password must contain at least one uppercase letter");
    }
    if (!/[a-z]/.test(password)) {
      return setError("Password must contain at least one Lowercase letter");
    }

    // Firebase ইমেইল-পাসওয়ার্ড রেজিস্ট্রেশন
    registerUser(email, password)
      .then((res) => {
        if (res.user) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Account Created Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(location.state || "/");
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Registration Failed!",
          text: err.message,
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
          text: err.message,
        });
      });
  };

  const isDark = theme === "dark";

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative px-4"
      style={{ backgroundImage: `url(${cover})` }}
    >
      {/* Overlay - ইমেজটিকে একটু ডার্ক করার জন্য */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Form Container */}
      <div
        className={`relative z-10 w-full max-w-lg shadow-2xl rounded-3xl p-8 backdrop-blur-md ${
          isDark ? "bg-gray-900/80 text-white" : "bg-white/90 text-black"
        }`}
      >
        <h2 className="text-3xl font-bold text-center mb-8">
          Register to Your <span className="text-yellow-500"> Account</span>
        </h2>

        <form onSubmit={handleRegister} className="space-y-5">
          {/* Name Input */}
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-transparent"
              placeholder="Your Name"
            />
          </div>

          {/* Email Input */}
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

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-transparent"
              placeholder="Enter your password"
            />
          </div>

          {error && (
            <p className="text-orange-500 text-sm font-semibold">{error}</p>
          )}

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-xl transition duration-300 shadow-lg"
          >
            Register
          </button>

          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="px-3 text-sm uppercase">OR</span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>

          {/* Google Button */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 py-3 bg-white text-black border border-gray-300 rounded-xl hover:bg-gray-100 transition duration-300"
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
              className="w-6 h-6"
            />
            Login with Google
          </button>
        </form>

        <p className="text-center text-sm mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-yellow-500 font-bold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
