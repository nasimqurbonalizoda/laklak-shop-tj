import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useGetProductsQuery } from '../../store/reducer/reduxSlice';
import { useAddToCartMutation } from '../../store/api/cartApi/cartApi';
import { FaHeart, FaEye } from 'react-icons/fa';
import { useGetCategoriesQuery } from '../../store/api/categoryApi.ts/categoryApi';

interface Product {
  id: number;
  productName: string;
  price: number;
  discountPrice: number;
  image: string;
  categoryId: number;
}

const BlogPage = () => {
  const navigate = useNavigate();
  const { data: categories = [] } = useGetCategoriesQuery();
  const { data: productsResponse } = useGetProductsQuery({
    PageNumber: 1,
    PageSize: 16,
  });

  const products: Product[] = productsResponse?.data?.products || [];

  const [addToCart] = useAddToCartMutation();
  const [likedIds, setLikedIds] = useState<number[]>([]);

  const toggleLike = (id: number) => {
    setLikedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleAddToCart = async (productId: number) => {
    try {
      await addToCart(productId).unwrap();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <p className="text-sm text-gray-600 mb-4">
            Home / <span className="font-semibold text-gray-900">Blogs</span>
          </p>
          <h1 className="text-5xl font-bold text-gray-900 text-center mb-4">
            Our Blogs
          </h1>
          <p className="text-center text-gray-600 text-lg">
            Best Blogs at great prices
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-6 pr-16 py-5 bg-white rounded-2xl shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 text-gray-800 text-lg"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 p-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-xl p-8 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Categories</h2>
              <div className="space-y-4">
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    to={`/subCategoryPage/${category.id}`}
                    className="block group"
                  >
                    <div className="flex items-center justify-between p-4 rounded-xl hover:bg-blue-50 transition">
                      <div>
                        <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition">
                          {category.categoryName}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {category.subCategories.length} subcategories
                        </p>
                      </div>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group relative"
                >
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 text-sm font-bold rounded-full z-10">
                    -40%
                  </div>

                  <div className="absolute top-4 right-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <button
                      onClick={() => toggleLike(product.id)}
                      className={`w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition ${
                        likedIds.includes(product.id) ? 'text-red-500' : 'text-gray-600'
                      }`}
                    >
                      <FaHeart className="text-xl" />
                    </button>
                    <button
                      onClick={() => navigate(`/aboutPage/${product.id}`)}
                      className="w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition text-gray-600"
                    >
                      <FaEye className="text-xl" />
                    </button>
                  </div>

                  <div className="h-64 bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-6">
                    <Link to={`/aboutPage/${product.id}`}>
                      <img
                        src={`https://store-api.softclub.tj/images/${product.image}`}
                        alt={product.productName}
                        className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500"
                      />
                    </Link>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 mb-4 group-hover:text-blue-600 transition">
                      {product.productName}
                    </h3>

                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-2xl font-bold text-red-500">
                        {product.discountPrice} TJS
                      </span>
                      <span className="text-lg text-gray-400 line-through">
                        {product.price} TJS
                      </span>
                    </div>

                    <div className="flex items-center gap-3 mb-6">
                      <div className="flex text-yellow-400 text-lg">
                        ★★★★★
                      </div>
                      <span className="text-sm text-gray-500">({product.categoryId} reviews)</span>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(product.id);
                      }}
                      className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition shadow-lg hover:shadow-xl">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;