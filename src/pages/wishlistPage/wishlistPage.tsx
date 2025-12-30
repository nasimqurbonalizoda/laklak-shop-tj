import { Link, useNavigate } from "react-router-dom";
import { useAddToCartMutation } from "../../store/api/cartApi/cartApi";
import { FaHeart, FaEye } from "react-icons/fa";
import toast from "react-hot-toast";
import { useGetWishlistQuery } from "../../store/api/wishlistApi/wishlist"; 

interface WishlistProduct {
  id: number;
  productName: string;
  price: number;
  discountPrice?: number;
  image: string;
  categoryId?: number;
}

const WishlistPage = () => {
  const navigate = useNavigate();
  const { data: wishlistData, isLoading } = useGetWishlistQuery();
  const [addToCart] = useAddToCartMutation();

  const products: WishlistProduct[] = wishlistData || [];

  if (isLoading) {
    return (
      <div className="text-center mt-32">
        <p className="text-3xl font-bold text-gray-600">Loading...</p>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center">
        <img
          src="../../../public/images (1).jpeg" 
          alt="Empty wishlist"
          className="mx-auto w-80 h-80 object-contain mb-10"
        />
        <h2 className="text-4xl font-black text-gray-800 mb-8">
          Your Wishlist is Empty 
        </h2>
        <Link
          to="/"
          className="inline-block px-12 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-xl rounded-3xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
        >
          Continue Shopping →
        </Link>
      </div>
    );
  }

  const handleAddToCart = (productId: number, productName: string) => {
    addToCart(productId);
    toast.success(`${productName} successfully added to cart! 🛒`, {
      duration: 3000,
      icon: "✅",
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-12 text-center">
          My Wishlist ❤️
        </h1>

        {/* Список товаров в wishlist */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-20">
          {products.map((item) => {
            const discountPercent = item.discountPrice
              ? Math.round((1 - item.discountPrice / item.price) * 100)
              : 0;

            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 relative group overflow-hidden"
              >
                {discountPercent > 0 && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg z-30">
                    -{discountPercent}%
                  </div>
                )}

                <div className="absolute top-4 right-4 flex flex-col gap-3 z-30">
                  <button className="w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center hover:text-red-500 hover:scale-110 transition-all">
                    <FaHeart className="text-lg" />
                  </button>
                  <button
                    onClick={() => navigate(`/aboutPage/${item.id}`)}
                    className="w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center hover:text-blue-600 hover:scale-110 transition-all"
                  >
                    <FaEye className="text-lg" />
                  </button>
                </div>

                <Link to={`/aboutPage/${item.id}`}>
                  <div className="h-64 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8 rounded-t-3xl group-hover:from-blue-50 group-hover:to-cyan-50 transition-all duration-500">
                    <img
                      src={`https://store-api.softclub.tj/images/${item.image}`}
                      alt={item.productName || "Product"}
                      className="max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </Link>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 line-clamp-2 mb-3">
                    {item.productName || "Unnamed Product"}
                  </h3>
                  <div className="flex items-center gap-4 mb-5">
                    <span className="text-3xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      ${item.discountPrice ?? item.price}
                    </span>
                    {item.discountPrice && (
                      <span className="text-gray-400 line-through text-lg">
                        ${item.price}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => handleAddToCart(item.id, item.productName || "Product")}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-4 rounded-2xl shadow-xl hover:shadow-2xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                  >
                    Add to Cart
                  </button>
                </div>

                <div className="absolute inset-0 rounded-3xl border-4 border-transparent group-hover:border-blue-400 transition-all duration-500 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Just For You */}
        <div className="flex items-center gap-5 mb-8">
          <div className="w-6 h-12 bg-red-500 rounded"></div>
          <span className="text-red-500 font-bold text-3xl">Just For You</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.slice(0, 4).map((item) => (
            <div
              key={`suggested-${item.id}`}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 relative group overflow-hidden"
            >
              <Link to={`/aboutPage/${item.id}`}>
                <div className="h-64 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8 rounded-t-3xl group-hover:from-blue-50 group-hover:to-cyan-50 transition-all duration-500">
                  <img
                    src={`https://store-api.softclub.tj/images/${item.image}`}
                    alt={item.productName || "Product"}
                    className="max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </Link>

              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 line-clamp-2 mb-3">
                  {item.productName || "Unnamed Product"}
                </h3>
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-3xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    ${item.discountPrice ?? item.price}
                  </span>
                </div>
                <button
                  onClick={() => handleAddToCart(item.id, item.productName || "Product")}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-4 rounded-2xl shadow-xl hover:shadow-2xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Add to Cart
                </button>
              </div>

              <div className="absolute inset-0 rounded-3xl border-4 border-transparent group-hover:border-blue-400 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;