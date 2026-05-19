import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { loginUser } from "../services/auth.service";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = async () => {
    try {
      const data =
        await loginUser(
          email,
          password
        );

      localStorage.setItem(
        "token",
        data.token
      );

      alert("Login Successful");

      navigate("/dashboard");

    } catch (error) {
      console.log(error);

      alert("Login Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-3xl w-full max-w-md shadow-sm">
        <h1 className="text-3xl font-bold mb-8">
          Login
        </h1>

        <div className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            className="w-full h-12 px-4 rounded-xl border border-gray-200 outline-none"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full h-12 px-4 rounded-xl border border-gray-200 outline-none"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
          />

          <button
            onClick={handleLogin}
            className="w-full h-12 rounded-xl bg-blue-700 text-white hover:bg-blue-800 transition"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;