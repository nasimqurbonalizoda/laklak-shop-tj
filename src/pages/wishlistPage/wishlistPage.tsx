import { Link } from 'react-router-dom';
import { useGetWishlistQuery } from '../../store/api/wishlistApi/wishlist';

interface WishlistProduct {
  id: number;
  productName: string;
  price: number;
  discountPrice?: number;
  image: string;
  categoryId?: number;
}

const WishlistPage = () => {
 const { data = [] } = useGetWishlistQuery();
const products: WishlistProduct[] = data;
console.log("wishlist data:", data);

  if (products.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Your Wishlist is Empty 
        </h2>
        <Link
          to="/"
          className="px-10 py-4 bg-red-500 text-white rounded-xl hover:bg-red-600 transition text-lg font-medium">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg group relative hover:shadow-2xl transition-all duration-300"  >
            <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-1.5 text-sm font-bold rounded-lg z-10">
              -40%
            </div>

            <div className="absolute top-4 right-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity z-10">
              <button className="w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition">
                <span className="text-2xl">❤️</span>
              </button>
              <button className="w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition">
                <span className="text-2xl">👁</span>
              </button>
            </div>

            <div className="h-64 bg-gray-50 flex items-center justify-center p-8 relative overflow-hidden">
              <Link to={`/infopage/${item.id}`}>
                <img
                  src={`https://store-api.softclub.tj/images/${item.image}`}
                  alt={item.productName}
                  className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </Link>

              <div className="absolute inset-x-0 bottom-0 bg-black/90 text-white text-center py-5 opacity-0 group-hover:opacity-100 transition-opacity font-semibold cursor-pointer text-lg">
                Add to Cart
              </div>
            </div>

            <div className="p-6">
              <h3 className="font-medium text-base line-clamp-2 mb-4">
                {item.productName}
              </h3>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-red-500 font-bold text-xl">
                  {item.price} TJS
                </span>
                {item.discountPrice && (
                  <span className="text-gray-400 line-through">
                    {item.discountPrice} TJS
                  </span>
                )}
              </div>
              <div className="flex items-center gap-3">
                <span className="text-yellow-400 text-xl">★★★★★</span>
                <span className="text-gray-500">({item.categoryId || 88})</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-6">
        <div className="flex items-center gap-5">
          <div className="w-6 h-12 bg-red-500 rounded"></div>
          <span className="text-red-500 font-bold text-2xl">Just For You</span>
        </div>
        <button className="px-12 py-4 border-2 border-gray-300 rounded-xl font-medium hover:bg-gray-50 transition">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.slice(0, 3).map((item) => (
          <div
            key={`suggested-${item.id}`}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
          >
            <div className="h-64 bg-gray-50 flex items-center justify-center p-8">
              <img
                src={`https://store-api.softclub.tj/images/${item.image}`}
                alt={item.productName}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="bg-black/90 text-white text-center py-5 cursor-pointer hover:bg-black transition font-semibold text-lg">
              Add to Cart
            </div>
            <div className="p-6">
              <h3 className="font-medium text-base mb-4">{item.productName}</h3>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-red-500 font-bold text-xl">{item.price} TJS</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-yellow-400 text-xl">★★★★★</span>
                <span className="text-gray-500">(88)</span>
              </div>
            </div>
          </div>
        ))}

        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
          <div className="h-64 bg-gray-100 flex items-center justify-center p-10">
            <img
              src="/path/to/your/keyboard-image.png" 
              alt="Keyboard"
              className="max-h-full object-contain"
            />
          </div>
          <div className="bg-black/90 text-white text-center py-5 cursor-pointer hover:bg-black transition font-semibold text-lg">
            Add to Cart
          </div>
          <div className="p-6">
            <h3 className="font-medium text-base mb-4">AK-900 Wired Keyboard</h3>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-red-500 font-bold text-xl">200 TJS</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-yellow-400 text-xl">★★★★★</span>
              <span className="text-gray-500">(65)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;