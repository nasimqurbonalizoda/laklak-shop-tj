import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../../store/api/authApi/auth";
import { useState } from "react";

const LoginPage = () => {
  const navigate = useNavigate();
    const [login] = useLoginMutation();
  
    const [form, setForm] = useState({
      userName: "",
      password: "",
    });
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        const res = await login({
          userName: form.userName,
          password: form.password,
        }).unwrap();
        console.log( res);
        localStorage.setItem("token", res.data); 
          navigate("/");
      } catch (error) {
        console.error( error);
      }
    };
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-4xl font-bold text-blue-700 mb-2">
          ДОБРО ПОЖАЛОВАТЬ !
        </h2>
        <p className="text-center text-lg text-gray-700 mb-10">
          Войдите в свою учетную запись продавца
        </p>

        <div className="bg-white py-8 px-4 shadow-lg rounded-lg sm:px-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <input
                id="email"
                type="text"
                name="userName"
                onChange={handleChange}
                autoComplete="email"
                placeholder="name...."
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Пароль
              </label>
              <div className="relative">
                <input
                  id="password"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  autoComplete="current-password"
                  placeholder="Пароль"
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                  Запомнить
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-blue-600 hover:text-blue-500 underline">
                  Забыли пароль?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-4 px-4 border border-transparent rounded-md shadow-sm text-lg font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 uppercase tracking-wider"
              >
                Вход
              </button>
            </div>
          </form>
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Нет аккаунта?{" "}
              <Link to="/signup" className="font-semibold text-blue-600 hover:text-blue-500 underline">
                Регистрация
              </Link>
            </p>
          </div>
        </div>
        <div className="mt-10 text-center">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-500 text-sm font-medium">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Назад к предыдущей странице
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;