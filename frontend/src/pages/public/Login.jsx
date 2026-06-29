import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GraduationCap } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const { role } = useParams();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const portalName = role
    ? `${role.charAt(0).toUpperCase()}${role.slice(1)} Portal`
    : "Smart LMS";

  const handleLogin = (e) => {
    e.preventDefault();

    // Student Login
    if (
      role === "student" &&
      email === "student@lms.com" &&
      password === "123456"
    ) {
      navigate("/student");
      return;
    }

    // Faculty Login
    if (
      role === "faculty" &&
      email === "faculty@lms.com" &&
      password === "123456"
    ) {
      navigate("/faculty");
      return;
    }

    // Admin Login
    if (
      role === "admin" &&
      email === "admin@lms.com" &&
      password === "123456"
    ) {
      navigate("/admin");
      return;
    }

    alert("Invalid email or password!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="bg-slate-800 p-4 rounded-2xl shadow-md">
            <GraduationCap className="w-10 h-10 text-white" />
          </div>
        </div>

        {/* Card */}
        <div className="bg-white border border-slate-200 rounded-3xl shadow-lg p-8">

          {/* Heading */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-900">
              Welcome Back
            </h1>

            <p className="mt-2 text-slate-500">
              Sign in to continue to the
            </p>

            <p className="mt-1 font-semibold text-slate-700">
              {portalName}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-5">

            {/* Email */}
            <div>
              <label className="block mb-2 text-sm font-medium text-slate-700">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your university email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-slate-700 focus:ring-2 focus:ring-slate-200"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-2 text-sm font-medium text-slate-700">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-slate-700 focus:ring-2 focus:ring-slate-200"
              />
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between text-sm">

              <label className="flex items-center gap-2 text-slate-600">
                <input type="checkbox" />
                Remember me
              </label>

              <Link
                to="/forgot-password"
                className="font-medium text-slate-700 hover:text-slate-900"
              >
                Forgot Password?
              </Link>

            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full rounded-xl bg-slate-800 py-3 font-semibold text-white transition hover:bg-slate-900"
            >
              Login
            </button>

          </form>

          {/* Signup */}
          <div className="mt-8 text-center text-sm text-slate-600">
            Don't have an account?{" "}
            <Link
              to={`/signup/${role}`}
              className="font-semibold text-slate-800 hover:underline"
            >
              Sign Up
            </Link>
          </div>

        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-slate-500">
          © 2026 Smart LMS. All Rights Reserved.
        </p>

      </div>
    </div>
  );
}