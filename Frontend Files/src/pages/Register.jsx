import React from "react";
import { useForm } from "react-hook-form";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { FaInfoCircle } from "react-icons/fa";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log("User registered:", userCredential.user);
      alert("Registration successful!");
      reset();
    } catch (error) {
      console.error("Registration error:", error.message);
      alert(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center mt-10 px-4">
      {/* Title */}
      <h1 className="text-3xl font-bold text-sky-600 mb-4 text-center">ArtCanvas</h1>

      {/* Form Card */}
      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded shadow-md mb-16">
        <h2 className="text-xl font-semibold mb-4">Create account</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <label className="text-sm font-medium">Your name</label>
            <input
              type="text"
              {...register("name", { required: "Full Name is required" })}
              placeholder="First and last name"
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 mt-1"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format"
                }
              })}
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 mt-1"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
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
              placeholder="At least 6 characters"
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 mt-1"
            />
            <div className="text-sm flex items-center gap-1 mt-1">
              <FaInfoCircle className="text-sky-600" />
              Passwords must be at least 6 characters.
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-sm font-medium">Re-enter password</label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Please confirm your password"
              })}
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 mt-1"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-sky-600 text-white py-2 rounded hover:bg-sky-700"
          >
            Create your ArtCanvas account
          </button>
        </form>

        {/* Terms */}
        <p className="text-xs text-gray-600 mt-4">
          By creating an account, you agree to{" "}
          <Link to="/conditions" className="text-blue-600 hover:underline">
            ArtCanvas's Conditions of Use
          </Link>{" "}
          and{" "}
          <Link to="/privacy" className="text-blue-600 hover:underline">
            Privacy Notice
          </Link>
          .
        </p>

        {/* Divider */}
        <hr className="my-6 border-t border-gray-300" />

        {/* Sign in Link */}
        <p className="text-sm text-gray-700 text-center">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-blue-600 hover:underline inline-flex items-center"
          >
            Sign in <span className="ml-1">&gt;</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
