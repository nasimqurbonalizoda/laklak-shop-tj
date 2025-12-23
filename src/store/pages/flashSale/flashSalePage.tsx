import { useState, useEffect } from "react";

const FlashSalePage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const end = new Date("2025-12-31T23:59:59");

      const diff = end.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Флэш-сделки</h1>
          <p className="text-sm text-gray-600">
            Главная / <span className="font-medium text-gray-900">Флэш-сделки</span>
          </p>
        </div>

        <div className="relative h-80 md:h-96 rounded-3xl overflow-hidden bg-gradient-to-r from-orange-500 to-red-600 shadow-2xl">
          <div className="absolute inset-0 bg-black/10"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-between h-full px-8 md:px-16">
            <div className="text-center md:text-left">
              <div className="inline-block bg-white rounded-2xl shadow-2xl px-6 py-5 mb-8">
                <div className="flex gap-4 md:gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-blue-100 flex items-center justify-center mb-1">
                      <span className="text-2xl md:text-4xl font-bold text-blue-600">
                        {timeLeft.days}
                      </span>
                    </div>
                    <p className="text-xs md:text-sm text-gray-700">ДНЕЙ</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-blue-100 flex items-center justify-center mb-1">
                      <span className="text-2xl md:text-4xl font-bold text-blue-600">
                        {timeLeft.hours.toString().padStart(2, "0")}
                      </span>
                    </div>
                    <p className="text-xs md:text-sm text-gray-700">ЧАСОВ</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-blue-100 flex items-center justify-center mb-1">
                      <span className="text-2xl md:text-4xl font-bold text-blue-600">
                        {timeLeft.minutes.toString().padStart(2, "0")}
                      </span>
                    </div>
                    <p className="text-xs md:text-sm text-gray-700">МИНУТ</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-blue-100 flex items-center justify-center mb-1">
                      <span className="text-2xl md:text-4xl font-bold text-blue-600">
                        {timeLeft.seconds.toString().padStart(2, "0")}
                      </span>
                    </div>
                    <p className="text-xs md:text-sm text-gray-700">СЕКУНД</p>
                  </div>
                </div>
              </div>

              <h2 className="text-5xl md:text-7xl font-black text-white drop-shadow-2xl">
                СУПЕР РАСПРОДАЖА
              </h2>
              <p className="text-4xl md:text-6xl font-black text-white drop-shadow-2xl mt-2">
                СКИДКИ ДО 80%
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
              >
                <div className="h-48 bg-gray-200"></div>
                <div className="p-4">
                  <div className="h-5 bg-gray-200 rounded w-4/5 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-1"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-bold text-red-600">000 TJS</span>
                    <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm hover:bg-blue-700 transition">
                      В корзину
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSalePage;