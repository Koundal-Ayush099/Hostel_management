import { useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  Building2,
  User,
  Mail,
  Lock,
  ArrowRight,
} from "lucide-react";

import axios from "axios";

const Signup = () => {

  const navigate =
    useNavigate();

  const [formData, setFormData] =
    useState({

      name: "",

      email: "",

      password: "",
    });

  const [loading, setLoading] =
    useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    setFormData({
      ...formData,

      [e.target.name]:
        e.target.value,
    });
  };

  const handleSignup =
    async () => {

      try {

        setLoading(true);

        await axios.post(
          "http://localhost:5000/api/auth/register",
          {

            ...formData,

            role:
              "STUDENT",
          }
        );

        alert(
          "Account Created Successfully"
        );

        navigate("/login");

      } catch (error) {

        console.log(error);

        alert(
          "Signup Failed"
        );

      } finally {

        setLoading(false);
      }
    };

  return (

    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">

      <div className="bg-white w-full max-w-md rounded-3xl p-8 shadow-2xl border border-slate-200">

        {/* LOGO */}
        <div className="flex items-center gap-3 justify-center mb-8">

          <div className="w-14 h-14 rounded-2xl bg-blue-700 text-white flex items-center justify-center">

            <Building2 size={28} />

          </div>

          <div>

            <h1 className="text-3xl font-bold text-slate-800">
              Ostello
            </h1>

            <p className="text-slate-500 text-sm">
              Student Registration
            </p>

          </div>
        </div>

        {/* TITLE */}
        <div className="mb-8 text-center">

          <h2 className="text-3xl font-bold text-slate-800">
            Create Account
          </h2>

          <p className="text-slate-500 mt-2">
            Register to access the hostel portal.
          </p>

        </div>

        {/* FORM */}
        <div className="space-y-5">

          {/* NAME */}
          <div>

            <label className="text-sm font-medium text-slate-600 mb-2 block">
              Full Name
            </label>

            <div className="flex items-center border border-slate-200 rounded-2xl px-4 h-14">

              <User
                size={20}
                className="text-slate-400"
              />

              <input
                type="text"
                name="name"
                placeholder="Enter full name"
                className="flex-1 h-full px-3 outline-none bg-transparent"
                onChange={handleChange}
              />

            </div>
          </div>

          {/* EMAIL */}
          <div>

            <label className="text-sm font-medium text-slate-600 mb-2 block">
              Email
            </label>

            <div className="flex items-center border border-slate-200 rounded-2xl px-4 h-14">

              <Mail
                size={20}
                className="text-slate-400"
              />

              <input
                type="email"
                name="email"
                placeholder="Enter email"
                className="flex-1 h-full px-3 outline-none bg-transparent"
                onChange={handleChange}
              />

            </div>
          </div>

          {/* PASSWORD */}
          <div>

            <label className="text-sm font-medium text-slate-600 mb-2 block">
              Password
            </label>

            <div className="flex items-center border border-slate-200 rounded-2xl px-4 h-14">

              <Lock
                size={20}
                className="text-slate-400"
              />

              <input
                type="password"
                name="password"
                placeholder="Create password"
                className="flex-1 h-full px-3 outline-none bg-transparent"
                onChange={handleChange}
              />

            </div>
          </div>

          {/* BUTTON */}
          <button
            onClick={handleSignup}
            disabled={loading}
            className="w-full h-14 rounded-2xl bg-blue-700 hover:bg-blue-800 transition text-white font-semibold flex items-center justify-center gap-2"
          >

            {loading
              ? "Creating..."
              : "Create Account"}

            {!loading && (
              <ArrowRight size={18} />
            )}

          </button>

          {/* LOGIN */}
          <p className="text-center text-sm text-slate-500">

            Already have an account?
            {" "}

            <span
              onClick={() =>
                navigate("/login")
              }
              className="text-blue-700 font-medium cursor-pointer hover:underline"
            >
              Login
            </span>

          </p>

        </div>
      </div>
    </div>
  );
};

export default Signup;