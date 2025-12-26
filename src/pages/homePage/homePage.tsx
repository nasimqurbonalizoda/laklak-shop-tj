import { Link, useNavigate } from "react-router-dom";
import { useGetProductsQuery } from "../../store/reducer/reduxSlice";
import { FaHeart, FaEye, FaFilter } from "react-icons/fa";
import { useState } from "react";
import { useAddToCartMutation } from "../../store/api/cartApi/cartApi";
import { useGetCategoriesQuery } from "../../store/api/categoryApi.ts/categoryApi";


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/navigation';
// @ts-ignore
import 'swiper/css/pagination';
// @ts-ignore
import 'swiper/css/autoplay';

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
  const { data, isLoading, error } = useGetProductsQuery({
    PageNumber: 1,
    PageSize: 16,
  });
  const { data: categories = [] } = useGetCategoriesQuery();

  const [addToCart] = useAddToCartMutation();
  const [showFilter, setShowFilter] = useState(false);

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10">Error</p>;

  const featuredProducts = data?.data?.products?.slice(0, 8) || [];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="mb-8">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            {[
              "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da",
              "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
              "https://images.unsplash.com/photo-1556742044-3c52d6e88c62",
              "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6"
            ].map((img, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-64 md:h-96">
                  <img 
                    src={img} 
                    alt={`Banner ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-black/50 to-transparent flex items-center">
                    <div className="text-white ml-8 md:ml-16">
                      <h2 className="text-2xl md:text-4xl font-bold mb-2">
                        Big Sale {index + 1}
                      </h2>
                      <p className="text-lg md:text-xl mb-4">
                        Discount up to {40 + index * 10}%
                      </p>
                      <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold transition">
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mb-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">Featured Products</h2>
            <div className="flex gap-4">
              <button className="featured-prev-btn w-8 h-8 bg-white rounded-full shadow flex items-center justify-center">
                ‹
              </button>
              <button className="featured-next-btn w-8 h-8 bg-white rounded-full shadow flex items-center justify-center">
                ›
              </button>
            </div>
          </div>
          
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={2}
            navigation={{
              prevEl: '.featured-prev-btn',
              nextEl: '.featured-next-btn',
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="featured-products-swiper"
          >
            {featuredProducts.map((product: Product) => (
              <SwiperSlide key={product.id}>
                <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4">
                  <div className="h-40 bg-gray-50 flex items-center justify-center mb-4">
                    <img
                      src={`https://store-api.softclub.tj/images/${product.image}`}
                      alt={product.productName}
                      className="max-h-full object-contain"
                    />
                  </div>
                  <h3 className="text-sm font-medium line-clamp-2 mb-2">
                    {product.productName}
                  </h3>
                  <div className="flex gap-2 mb-3">
                    <span className="text-red-500 font-bold">
                      ${product.discountPrice}
                    </span>
                    <span className="text-gray-400 line-through text-sm">
                      ${product.price}
                    </span>
                  </div>
                  <button
                    onClick={() => [addToCart(product.id), navigate('checkoutPage')]}
                    className="w-full bg-black hover:bg-gray-800 text-white py-2 rounded text-sm transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex gap-6">
          <aside className="hidden md:block w-64 bg-white rounded-lg shadow p-4">
            {categories.map((category) => (
              <Link 
                key={category.id}
                to={`/categoryPage/${category.id}`}
                className="group block mb-4"
              >
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
          </aside>

          <div className="flex-1">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl md:text-2xl font-semibold">All Products</h1>
              <button 
                onClick={() => setShowFilter(true)}
                className="md:hidden flex items-center gap-2 border px-3 py-2 rounded text-sm"
              >
                <FaFilter /> Filter
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {data?.data?.products?.map((el: Product) => (
                <div
                  key={el.id}
                  className="bg-white rounded-lg shadow hover:shadow-lg transition relative"
                >
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    -40%
                  </div>

                  <div className="absolute top-2 right-2 flex gap-2 z-10">
                    <button className="w-8 h-8 bg-white rounded-full shadow flex items-center justify-center text-gray-600 hover:text-red-500">
                      <FaHeart />
                    </button>
                    <button
                      onClick={() => navigate(`/aboutPage/${el.id}`)}
                      className="w-8 h-8 bg-white rounded-full shadow flex items-center justify-center text-gray-600 hover:text-blue-500"
                    >
                      <FaEye />
                    </button>
                  </div>

                  <Link to={`/aboutPage/${el.id}`}>
                    <div className="h-40 sm:h-48 bg-gray-50 flex items-center justify-center p-4">
                      <img
                        src={`https://store-api.softclub.tj/images/${el.image}`}
                        className="max-h-full object-contain"
                      />
                    </div>
                  </Link>

                  <div className="p-4">
                    <h3 className="text-sm font-medium line-clamp-2">
                      {el.productName}
                    </h3>
                    <div className="flex gap-2 mt-2">
                      <span className="text-red-500 font-bold">
                        ${el.discountPrice}
                      </span>
                      <span className="text-gray-400 line-through text-sm">
                        ${el.price}
                      </span>
                    </div>
                    <button
                      onClick={() => addToCart(el.id)}
                      className="mt-3 w-full bg-black hover:bg-gray-800 text-white py-2 rounded text-sm transition"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showFilter && (
        <div className="fixed inset-0 bg-black/40 z-50 md:hidden">
          <div className="bg-white h-full w-72 p-4">
            <button
              onClick={() => setShowFilter(false)}
              className="mb-4 text-sm"
            >
              Close
            </button>
            <select className="w-full border rounded px-3 py-2 text-sm">
              <optgroup>All Categories</optgroup>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;