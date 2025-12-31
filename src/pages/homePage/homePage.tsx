import { Link, useNavigate } from "react-router-dom";
import { useGetProductsQuery } from "../../store/reducer/reduxSlice";
import { FaHeart, FaEye, FaFireAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useAddToCartMutation } from "../../store/api/cartApi/cartApi";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import toast from "react-hot-toast";

interface Product {
  id: number;
  productName: string;
  productDescription: string;
  price: number;
  discountPrice: number;
  image: string;
  categoryId: number;
}

const HomePage = () => {
  const navigate = useNavigate();
const [liked, setLiked] = useState<{ [key: number]: boolean }>({});
  const { data, isLoading, error } = useGetProductsQuery({
    PageNumber: 1,
    PageSize: 16,
  });
  const [addToCart] = useAddToCartMutation();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const end = new Date("2025-12-31T23:59:59");
      const diff = end.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10">Error</p>;

  const products = data?.data?.products || [];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="mb-12">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            {[
              "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da",
              "https://images.unsplash.com/photo-1556742044-3c52d6e88c62",
              "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6"
            ].map((img, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-64 md:h-96">
                  <img src={img} alt={`Banner ${index + 1}`} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-linear-to-r from-black/60 to-transparent flex items-center">
                    <div className="text-white ml-8 md:ml-16">
                      <h2 className="text-3xl md:text-5xl font-bold mb-3">Big Sale {index + 1}</h2>
                      <p className="text-xl md:text-3xl mb-6">Discount up to {40 + index * 10}%</p>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold text-lg transition">
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mb-16">
          <div className="mb-16">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10">
              <div className="flex items-center gap-4 mb-6 md:mb-0">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl shadow-lg">
                  <FaFireAlt className="text-3xl text-white" />
                </div>
                <h1 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Flash Sale
                </h1>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg px-6 py-4 border border-white/20">
                <div className="flex gap-3 md:gap-5 items-center">
                  {Object.entries(timeLeft).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center shadow-md">
                        <span className="text-xl md:text-2xl font-bold text-white">
                          {value.toString().padStart(2, "0")}
                        </span>
                      </div>
                      <p className="text-xs md:text-sm font-medium text-gray-600 mt-1 uppercase">
                        {key === 'days' ? 'day' : key === 'hours' ? 'hour' : key === 'minutes' ? 'minute' : 'sekund'}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((el: Product) => {
              const discountPercent = Math.round((1 - el.discountPrice / el.price) * 100);
              return (
                <div
                  key={el.id}
                  className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 relative group overflow-hidden"
                >
                  <div className="absolute top-4 left-4 bg-linear-to-r from-red-500 to-orange-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg z-30">
                    {discountPercent}%
                  </div>

                  <div className="absolute top-4 right-4 flex flex-col gap-3 z-30">
                    <button
                      onClick={() =>
                        setLiked(prev => ({
                          ...prev,
                          [el.id]: !prev[el.id],
                        }))
                      }
                      className={`w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center
    transition-all hover:scale-110
    ${liked[el.id] ? "text-red-700" : "text-gray-600"}`}
                    >
                      <FaHeart />
                    </button>

                    <button
                      onClick={() => navigate(`/aboutPage/${el.id}`)}
                      className="w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center hover:text-blue-600 hover:scale-110 transition-all"
                    >
                      <FaEye />
                    </button>
                  </div>

                  <Link to={`/aboutPage/${el.id}`}>
                    <div className="h-64 bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8 rounded-t-3xl group-hover:from-blue-50 group-hover:to-cyan-50 transition-all duration-500">
                      <img
                        src={`https://store-api.softclub.tj/images/${el.image}`}
                        alt={el.productName}
                        className="max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </Link>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 line-clamp-2 mb-3">
                      {el.productName}
                    </h3>
                    <div className="flex items-center gap-4 mb-5">
                      <span className="text-3xl font-black bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                        ${el.discountPrice}
                      </span>
                      <span className="text-gray-400 line-through text-lg">
                        ${el.price}
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        addToCart(el.id);
                        toast.success(`${el.productName} add to cart succesfully! 🛒`, {
                          duration: 3000,
                          icon: '✅',
                        })
                      }}
                      className="w-full bg-linear-to-r from-blue-600 to-cyan-600 text-white font-bold py-4 rounded-2xl shadow-xl hover:shadow-2xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                    >
                      Add to Cart
                    </button>
                  </div>

                  <div className="absolute inset-0 rounded-3xl border-4 border-transparent group-hover:border-blue-400 transition-all duration-500 pointer-events-none"></div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => navigate("/categoryPage")}
              className="px-12 py-5 bg-linear-to-r from-blue-600 to-indigo-600 text-white font-bold text-xl rounded-3xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
            >
              View All Categories →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;