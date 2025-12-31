import { useState } from "react";
import { Link } from "react-router-dom";
import { useGetCategoriesQuery } from "../../../store/api/categoryApi.ts/categoryApi";
import { ChevronRight, Grid3X3, FolderOpen } from "lucide-react";

const CategoryPage = () => {
  const { data: categories = [] } = useGetCategoriesQuery();
  const [activeCategoryId, setActiveCategoryId] = useState<number | null>(null);

  const selectedCategory = categories.find(
    (el) => el.id === activeCategoryId
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 px-4 py-8 md:py-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 md:mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Browse Categories
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of products through categories and subcategories
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-80">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50">
                <div className="flex items-center gap-3">
                  <Grid3X3 className="w-6 h-6 text-blue-600" />
                  <h2 className="text-xl font-bold text-gray-900">
                    All Categories
                  </h2>
                  <span className="ml-auto px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    {categories.length}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                   click to explore subcategories
                </p>
              </div>

              <div className="p-2 max-h-[500px] overflow-y-auto">
                <ul className="space-y-1">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button
                        onClick={() => setActiveCategoryId(category.id)}
                        className={`w-full text-left px-4 py-4 rounded-xl flex items-center justify-between transition-all duration-300
                          ${activeCategoryId === category.id 
                            ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg transform scale-[1.02]" 
                            : "hover:bg-gray-50 hover:pl-5"}`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center
                            ${activeCategoryId === category.id 
                              ? "bg-white/20" 
                              : "bg-blue-50 text-blue-600"}`}>
                            <FolderOpen className="w-5 h-5" />
                          </div>
                          <span className="font-medium">{category.categoryName}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-1 text-xs rounded-full
                            ${activeCategoryId === category.id 
                              ? "bg-white/30" 
                              : "bg-gray-100 text-gray-700"}`}>
                            {category.subCategories.length}
                          </span>
                          <ChevronRight className={`w-4 h-4 transition-transform duration-300
                            ${activeCategoryId === category.id ? "transform rotate-90" : ""}`} />
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8 min-h-[500px]">
              {!selectedCategory ? (
                <div className="flex flex-col items-center justify-center h-full py-16">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mb-6">
                    <Grid3X3 className="w-12 h-12 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    Select a Category
                  </h3>
                  <p className="text-gray-500 text-center max-w-md">
                    Choose a category from the left panel to view its subcategories and explore products
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h1 className="text-3xl font-bold text-gray-900">
                          {selectedCategory.categoryName}
                        </h1>
                        <p className="text-gray-600 mt-2">
                          Browse through our carefully curated subcategories
                        </p>
                      </div>
                      <div className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium">
                        {selectedCategory.subCategories.length} Subcategories
                      </div>
                    </div>
                  </div>

                  {selectedCategory.subCategories.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                      {selectedCategory.subCategories.map((sub) => (
                        <Link
                          key={sub.id}
                          to={`/subCategoryPage/${sub.id}`}
                          className="group block"
                        >
                          <div className="relative bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 text-center
                            transition-all duration-300 hover:shadow-2xl hover:border-blue-300 hover:scale-[1.02]
                            overflow-hidden"
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-indigo-50/0 group-hover:from-blue-50/40 group-hover:to-indigo-50/40 transition-all duration-300" />
                            
                            <div className="relative mb-4">
                              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center
                                group-hover:from-blue-200 group-hover:to-indigo-200 transition-all duration-300">
                                <FolderOpen className="w-8 h-8 text-blue-600" />
                              </div>
                            </div>
                            
                            <div className="relative">
                              <h3 className="font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300 mb-2">
                                {sub.subCategoryName}
                              </h3>
                              <div className="flex items-center justify-center gap-1 text-sm text-gray-500">
                                <span>Explore products</span>
                                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-16">
                      <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                        <FolderOpen className="w-10 h-10 text-gray-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-700 mb-2">
                        No Subcategories Available
                      </h3>
                      <p className="text-gray-500 text-center max-w-sm">
                        This category doesn't have any subcategories yet. Check back soon for updates!
                      </p>
                    </div>
                  )}

                  <div className="mt-10 pt-6 border-t border-gray-100">
                    <button
                      onClick={() => setActiveCategoryId(null)}
                      className="px-5 py-2.5 text-gray-600 hover:text-gray-900 font-medium
                        hover:bg-gray-50 rounded-lg transition-colors duration-200 flex items-center gap-2"
                    >
                      <ChevronRight className="w-4 h-4 rotate-180" />
                      Back to all categories
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;