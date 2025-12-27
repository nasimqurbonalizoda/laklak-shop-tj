import { Link, useParams } from 'react-router-dom';
import { useGetCategoriesQuery } from '../../../store/api/categoryApi.ts/categoryApi';

const SubCategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const { data: categories = []} = useGetCategoriesQuery();
  const selectedCategory = categories?.find((el) => el.id === Number(categoryId));


  console.log(categoryId,selectedCategory)
  
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {selectedCategory?.categoryName}
          </h1>
          <p className="text-lg text-gray-600">
            {selectedCategory?.subCategories.length} SubCategory
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {selectedCategory?.subCategories.map((elem) => (
            <Link key={elem.id}
              to={`/subCategoryPage/${elem.id}`} 
              className="group block" >
              <div className="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3">
                <h3 className="text-base font-semibold text-gray-800 group-hover:text-blue-600 transition">
                  {elem.subCategoryName}
                </h3>
              </div>
            </Link>
          ))}
        </div>
        {selectedCategory?.subCategories.length === 0 && (
          <p>no nest</p>
        )}
      </div>
    </div>
  );
};

export default SubCategoryPage;