// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { auth } from "../../firebase";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { useNavigate, Link } from "react-router-dom";
// import { FaInfoCircle } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc"; // ✅ Google icon
// import { useAuth } from "../../context/AuthContext";

// const SignIn = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset
//   } = useForm();


//   const navigate = useNavigate();
//   const [showHelp, setShowHelp] = useState(false);
//   const { googleLogin } = useAuth(); // ✅ get googleLogin from context

//   const onSubmit = async (data) => {
//     try {
//       const userCredential = await signInWithEmailAndPassword(
//         auth,
//         data.email,
//         data.password
//       );
//       console.log("User logged in:", userCredential.user);
//       alert("Login successful!");
//       reset();
//       navigate("/"); // Redirect to homepage or dashboard
//     } catch (error) {
//       console.error("Login error:", error.message);
//       alert("Invalid credentials. Try again.");
//     }
//   };

//   // ✅ Google login handler
//   const handleGoogleLogin = async () => {
//     try {
//       await googleLogin();
//       alert("Login with Google successful!");
//       navigate("/");
//     } catch (error) {
//       console.error("Google login error:", error.message);
//       alert("Google login failed. Please try again.");
//     }
//   };

//   return (
//         <div className='pt-[190px]'>
//     <div className="flex flex-col items-center mt-10 px-4">
//       {/* Brand Title */}
//       <h1 className="text-3xl font-bold text-sky-600 mb-4 text-center">ArtCanvas</h1>

//       {/* Form Card */}
//       <div className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded shadow-md mb-16">
//         <h2 className="text-xl font-semibold mb-4">Sign in</h2>

//         {/* Sign In Form */}
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           {/* Email Input */}
//           <div>
//             <label className="text-sm font-medium">Email or mobile phone number</label>
//             <input
//               type="email"
//               {...register("email", {
//                 required: "Enter your email or mobile phone number",
//                 pattern: {
//                   value: /^\S+@\S+$/i,
//                   message: "Invalid email format"
//                 }
//               })}
//               placeholder=""
//               className="w-full p-2 mt-1 border rounded dark:bg-gray-700 dark:border-gray-600"
//             />
//             {errors.email && (
//               <p className="text-red-600 text-sm flex items-center mt-1 gap-1">
//                 <FaInfoCircle className="text-red-500" />
//                 {errors.email.message}
//               </p>
//             )}
//           </div>

//           {/* Password Input */}
//           <div>
//             <label className="text-sm font-medium">Password</label>
//             <input
//               type="password"
//               {...register("password", {
//                 required: "Password is required",
//                 minLength: {
//                   value: 6,
//                   message: "Password must be at least 6 characters"
//                 }
//               })}
//               className="w-full p-2 mt-1 border rounded dark:bg-gray-700 dark:border-gray-600"
//             />
//             {errors.password && (
//               <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
//             )}
//           </div>

//           {/* Continue Button */}
//           <button
//             type="submit"
//             className="w-full bg-sky-600 text-white py-2 rounded hover:bg-sky-700"
//           >
//             Continue
//           </button>
//         </form>

//         {/* ✅ Google Login Button */}
//         <div className="mt-4">
//           <button
//             onClick={handleGoogleLogin}
//             className="w-full border border-gray-300 py-2 rounded flex items-center justify-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700"
//           >
//             <FcGoogle className="text-xl" />
//             <span className="text-sm text-gray-700 dark:text-gray-200">Continue with Google</span>
//           </button>
//         </div>

//         {/* Terms */}
//         <p className="text-xs text-gray-600 mt-4">
//           By continuing, you agree to{" "}
//           <Link to="/conditions" className="text-blue-600 hover:underline">
//             ArtCanvas's Conditions of Use
//           </Link>{" "}
//           and{" "}
//           <Link to="/privacy" className="text-blue-600 hover:underline">
//             Privacy Notice
//           </Link>.
//         </p>

//         {/* Help Section Toggle */}
//         <div className="mt-6 text-sm text-blue-600 cursor-pointer hover:underline">
//           <span onClick={() => setShowHelp(!showHelp)}>▼ Need Help?</span>
//           {showHelp && (
//             <ul className="text-sm text-gray-700 dark:text-gray-300 mt-2 ml-4 list-disc space-y-1">
//               <li>
//                 <Link to="/forgot-password" className="text-blue-600 hover:underline">
//                   Forgot your password?
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/help" className="text-blue-600 hover:underline">
//                   Other issues with Sign-In
//                 </Link>
//               </li>
//             </ul>
//           )}
//         </div>

//         {/* Divider */}
//         <div className="my-6 flex items-center">
//           <div className="flex-grow border-t border-gray-300" />
//           <span className="mx-2 text-gray-500 text-sm">New to ArtCanvas?</span>
//           <div className="flex-grow border-t border-gray-300" />
//         </div>

//         {/* Create Account Button */}
//         <Link
//           to="/register"
//           className="block text-center w-full border border-gray-300 py-2 rounded text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
//         >
//           Create your ArtCanvas account
//         </Link>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default SignIn;



