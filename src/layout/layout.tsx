import { Link, Outlet, useNavigate } from "react-router-dom";
import { Home, Grid3X3, ShoppingCart, Heart, User } from "lucide-react";
import logo from "../assets/image copy 2.png"
import { useState } from "react";
import { useGetCategoriesQuery } from "../store/api/categoryApi.ts/categoryApi";


const Layout = () => {
  const { data: categories = [] } = useGetCategoriesQuery();

  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-10 text-sm">
            <select className="bg-transparent text-gray-600 focus:outline-none cursor-pointer">
              <option>English</option>
              <option>Русский</option>
              <option>Тоҷикӣ</option>
            </select>
            <div className="flex items-center space-x-6 text-gray-600">
              <Link to="/signupPage" className="hover:text-blue-600 transition-colors">
                Become a Seller
              </Link>
              <span className="text-gray-400">|</span>
              <Link to="/loginPage" className="hover:text-blue-600 transition-colors">
                Seller Login
              </Link>
            </div>
          </div>
        </div>
      </div>

      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">

            <Link to="/" className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 rounded-xl bg-blue-500 blur-xl opacity-70 animate-pulse"></div>
                <div className="relative w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-white-500 to-indigo-600 rounded-xl flex items-center justify-center text-white text-2xl font-extrabold shadow-2xl 
                    animate-fadeInUp 
                    hover:scale-110 hover:shadow-blue-500/50 
                    transition-all duration-500">
                  <img src={logo} alt="Eagle Tech "
                    className="w-10 h-10 rounded-b-full md:w-12 md:h-12 object-contain " />
                </div>
              </div>
              <span className="text-2xl md:text-3xl font-bold text-gray-800 
                  animate-fadeIn delay-200">
                Smartshop.com
              </span>
            </Link>

            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full px-5 py-3 pl-12 pr-12 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all shadow-sm"
                />
                <svg
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
                  Search
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <Link to="/cartPage" className="relative text-gray-700 hover:text-blue-600 transition">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
              </Link>
              <Link to="/wishlistPage" className="text-gray-700 hover:text-blue-600 transition">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </Link>
              <Link to="/notificationss" className="text-gray-700 hover:text-blue-600 transition">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </Link>
              <Link to="/loginPage" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-semibold ">
                  U
                </div>
                <span className="hidden sm:block font-medium">Login / Register</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center px-4 py-2 rounded-md hover:bg-white/10 transition text-white"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span className="font-semibold">All Categories</span>
                <svg
                  className={`w-4 h-4 ml-2 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl overflow-hidden z-50">
                  <div className="max-h-96 overflow-y-auto py-2">

                    {categories.map((category) => (
                      <Link key={category.id}
                        to={`/subCategoryPage/${category.id}`}
                        className="group block">
                        <h3 className="text-base font-semibold text-gray-800 line-clamp-2 group-hover:text-blue-600 transition">
                          {category.categoryName}
                        </h3>
                        {category.subCategories.length > 0 && (
                          <p className="text-xs text-gray-500 mt-2">
                            {category.subCategories.length} items
                          </p>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="hidden md:flex items-center space-x-8 flex-1 justify-center font-medium">
              <Link to="/" className="hover:bg-white/10 px-4 py-2 rounded-md transition">Home</Link>
              <Link to="/flashSalePage" className="hover:bg-white/10 px-4 py-2 rounded-md transition">Flash Sale</Link>
              <Link to="/blogPage" className="hover:bg-white/10 px-4 py-2 rounded-md transition">Blog</Link>
              <Link to="/brandPage" className="hover:bg-white/10 px-4 py-2 rounded-md transition font-bold text-yellow-300">All Brands</Link>
              <Link to="/categoryPage" className="hover:bg-white/10 px-4 py-2 rounded-md transition">All Categories</Link>
            </div>

            <div className="text-sm">
              <span className="font-semibold">0.00 TJS</span> (0 items)
            </div>
          </div>
        </div>
      </nav>

      <div className="bg-gray-50 py-5 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">All Brands</h1>
          <nav className="text-sm text-gray-600 mt-2">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-800 font-medium">All Brands</span>
          </nav>
        </div>
      </div>

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Outlet />
      </main>

      <div className="fixed bottom-0 left-0 right-0 z-50">
        <div className="bg-white/90 backdrop-blur-md rounded-t-3xl shadow-2xl px-4 py-3">
          <div className="flex items-center justify-around">
            <button className="flex flex-col items-center gap-1 text-blue-600">
              <Home className="w-6 h-6" />
              <Link to="/" className="hover:text-blue-600">Home</Link>
            </button>

            <button className="flex flex-col items-center gap-1 text-gray-600">
              <Grid3X3 className="w-6 h-6" />
              <span className="text-xs font-medium"><Link to="/categoryPage" className="hover:bg-white/10 px-4 py-2 rounded-md transition">All Categories</Link>
              </span>
            </button>

            <button className="flex flex-col items-center gap-1 text-gray-600 cursor-pointer">
              <ShoppingCart className="w-6 h-6" onClick={() => navigate("/cartPage")} />
              <span onClick={() => navigate("/cartPage")} className="text-xs font-medium">Корзина</span>
            </button>

            <button className="flex flex-col items-center gap-1 text-gray-600 cursor-pointer">
              <Heart className="w-6 h-6" />
              <span onClick={() => navigate("/wishlistPage")} className="text-xs font-medium">Избранное</span>
            </button>

            <button className="flex flex-col items-center gap-1 text-gray-600 cursor-pointer">
              <User className="w-6 h-6" />
              <span onClick={() => navigate("/loginPage")} className="text-xs font-medium">Профиль</span>
            </button>
          </div>
        </div>
      </div>



      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-white font-bold text-lg mb-5">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li>Address: Dushanbe, Tajikistan</li>
              <li>Phone: +992 900 00 00 00</li>
              <li>Email: info@loklok.tj</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-5">My Account</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/loginPage" className="hover:text-white transition">Login</Link></li>
              <li><Link to="" className="hover:text-white transition">Order History</Link></li>
              <li><Link to="/wishlistPage" className="hover:text-white transition">Wishlist</Link></li>
              <li><Link to="" className="hover:text-white transition">Track Order</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-5">Seller Zone</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Link to="/signupPage" className="hover:text-white transition">Become a Seller</Link>
                <span className="bg-yellow-500 text-black px-2 py-1 rounded text-xs font-bold cursor-pointer">Apply Now</span>
              </li>
              <li><Link to="/signupPage" className="hover:text-white transition">Seller Panel Login</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-5">Delivery Partner</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/loginPage" className="hover:text-white transition">Delivery Panel Login</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-8 text-center text-sm">
          <div className="flex justify-center space-x-6 mb-4">
            <Link to="" className="hover:text-white transition">Privacy Policy</Link>
            <span>|</span>
            <Link to="" className="hover:text-white transition">Terms & Conditions</Link>
            <span>|</span>
            <Link to="" className="hover:text-white transition">Return Policy</Link>
          </div>
          <p>&copy; 2025 LokLok. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;