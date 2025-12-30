import { Link } from 'react-router-dom';
import { useGetBrandsQuery } from '../../../store/api/brandApi/brandApi';

const BrandPage = () => {
  const { data: brands = [], isLoading } = useGetBrandsQuery();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-2xl text-gray-600">is Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black text-center mb-12 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          All Brands
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
          {brands.map((brand) => (
            <Link
              key={brand.id}
              to={`/`} 
              className="group block"
            >
              <div className="bg-white rounded-3xl p-10 flex flex-col items-center justify-center text-center shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-transparent hover:border-blue-400">
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {brand.brandName}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {brands.length === 0 && !isLoading && (
          <p className="text-center text-xl text-gray-500 mt-20">
            don't have any brand
          </p>
        )}
      </div>
    </div>
  );
};

export default BrandPage;