import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { FaInfoCircle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "../../context/AuthContext";
import emailjs from "@emailjs/browser";

// Initialize EmailJS (add this if not already in your app)
emailjs.init("1-zoBxE1w7iKhkcBP");

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  
  const navigate = useNavigate();
  const [showHelp, setShowHelp] = useState(false);
  const { googleLogin } = useAuth();

  const [otpSent, setOtpSent] = useState(false);
  const [otpCode, setOtpCode] = useState("");
  const [enteredOtp, setEnteredOtp] = useState("");
  const [timer, setTimer] = useState(80);
  const timerRef = useRef(null);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (otpSent && timer > 0) {
      timerRef.current = setTimeout(() => setTimer(prev => prev - 1), 1000);
    }
    return () => clearTimeout(timerRef.current);
  }, [otpSent, timer]);

  const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();

  const sendOtpByEmail = async (email, otp) => {
    const templateParams = {
      user_email: email,
      passcode: otp
    };

    try {
      console.log("Sending OTP to:", email);
      const result = await emailjs.send(
        "service_xwjri7m",
        "template_eclc9nf",
        templateParams,
        "1-zoBxE1w7iKhkcBP"
      );
      console.log("EmailJS response:", result);
      return { success: true, message: "OTP sent successfully! Please check your inbox." };
    } catch (error) {
      console.error("EmailJS error:", error);
      return { 
        success: false, 
        message: `Failed to send OTP. ${error.text || 'Please try again later.'}` 
      };
    }
  };

  const handleOtpVerification = async () => {
    if (!enteredOtp) {
      alert("Please enter the OTP");
      return;
    }

    if (enteredOtp === otpCode) {
      try {
        await signInWithEmailAndPassword(auth, formData.email, formData.password);
        alert("Login successful!");
        reset();
        navigate("/");
      } catch (error) {
        console.error("Login error:", error.message);
        alert(`Login failed: ${error.message}`);
      }
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  const resendOtp = async () => {
    if (timer > 0) {
      alert(`Please wait ${timer} seconds before requesting a new OTP`);
      return;
    }

    setLoading(true);
    const newOtp = generateOtp();
    setOtpCode(newOtp);
    setTimer(80);
    
    const result = await sendOtpByEmail(formData.email, newOtp);
    alert(result.message);
    setLoading(false);
  };

  const onSubmit = async (data) => {
    setLoading(true);
    const otp = generateOtp();
    setOtpCode(otp);
    setFormData(data);
    
    const result = await sendOtpByEmail(data.email, otp);
    alert(result.message);
    
    if (result.success) {
      setOtpSent(true);
    }
    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      navigate("/");
    } catch (error) {
      console.error("Google login error:", error.message);
      alert("Google login failed. Please try again.");
    }
  };

  return (
    <div className='pt-[190px]'>
      <div className="flex flex-col items-center mt-10 px-4">
        <h1 className="text-3xl font-bold text-sky-600 mb-4 text-center">ArtCanvas</h1>
        <div className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded shadow-md mb-16">
          <h2 className="text-xl font-semibold mb-4">Sign in</h2>

          {!otpSent ? (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="text-sm font-medium">Email or mobile phone number</label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Enter your email",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email format"
                    }
                  })}
                  className="w-full p-2 mt-1 border rounded dark:bg-gray-700 dark:border-gray-600"
                />
                {errors.email && (
                  <p className="text-red-600 text-sm flex items-center mt-1 gap-1">
                    <FaInfoCircle className="text-red-500" />
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium">Password</label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters"
                    }
                  })}
                  className="w-full p-2 mt-1 border rounded dark:bg-gray-700 dark:border-gray-600"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                )}
              </div>
              <button type="submit" className="w-full bg-sky-600 text-white py-2 rounded hover:bg-sky-700">
                Continue
              </button>
            </form>
          ) : (
            <div className="space-y-4">
              <p className="text-sm">Enter the OTP sent to your email.</p>
              <input
                type="text"
                value={enteredOtp}
                onChange={e => setEnteredOtp(e.target.value)}
                maxLength={6}
                className="w-full p-2 border rounded"
              />
              <button
                onClick={handleOtpVerification}
                className="w-full bg-sky-600 text-white py-2 rounded hover:bg-sky-700"
              >
                Verify OTP
              </button>
              <p className="text-sm text-gray-500">Time remaining: {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, "0")}</p>
              {timer === 0 && (
                <button
                  onClick={resendOtp}
                  className="w-full text-blue-600 hover:underline text-sm"
                >
                  Resend OTP
                </button>
              )}
            </div>
          )}

          <div className="mt-4">
            <button
              onClick={handleGoogleLogin}
              className="w-full border border-gray-300 py-2 rounded flex items-center justify-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <FcGoogle className="text-xl" />
              <span className="text-sm text-gray-700 dark:text-gray-200">Continue with Google</span>
            </button>
          </div>

          <p className="text-xs text-gray-600 mt-4">
            By continuing, you agree to
            <Link to="/conditions" className="text-blue-600 hover:underline"> ArtCanvas's Conditions of Use</Link>
            and
            <Link to="/privacy" className="text-blue-600 hover:underline"> Privacy Notice</Link>.
          </p>

          <div className="mt-6 text-sm text-blue-600 cursor-pointer hover:underline">
            <span onClick={() => setShowHelp(!showHelp)}>▼ Need Help?</span>
            {showHelp && (
              <ul className="text-sm text-gray-700 dark:text-gray-300 mt-2 ml-4 list-disc space-y-1">
                <li><Link to="/forgot-password" className="text-blue-600 hover:underline">Forgot your password?</Link></li>
                <li><Link to="/help" className="text-blue-600 hover:underline">Other issues with Sign-In</Link></li>
              </ul>
            )}
          </div>

          <div className="my-6 flex items-center">
            <div className="flex-grow border-t border-gray-300" />
            <span className="mx-2 text-gray-500 text-sm">New to ArtCanvas?</span>
            <div className="flex-grow border-t border-gray-300" />
          </div>

          <Link
            to="/register"
            className="block text-center w-full border border-gray-300 py-2 rounded text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Create your ArtCanvas account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

