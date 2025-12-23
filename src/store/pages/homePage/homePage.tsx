
const HomePage = () => {
  return (
     <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          <aside className="w-64 ">
            <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
              <div>
                <label className="text-sm font-medium text-gray-700">Категории</label>
                <select className="mt-2 w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
                  <option>Все категории</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Ценовой диапазон</label>
                <div className="mt-3 flex items-center gap-4">
                  <input
                    type="number"
                    placeholder="18.00"
                    className="w-24 px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                  <span className="text-gray-500">-</span>
                  <input
                    type="number"
                    placeholder="210.00"
                    className="w-24 px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Размер</label>
                <select className="mt-2 w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
                  <option>-</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Размер обуви</label>
                <select className="mt-2 w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
                  <option>-</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Модель</label>
                <select className="mt-2 w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
                  <option>-</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Объем</label>
                <select className="mt-2 w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
                  <option>-</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Емкость аккумулятора</label>
                <select className="mt-2 w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
                  <option>-</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Тон</label>
                <select className="mt-2 w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
                  <option>-</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Марка</label>
                <select className="mt-2 w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
                  <option>-</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Диаметр</label>
                <select className="mt-2 w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
                  <option>-</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Вес</label>
                <select className="mt-2 w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
                  <option>-</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Аромат</label>
                <select className="mt-2 w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
                  <option>-</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Память</label>
                <select className="mt-2 w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
                  <option>-</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Тип</label>
                <select className="mt-2 w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
                  <option>-</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Количество в упаковке</label>
                <select className="mt-2 w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
                  <option>-</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Номер</label>
                <select className="mt-2 w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
                  <option>-</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Длина</label>
                <select className="mt-2 w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
                  <option>-</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Ширина</label>
                <select className="mt-2 w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
                  <option>-</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Разъём</label>
                <select className="mt-2 w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
                  <option>-</option>
                </select>
              </div>
            </div>
          </aside>

          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-semibold text-gray-900">Все товары</h1>
              <select className="border border-gray-300 rounded-md px-4 py-2 text-sm">
                <option>Сортировать по</option>
              </select>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="aspect-square bg-gray-200 border-2 border-dashed rounded-t-lg" />
                <div className="p-4">
                  <h3 className="text-sm text-gray-700 line-clamp-2 mb-2">
                    Светящаяся трасса для машинок
                  </h3>
                  <p className="text-xs text-gray-600 mb-3">199.00 TJS -3 мес.</p>
                  <div className="text-center">
                    <span className="text-blue-600 text-sm font-medium">В корзину</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="aspect-square bg-gray-200 border-2 border-dashed rounded-t-lg" />
                <div className="p-4">
                  <h3 className="text-sm text-gray-700 line-clamp-2 mb-2">
                    Детский набор косметики Danielle Bell
                  </h3>
                  <p className="text-xs text-gray-600 mb-3">210.00 TJS -3 мес.</p>
                  <div className="text-center">
                    <span className="text-blue-600 text-sm font-medium">В корзину</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="aspect-square bg-gray-200 border-2 border-dashed rounded-t-lg" />
                <div className="p-4">
                  <h3 className="text-sm text-gray-700 line-clamp-2 mb-2">
                    Игровой Набор 'Сила Орков'
                  </h3>
                  <p className="text-xs text-gray-600 mb-3">110.00 TJS -3 мес.</p>
                  <div className="text-center">
                    <span className="text-blue-600 text-sm font-medium">В корзину</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="aspect-square bg-gray-200 border-2 border-dashed rounded-t-lg" />
                <div className="p-4">
                  <h3 className="text-sm text-gray-700 line-clamp-2 mb-2">
                    Магнитный конструктор Minecraft
                  </h3>
                  <p className="text-xs text-gray-600 mb-3">210.00 TJS -3 мес.</p>
                  <div className="text-center">
                    <span className="text-blue-600 text-sm font-medium">В корзину</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="aspect-square bg-gray-200 border-2 border-dashed rounded-t-lg" />
                <div className="p-4">
                  <h3 className="text-sm text-gray-700 line-clamp-2 mb-2">
                    Набор конструктора MY WORLD
                  </h3>
                  <p className="text-xs text-gray-600 mb-3">125.00 TJS -3 мес.</p>
                  <div className="text-center">
                    <span className="text-blue-600 text-sm font-medium">В корзину</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="aspect-square bg-gray-200 border-2 border-dashed rounded-t-lg" />
                <div className="p-4">
                  <h3 className="text-sm text-gray-700 line-clamp-2 mb-2">
                    Модельный конструктор вертолет 3D
                  </h3>
                  <p className="text-xs text-gray-600 mb-3">18.00 TJS -3 мес.</p>
                  <div className="text-center">
                    <span className="text-blue-600 text-sm font-medium">В корзину</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="aspect-square bg-gray-200 border-2 border-dashed rounded-t-lg" />
                <div className="p-4">
                  <h3 className="text-sm text-gray-700 line-clamp-2 mb-2">
                    3D пазл деревянный 'Sunflower Villa'
                  </h3>
                  <p className="text-xs text-gray-600 mb-3">35.00 TJS -3 мес.</p>
                  <div className="text-center">
                    <span className="text-blue-600 text-sm font-medium">В корзину</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="aspect-square bg-gray-200 border-2 border-dashed rounded-t-lg" />
                <div className="p-4">
                  <h3 className="text-sm text-gray-700 line-clamp-2 mb-2">
                    Магнитная мозаика 'Кролик'
                  </h3>
                  <p className="text-xs text-gray-600 mb-3">139.00 TJS -3 мес.</p>
                  <div className="text-center">
                    <span className="text-blue-600 text-sm font-medium">В корзину</span>
                  </div>
                </div>
              </div>

                <div  className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="aspect-square bg-gray-200 border-2 border-dashed rounded-t-lg" />
                  <div className="p-4">
                    <div className="h-4 bg-gray-200 rounded w-10/12 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-8/12 mb-3"></div>
                    <div className="text-center">
                      <span className="text-blue-600 text-sm font-medium">В корзину</span>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
