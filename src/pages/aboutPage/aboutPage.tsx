import { useNavigate, useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../store/reducer/reduxSlice";
import { useState } from "react";
import { useAddToCartMutation } from "../../store/api/cartApi/cartApi";
import toast from "react-hot-toast";
import { FaHeart } from "react-icons/fa";

const AboutPage = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useGetProductByIdQuery(Number(id));
  const [quantity, setQuantity] = useState(1);
  const [addToCart] = useAddToCartMutation();

  const product = data?.data;

  if (isLoading) return <p className="text-center py-24 text-lg">Loading...</p>;
  if (!product) return <p className="text-center py-24 text-lg">Product not found</p>;

  const discountPercent = product.discountPrice
    ? Math.round((1 - product.discountPrice / product.price) * 100)
    : 0;

  const displayPrice = product.discountPrice || product.price;

  const handleAddToCart = () => {
    addToCart(product.id);
    toast.success(`${product.productName} added to cart! 🛒`, {
      duration: 3000,
      icon: "✅", 
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-6">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6 bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="relative">
            <img
              src={`https://store-api.softclub.tj/images/${product.image || product.images?.[0]?.images || ''}`}
              alt={product.productName}
              className="w-full h-full object-contain bg-gradient-to-br from-gray-50 to-gray-100 p-6"
            />
            {discountPercent > 0 && (
              <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-lg z-10">
                -{discountPercent}%
              </div>
            )}
          </div>

          <div className="p-5 md:p-8 flex flex-col gap-5">
            <div>
              <h1 className="text-2xl md:text-3xl font-black text-gray-800 mb-2">
                {product.productName}
              </h1>
            </div>

            <div className="flex items-end gap-3">
              <span className="text-3xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                ${displayPrice}
              </span>
              {product.discountPrice && (
                <span className="text-lg text-gray-400 line-through">
                  ${product.price}
                </span>
              )}
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-700">Qty:</span>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1.5 text-base hover:bg-gray-100 transition"
                >
                  -
                </button>
                <span className="px-5 py-1.5 text-base font-bold border-x border-gray-300">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1.5 text-base hover:bg-gray-100 transition"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-base py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2">
                Add to Cart
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </button>
              <button className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center hover:text-red-500 hover:scale-105 transition-all">
                <FaHeart className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;