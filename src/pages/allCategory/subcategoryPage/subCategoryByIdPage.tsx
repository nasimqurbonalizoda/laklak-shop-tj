import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaFilter, FaSort, FaShoppingCart, FaHeart, FaEye, FaStar, FaFire, FaTag, FaChevronRight } from "react-icons/fa";
import { useAddToCartMutation } from "../../../store/api/cartApi/cartApi";

interface Product {
  id: number;
  productName: string;
  price: number;
  discountPrice: number;
  image: string;
  categoryId: number;
  description?: string;
  rating?: number;
  stock?: number;
}

const SubCategoryByIdPage = () => {
  const [addToCart] = useAddToCartMutation();
  const { id } = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedSort, setSelectedSort] = useState("featured");
  const [categoryName, setCategoryName] = useState("Electronics");
const navigate=useNavigate()
  const getProduct = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://store-api.softclub.tj/Product/get-products?SubcategoryId=${id}`);
      const text = await res.text();
      if (!text) {
        setProducts([]);
        return;
      }
      const data = JSON.parse(text);
      setProducts(data.data?.products || data || []);
      
      const categoryNames: { [key: string]: string } = {
        "1": "Smartphones",
        "2": "Laptops",
        "3": "Headphones",
        "4": "Cameras",
        "5": "Watches",
        "6": "Home Appliances",
      };
      setCategoryName(categoryNames[id || "1"] || "Products");
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) getProduct();
  }, [id]);

  const sortOptions = [
    { value: "featured", label: "Featured" },
    { value: "newest", label: "Newest" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "rating", label: "Highest Rated" },
  ];

  const filters = ["All", "On Sale", "In Stock", "Best Sellers", "New Arrivals"];

  if (loading) {
    return (
      <div className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="mb-8">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-1/3 animate-pulse"></div>
          </div>
          
          <div className="flex flex-wrap gap-4 mb-8">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-10 bg-gray-200 rounded-full w-24 animate-pulse"></div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl shadow p-6">
                <div className="h-48 bg-gray-200 rounded-lg mb-4 animate-pulse"></div>
                <div className="h-6 bg-gray-200 rounded mb-2 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                <div className="h-10 bg-gray-200 rounded mt-4 animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
            <FaChevronRight className="text-gray-400 text-xs" />
            <a href="/categoryPage" className="hover:text-blue-600 transition-colors">Categories</a>
            <FaChevronRight className="text-gray-400 text-xs" />
            <span className="text-blue-600 font-medium">{categoryName}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                {categoryName}
                <span className="text-blue-600 ml-3">Collection</span>
              </h1>
              <p className="text-gray-600 text-lg">
                Discover amazing {categoryName.toLowerCase()} at unbeatable prices
              </p>
            </div>
            <div className="mt-4 md:mt-0 bg-linear-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3">
                <FaTag className="text-xl" />
                <div>
                  <p className="font-bold text-lg">Special Discount</p>
                  <p className="text-sm opacity-90">Up to 50% OFF</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-blue-600">{products.length}</div>
              <p className="text-gray-600">Total Products</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-green-600">
                {products.filter(p => p.discountPrice < p.price).length}
              </div>
              <p className="text-gray-600">On Sale</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-purple-600">
                {products.filter(p => (p.rating || 0) >= 4).length}
              </div>
              <p className="text-gray-600">Top Rated</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-orange-600">
                ${Math.min(...products.map(p => p.discountPrice)).toFixed(2) || 0}
              </div>
              <p className="text-gray-600">Starting From</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">

          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`px-5 py-2.5 rounded-full font-medium transition-all ${
                  filter === "All" 
                    ? "bg-linear-to-r from-blue-500 to-cyan-500 text-white shadow-lg" 
                    : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200"
                }`}
              >
                {filter}
              </button>
            ))}
            <button className="px-5 py-2.5 rounded-full bg-white text-gray-700 border border-gray-200 hover:bg-blue-50 hover:text-blue-600 flex items-center gap-2">
              <FaFilter /> More Filters
            </button>
          </div>

          <div className="relative">
            <select
              value={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value)}
              className="appearance-none bg-white border border-gray-200 rounded-xl py-3 pl-4 pr-10 text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 shadow-sm"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <FaSort />
            </div>
          </div>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-32 h-32 mx-auto mb-6 bg-linear-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
              <FaShoppingCart className="text-6xl text-gray-300" />
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-3">No Products Found</h3>
            <p className="text-gray-500 max-w-md mx-auto mb-8">
              We couldn't find any products in this category. Please check back later or explore other categories.
            </p>
            <button
              onClick={() => window.history.back()}
              className="px-8 py-3 bg-linear-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all"
            >
              Go Back
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative group overflow-hidden"
                >
                  {product.discountPrice < product.price && (
                    <div className="absolute top-4 left-4 bg-linear-to-r from-red-500 to-pink-500 text-white text-sm font-bold px-3 py-1.5 rounded-full shadow-lg z-20 flex items-center gap-1">
                      <FaTag className="text-xs" /> {Math.round((1 - product.discountPrice / product.price) * 100)}% OFF
                    </div>
                  )}

                  {(product.rating || 0) >= 4.5 && (
                    <div className="absolute top-4 right-4 bg-linear-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg z-20 flex items-center gap-1">
                      <FaFire className="text-xs" /> HOT
                    </div>
                  )}

                  <div className="absolute top-4 right-4 flex flex-col gap-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-red-500 hover:bg-red-50 transition-all">
                      <FaHeart />
                    </button>
                    <button className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-500 hover:bg-blue-50 transition-all">
                      <FaEye />
                    </button>
                  </div>

                  <div className="h-56 bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6 group-hover:bg-linear-to-br group-hover:from-blue-50 group-hover:to-cyan-50 transition-all">
                    <img
                      src={`https://store-api.softclub.tj/images/${product.image}`}
                      className="max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
                      alt={product.productName}
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 mb-2 group-hover:text-blue-600 transition-colors">
                      {product.productName}
                    </h3>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={`text-sm ${
                              i < Math.floor(product.rating || 0) ? "fill-current" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">({product.rating || "No ratings"})</span>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-2xl font-bold text-gray-900">
                          ${product.discountPrice}
                        </span>
                        {product.discountPrice < product.price && (
                          <span className="text-gray-400 line-through text-sm ml-2">
                            ${product.price}
                          </span>
                        )}
                      </div>
                      {product.discountPrice < product.price && (
                        <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">
                          Save ${(product.price - product.discountPrice).toFixed(2)}
                        </span>
                      )}
                    </div>

                    <button onClick={()=> addToCart(product.id)}  className="w-full bg-linear-to-r from-blue-500 to-cyan-500 text-white font-semibold py-3 rounded-xl shadow hover:shadow-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center gap-2">
                      <FaShoppingCart /> Add to Cart
                    </button>
                  </div>

                  <div className="px-6 pb-6 pt-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className={`font-medium ${
                        (product.stock || 0) > 10 ? "text-green-600" : 
                        (product.stock || 0) > 0 ? "text-orange-600" : "text-red-600"
                      }`}>
                        {(product.stock || 0) > 10 ? "In Stock" : 
                         (product.stock || 0) > 0 ? `Only ${product.stock} left` : "Out of Stock"}
                      </span>
                      <span className="text-gray-500">Free Shipping</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <button onClick={()=> navigate("/categoryPage")} className="px-12 py-4 bg-linear-to-r from-blue-500 to-purple-600 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Load More Products
              </button>
              <p className="text-gray-500 mt-4">
                Showing {products.length} of {products.length} products
              </p>
            </div>
          </>
        )}

        <div className="mt-16 bg-linear-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About {categoryName}</h2>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Explore our extensive collection of {categoryName.toLowerCase()} featuring the latest models, 
              cutting-edge technology, and unbeatable prices. Whether you're looking for premium quality 
              or budget-friendly options, we have something for everyone.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white px-6 py-3 rounded-full shadow-sm">
                <span className="font-medium text-gray-700">🛡️ 2-Year Warranty</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-sm">
                <span className="font-medium text-gray-700">🚚 Free Shipping</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-sm">
                <span className="font-medium text-gray-700">↩️ 30-Day Returns</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-sm">
                <span className="font-medium text-gray-700">⭐ 4.8/5 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubCategoryByIdPage;