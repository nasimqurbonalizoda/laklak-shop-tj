import { Link, useNavigate } from "react-router-dom";
import { useGetProductsQuery } from "../../store/reducer/reduxSlice";
import { FaHeart, FaEye, FaFilter } from "react-icons/fa";
import { useState } from "react";
import { useAddToCartMutation } from "../../store/api/cartApi/cartApi";
import { useGetCategoriesQuery } from "../../store/api/categoryApi.ts/categoryApi";

interface Product {
  id: number;
  productName: string;
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
  const [likedIds, setLikedIds] = useState<number[]>([]);
  const [showFilter, setShowFilter] = useState(false);

  const toggleLike = (id: number) => {
    setLikedIds((p) => (p.includes(id) ? p.filter((i) => i !== id) : [...p, id]));
  };

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10">Error</p>;

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          <aside className="hidden md:block w-64 bg-white rounded-lg shadow p-4">
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
          </aside>

          <div className="flex-1">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl md:text-2xl font-semibold">Все товары</h1>
              <button onClick={() => setShowFilter(true)}
                className="md:hidden flex items-center gap-2 border px-3 py-2 rounded text-sm">
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
                    <button
                      onClick={() => toggleLike(el.id)}
                      className={`w-8 h-8 bg-white rounded-full shadow flex items-center justify-center ${likedIds.includes(el.id)
                          ? "text-red-500"
                          : "text-gray-600"
                        }`}
                    >
                      <FaHeart />
                    </button>
                    <button
                      onClick={() => navigate(`/aboutPage/${el.id}`)}
                      className="w-8 h-8 bg-white rounded-full shadow flex items-center justify-center text-gray-600"
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
                      className="mt-3 w-full bg-black text-white py-2 rounded text-sm"
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
              <optgroup>Все категории</optgroup>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
