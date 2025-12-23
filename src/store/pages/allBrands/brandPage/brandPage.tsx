const BrandPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Все бренды</h1>
          <p className="text-sm text-gray-600">
            Главная / <span className="text-gray-900 font-medium">Все бренды</span>
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8 p-12">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gray-200 border-2 border-dashed rounded-lg flex items-center justify-center mb-4">
                <span className="text-gray-400 text-4xl">🖼️</span>
              </div>
              <p className="text-center text-gray-800 font-medium">Samsung</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gray-200 border-2 border-dashed rounded-lg flex items-center justify-center mb-4">
                <span className="text-gray-400 text-4xl">🖼️</span>
              </div>
              <p className="text-center text-gray-800 font-medium">LG</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gray-200 border-2 border-dashed rounded-lg flex items-center justify-center mb-4">
                <span className="text-gray-400 text-4xl">🖼️</span>
              </div>
              <p className="text-center text-gray-800 font-medium">Panasonic</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gray-200 border-2 border-dashed rounded-lg flex items-center justify-center mb-4">
                <span className="text-gray-400 text-4xl">🖼️</span>
              </div>
              <p className="text-center text-gray-800 font-medium">Arzum</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gray-200 border-2 border-dashed rounded-lg flex items-center justify-center mb-4">
                <span className="text-gray-400 text-4xl">🖼️</span>
              </div>
              <p className="text-center text-gray-800 font-medium">Fakir</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gray-200 border-2 border-dashed rounded-lg flex items-center justify-center mb-4">
                <span className="text-gray-400 text-4xl">🖼️</span>
              </div>
              <p className="text-center text-gray-800 font-medium">Noorway</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gray-200 border-2 border-dashed rounded-lg flex items-center justify-center mb-4">
                <span className="text-gray-400 text-4xl">🖼️</span>
              </div>
              <p className="text-center text-gray-800 font-medium">Tosot</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gray-200 border-2 border-dashed rounded-lg flex items-center justify-center mb-4">
                <span className="text-gray-400 text-4xl">🖼️</span>
              </div>
              <p className="text-center text-gray-800 font-medium">Gree</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gray-200 border-2 border-dashed rounded-lg flex items-center justify-center mb-4">
                <span className="text-gray-400 text-4xl">🖼️</span>
              </div>
              <p className="text-center text-gray-800 font-medium">Eyup Sabri Tuncer</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gray-200 border-2 border-dashed rounded-lg flex items-center justify-center mb-4">
                <span className="text-gray-400 text-4xl">🖼️</span>
              </div>
              <p className="text-center text-gray-800 font-medium">Royal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandPage;