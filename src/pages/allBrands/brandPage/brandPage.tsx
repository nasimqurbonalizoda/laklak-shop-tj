import { Link } from 'react-router-dom';
import { useGetBrandsQuery } from '../../../store/api/brandApi/brandApi';

const BrandsPage= () => {
  const { data: brands = [] } = useGetBrandsQuery();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          All Brands
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
          {brands.map((elem) => (
            <Link key={elem.id}
              to={`/products?brandId=${elem.id}`}
              className="group block" >
              <div className="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3">
                <h3 className="text-base font-semibold text-gray-800 group-hover:text-blue-600 transition">
                  {elem.brandName}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandsPage;