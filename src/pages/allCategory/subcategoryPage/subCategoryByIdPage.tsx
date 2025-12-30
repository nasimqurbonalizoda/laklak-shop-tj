import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaFilter, FaSort, FaShoppingCart, FaHeart, FaEye, FaStar, FaFire, FaTag, FaChevronRight } from "react-icons/fa";
import { useAddToCartMutation } from "../../../store/api/cartApi/cartApi";
import toast from "react-hot-toast";

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

  if (loading) {
    return null
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

                    <button onClick={() => {
                        addToCart(product.id);
                        toast.success(`${product.productName} add to cart succesfully! 🛒`, {
                          duration: 3000,
                          icon: '✅',
                        })
                      }}  className="w-full bg-linear-to-r from-blue-500 to-cyan-500 text-white font-semibold py-3 rounded-xl shadow hover:shadow-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center gap-2">
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
      </div>
    </div>
  );
};

export default SubCategoryByIdPage;