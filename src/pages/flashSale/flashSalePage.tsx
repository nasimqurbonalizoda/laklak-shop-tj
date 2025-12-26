import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGetProductsQuery } from "../../store/reducer/reduxSlice";
import { useAddToCartMutation } from "../../store/api/cartApi/cartApi";
import { FaHeart, FaEye, FaFireAlt } from "react-icons/fa";

interface Product {
  id: number;
  productName: string;
  price: number;
  discountPrice: number;
  image: string;
  categoryId: number;
}

const FlashSalePage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const navigate = useNavigate();
  const { data, isLoading, error } = useGetProductsQuery({
    PageNumber: 1,
    PageSize: 16,
  });
  const [addToCart] = useAddToCartMutation();

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

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <div className="p-3 bg-linear-to-r from-purple-500 to-pink-500 rounded-2xl">
              <FaFireAlt className="text-3xl text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Flash Sale
            </h1>
          </div>
          <p className="text-sm text-gray-600">
            Home / <span className="font-medium text-purple-600">Flash Sale</span>
          </p>
        </div>

        <div className="relative h-80 md:h-96 rounded-3xl overflow-hidden bg-linear-to-br from-indigo-600 via-purple-600 to-pink-600 shadow-2xl mb-12">
          <div className="absolute inset-0 bg-black/10"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full px-8 md:px-16">
            <div className="text-center md:text-left">
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-3xl shadow-2xl px-8 py-6 mb-8 border border-white/20">
                <div className="flex gap-4 md:gap-8">
                  {Object.entries(timeLeft).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-2 border-2 border-white/30">
                        <span className="text-2xl md:text-4xl font-bold text-white">
                          {value.toString().padStart(2, "0")}
                        </span>
                      </div>
                      <p className="text-sm md:text-base font-medium text-white/80 uppercase tracking-wider">
                        {key.toUpperCase()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-white drop-shadow-2xl">
                MEGA SALE
              </h2>
              <p className="text-4xl md:text-6xl font-black text-white drop-shadow-2xl mt-2 bg-linear-to-r from-yellow-300 to-pink-300 bg-clip-text ">
                UP TO 80% OFF
              </p>
              
              <button className="mt-8 px-10 py-4 bg-linear-to-r from-yellow-400 to-orange-500 text-white font-bold text-xl rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Flash Sale Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data?.data?.products?.map((el: Product) => (
              <div
                key={el.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative group"
              >
                <div className="absolute top-3 left-3 bg-linear-to-r from-red-500 to-pink-500 text-white text-sm font-bold px-3 py-1.5 rounded-full shadow-lg z-20">
                  {Math.round((1 - el.discountPrice / el.price) * 100)}%
                </div>

                <div className="absolute top-3 right-3 flex flex-col gap-2 z-20">
                  <button
                    className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-red-500 hover:bg-red-50 transition-colors"
                  >
                    <FaHeart />
                  </button>
                  <button
                    onClick={() => navigate(`/aboutPage/${el.id}`)}
                    className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-500 hover:bg-blue-50 transition-colors"
                  >
                    <FaEye />
                  </button>
                </div>

                <Link to={`/aboutPage/${el.id}`}>
                  <div className="h-56 bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6 rounded-t-2xl group-hover:bg-linear-to-br group-hover:from-blue-50 group-hover:to-purple-50 transition-all">
                    <img
                      src={`https://store-api.softclub.tj/images/${el.image}`}
                      className="max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      alt={el.productName}
                    />
                  </div>
                </Link>

                <div className="p-5">
                  <h3 className="text-base font-semibold text-gray-800 line-clamp-2 mb-2">
                    {el.productName}
                  </h3>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl font-bold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      ${el.discountPrice}
                    </span>
                    <span className="text-gray-400 line-through text-sm">
                      ${el.price}
                    </span>
                  </div>

                  <button
                    onClick={() => addToCart(el.id)}
                    className="w-full bg-linear-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 group-hover:scale-[1.02]"
                  >
                    Add to Cart
                  </button>
                </div>

                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-300 transition-all duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button onClick={()=> navigate("/categoryPage")} className="px-12 py-4 bg-linear-to-r from-indigo-500 to-purple-600 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Load More Categories
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlashSalePage;