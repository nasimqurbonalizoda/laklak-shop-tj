const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div className="w-full md:w-auto">
            <div className="relative max-w-md">
              <input
                type="text"
                placeholder="Поиск"
                className="w-full pl-5 pr-14 py-4 bg-white border border-gray-200 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          <h1 className="text-4xl font-bold text-gray-900">Блоги</h1>

          <p className="text-gray-500 text-sm">
            Главная / <span className="text-gray-800 font-semibold">Блоги</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <aside className="lg:col-span-1 space-y-8">
            <div className="bg-white rounded-2xl shadow-md p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Категории</h2>
              <div className="space-y-4">
                <div className="h-10 bg-gray-200 rounded-lg"></div>
                <div className="h-10 bg-gray-200 rounded-lg"></div>
                <div className="h-10 bg-gray-200 rounded-lg"></div>
                <div className="h-10 bg-gray-200 rounded-lg"></div>
                <div className="h-10 bg-gray-200 rounded-lg"></div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Последние посты</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0"></div>
                  <div>
                    <div className="h-4 bg-gray-200 rounded w-40 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-32"></div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0"></div>
                  <div>
                    <div className="h-4 bg-gray-200 rounded w-36 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-28"></div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0"></div>
                  <div>
                    <div className="h-4 bg-gray-200 rounded w-44 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-36"></div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <main className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="h-64 bg-gray-200"></div>
                <div className="p-8">
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-11/12"></div>
                    <div className="h-4 bg-gray-200 rounded w-9/12"></div>
                  </div>
                  <div className="mt-6 flex items-center text-sm text-gray-500">
                    <span>23 декабря 2025</span>
                    <span className="mx-3">•</span>
                    <span>5 мин чтения</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="h-64 bg-gray-200"></div>
                <div className="p-8">
                  <div className="h-6 bg-gray-200 rounded w-4/5 mb-4"></div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-10/12"></div>
                    <div className="h-4 bg-gray-200 rounded w-8/12"></div>
                  </div>
                  <div className="mt-6 flex items-center text-sm text-gray-500">
                    <span>22 декабря 2025</span>
                    <span className="mx-3">•</span>
                    <span>7 мин чтения</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="h-64 bg-gray-200"></div>
                <div className="p-8">
                  <div className="h-6 bg-gray-200 rounded w-2/3 mb-4"></div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-10/12"></div>
                  </div>
                  <div className="mt-6 flex items-center text-sm text-gray-500">
                    <span>20 декабря 2025</span>
                    <span className="mx-3">•</span>
                    <span>4 мин чтения</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="h-64 bg-gray-200"></div>
                <div className="p-8">
                  <div className="h-6 bg-gray-200 rounded w-3/5 mb-4"></div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-9/12"></div>
                    <div className="h-4 bg-gray-200 rounded w-11/12"></div>
                  </div>
                  <div className="mt-6 flex items-center text-sm text-gray-500">
                    <span>19 декабря 2025</span>
                    <span className="mx-3">•</span>
                    <span>6 мин чтения</span>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;