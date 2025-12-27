import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../../store/api/authApi/auth";
import { useState } from "react";
import toast from "react-hot-toast";

const LoginPage = () => {
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const [form, setForm] = useState({ userName: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await login({ userName: form.userName, password: form.password }).unwrap();
      console.log(res);
      localStorage.setItem("token", res.data);
      navigate("/");
      toast.success(`Token succesfully! welcome to Home`, {
        duration: 3000,
        icon: '✅',
      })
    } catch (error) {
      console.error(error);
      alert("Error login");
    }
  };


  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-4xl font-bold text-blue-700 mb-2"> Welcome !</h2>
        <p className="text-center text-lg text-gray-700 mb-10">Log in to your seller account</p>
        <div className="bg-white py-8 px-4 shadow-lg rounded-lg sm:px-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="userName" className="block text-sm font-medium text-gray-700 mb-2">Username</label>
              <input
                id="userName"
                type="text"
                name="userName"
                onChange={handleChange}
                autoComplete="username"
                placeholder="name...."
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">password</label>
              <input
                id="password"
                type="password"
                name="password"
                onChange={handleChange}
                autoComplete="current-password"
                placeholder="Пароль"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-4 px-4 border border-transparent rounded-md shadow-sm text-lg font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 uppercase tracking-wider"
              >
                Login
              </button>
            </div>
          </form>
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              don't have an account?{" "}
              <Link to="/signupPage" className="font-semibold text-blue-600 hover:text-blue-500 underline">
                Signup
              </Link>
            </p>
          </div>
        </div>
        <div className="mt-10 text-center">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-500 text-sm font-medium">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Return to previous page !
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
