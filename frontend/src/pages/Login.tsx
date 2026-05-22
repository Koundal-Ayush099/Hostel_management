import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Building2, Lock, Mail, ArrowRight } from "lucide-react";

import { loginUser } from "../services/auth.service";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);

      const data = await loginUser(email, password);

      localStorage.setItem("token", data.token);

      localStorage.setItem("user", JSON.stringify(data));
      if (data.role === "ADMIN") {
        navigate("/dashboard");
      } else if (data.role === "STUDENT") {
        navigate("/student");
      }
    } catch (error) {
      console.log(error);

      alert("Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-slate-950">
      <div className="hidden lg:flex w-1/2 relative overflow-hidden bg-linear-to-br from-blue-700 via-indigo-800 to-slate-900 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />

        <div className="relative z-10 flex flex-col justify-center px-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
              <Building2 size={30} />
            </div>

            <div>
              <h1 className="text-4xl font-bold">Ostello</h1>

              <p className="text-blue-100">Hostel Management System</p>
            </div>
          </div>

          <h2 className="text-5xl font-bold leading-tight mb-6">
            Manage Your Hostel
            <br />
            Smarter & Faster
          </h2>

          <p className="text-lg text-slate-200 max-w-lg leading-relaxed">
            Streamline hostel operations, manage students, rooms, complaints,
            payments, and maintenance — all from one modern dashboard.
          </p>

          <div className="flex gap-6 mt-12">
            <div className="bg-white/10 border border-white/10 backdrop-blur-md px-6 py-4 rounded-2xl">
              <h3 className="text-3xl font-bold">500+</h3>
              <p className="text-sm text-slate-200">Students Managed</p>
            </div>

            <div className="bg-white/10 border border-white/10 backdrop-blur-md px-6 py-4 rounded-2xl">
              <h3 className="text-3xl font-bold">100%</h3>
              <p className="text-sm text-slate-200">Secure Platform</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-10 bg-slate-100">
        <div className="w-full max-w-md">
          <div className="bg-white shadow-2xl rounded-3xl p-8 border border-slate-200">
            {/* Mobile Logo */}
            <div className="flex lg:hidden items-center gap-3 mb-8 justify-center">
              <div className="w-12 h-12 rounded-2xl bg-blue-700 flex items-center justify-center text-white">
                <Building2 size={24} />
              </div>

              <div>
                <h1 className="text-2xl font-bold text-slate-800">Ostello</h1>

                <p className="text-sm text-slate-500">Hostel Management</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-800">
                Welcome Back 👋
              </h2>

              <p className="text-slate-500 mt-2">
                Login to continue managing your hostel seamlessly.
              </p>
            </div>

            <div className="space-y-5">
              {/* Email */}
              <div>
                <label className="text-sm font-medium text-slate-600 mb-2 block">
                  Email Address
                </label>

                <div className="flex items-center border border-slate-200 rounded-2xl px-4 h-14 focus-within:border-blue-600 transition">
                  <Mail size={20} className="text-slate-400" />

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 h-full px-3 outline-none bg-transparent"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="text-sm font-medium text-slate-600 mb-2 block">
                  Password
                </label>

                <div className="flex items-center border border-slate-200 rounded-2xl px-4 h-14 focus-within:border-blue-600 transition">
                  <Lock size={20} className="text-slate-400" />

                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="flex-1 h-full px-3 outline-none bg-transparent"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              {/* Remember + Forgot */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-slate-600 cursor-pointer">
                  <input type="checkbox" />
                  Remember me
                </label>

                <button className="text-blue-700 font-medium hover:underline">
                  Forgot Password?
                </button>
              </div>

              {/* Button */}
              <button
                onClick={handleLogin}
                disabled={loading}
                className="w-full h-14 rounded-2xl bg-blue-700 hover:bg-blue-800 transition text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-blue-700/20"
              >
                {loading ? "Logging in..." : "Login"}

                {!loading && <ArrowRight size={18} />}
              </button>
            </div>
            <p className="mt-5 text-center">
              Dont have an account?{" "}
              <span
                className="text-blue-400 hover:cursor-pointer"
                onClick={() => navigate("/signup")}
              >
                SignUp
              </span>
            </p>

            <p className="text-center text-sm text-slate-500 mt-8">
              © 2026 Ostello. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
