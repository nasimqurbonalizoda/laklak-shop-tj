import { Link } from 'react-router-dom';
import { useGetCategoriesQuery } from '../../../store/api/categoryApi.ts/categoryApi';

const CategoryPage = () => {
  const { data: categories = []} = useGetCategoriesQuery();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          All Categories
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/subCategoryPage/${category.id}`}
              className="group block"
            >
              <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-2xl transition-all duration-600 transform hover:-translate-y-1">
                <div className="w-32 h-32 mb-6 bg-gray-100 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src={`${import.meta.env.VITE_API_URL}/images/${category.categoryImage}`}
                    alt={category.categoryName}
                    className="w-full h-full object-cover"/>
                </div>

                <h3 className="text-base font-semibold text-gray-800 line-clamp-2 group-hover:text-blue-600 transition">
                  {category.categoryName}
                </h3>

                {category.subCategories.length > 0 && (
                  <p className="text-xs text-gray-500 mt-2">
                    {category.subCategories.length} items
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;