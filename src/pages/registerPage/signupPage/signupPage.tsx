import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useRegisterMutation } from "../../../store/api/authApi/auth";
import toast from "react-hot-toast";

const SignupPage = () => {
  const navigate = useNavigate();
  const [register, { isLoading}] = useRegisterMutation();
  const [form, setForm] = useState({
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) return;
    try {
      const res = await register(form).unwrap();
      if (res.data?.token) {
        localStorage.setItem("token", res.data.token);
      }
      navigate("/loginPage")
      toast.success(`register succesfully`, {
        duration: 3000,
        icon: '✅',
      })
    } catch (error) {
      console.error(error);
      alert("error register")
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded-lg shadow">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">РЕГИСТРАЦИЯ</h1>
        <input type="text" name="userName" placeholder="Ваше имя" value={form.userName} onChange={handleChange} required className="w-full mb-4 px-4 py-3 border rounded-md"/>
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required className="w-full mb-4 px-4 py-3 border rounded-md"/>
        <div className="flex mb-4">
          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 bg-gray-50 text-gray-700">🇹🇯 +992</span>
          <input type="tel" name="phoneNumber" placeholder="Номер телефона" value={form.phoneNumber} onChange={handleChange} required className="flex-1 px-4 py-3 border rounded-r-md"/>
        </div>
        <input type="password" name="password" placeholder="Пароль" value={form.password} onChange={handleChange} required className="w-full mb-4 px-4 py-3 border rounded-md"/>
        <input type="password" name="confirmPassword" placeholder="Подтвердите пароль" value={form.confirmPassword} onChange={handleChange} required className="w-full mb-4 px-4 py-3 border rounded-md"/>
        <button type="submit" disabled={isLoading} className="w-full bg-blue-600 text-white py-3 rounded-md">
          Submit
        </button>
        <p className="text-center mt-4 text-sm">Уже есть аккаунт? <Link to="/loginPage" className="text-blue-600">Войти</Link></p>
      </form>
    </div>
  );
};

export default SignupPage;
