import { useNavigate, useParams } from "react-router-dom";
import { useGetProductByIdQuery, type Product } from "../../store/reducer/reduxSlice";
import { useState } from "react";
import { useAddToCartMutation } from "../../store/api/cartApi/cartApi";





const AboutPage = () => {
  const navigate=useNavigate()
  const { id } = useParams<{ id: string }>();
  const { data } = useGetProductByIdQuery(Number(id));
  const [quantity, setQuantity] = useState(1);

  const [addToCart] = useAddToCartMutation();

  const handleAddToCart = async (productId: number) => {
    try {
      await addToCart(productId).unwrap();
      alert("Маҳсулот ба корзина илова шуд!");
    } catch (error) {
      console.error(error);
    }
  };


  const product: Product | undefined = data?.data;

  if (!product) {
    return <p>Loading product...</p>; 
  }

  console.log("Product ID:", product.id);

  if (!product) return ["nichego ni naydeno !!!"];

  const totalPrice = (product.discountPrice * quantity).toFixed(2);
  const availableStock = 91;
  console.log(data);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 bg-gray-100 p-8 flex items-center justify-center">
            <img
              src={product?.images?.[0]?.images
                ? `https://store-api.softclub.tj/images/${product.images[0].images}`
                : "/placeholder.jpg"}
              alt={product.brand}
              className="max-w-full max-h-96 object-contain rounded-lg"
            />
          </div>
          <div className="md:w-1/2 p-6 md:p-10 flex flex-col gap-6">

            <div className="relative">
              <div className="absolute -left-4 -top-4 bg-orange-500 text-white px-8 py-4 text-2xl font-bold rounded-r-lg shadow-md">
                {product.brand}
              </div>
              <div className="mt-12">
                <span className="inline-block bg-orange-500 text-white px-4 py-2 rounded-lg text-lg font-medium">
                  Нержавеющая сталь
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 text-xl">★★★★☆</span>
                <span className="text-gray-500 text-sm">(0 отзывов)</span>
              </div>
              <button className="text-gray-400 hover:text-red-500 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>

            <div className="flex items-center gap-3 border border-gray-200 rounded-lg p-3">
              <div className="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm">
                ТОВАР Tech
              </div>
              <div>
                <p className="font-medium">Товар Tech</p>
                <p className="text-sm text-green-600">Проверенный продавец</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-gray-600">Цена</div>
              <div className="text-3xl font-bold text-blue-600">
                {product.discountPrice.toFixed(2)} TJS/шт
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-6">
                <span className="font-medium">Количество</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition"
                  >
                    -
                  </button>
                  <span className="px-6 py-2 border-x border-gray-300 min-w-16 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition"
                    disabled={quantity >= availableStock}
                  >
                    +
                  </button>
                </div>
                <span className="text-sm text-gray-500">
                  ({availableStock} доступен)
                </span>
              </div>
              <div className="text-2xl font-bold text-blue-600">
                Общая цена {totalPrice} TJS
              </div>
            </div>

            <div className="text-gray-600">
              Артикул <span className="ml-2 font-medium">{product.id}</span>
            </div>

            <div>
              <p className="text-sm text-gray-600 mb-2">
                Информация о рассрочке
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-lg font-medium">
                  12 месяц 4.83 TJS x12 0%
                </button>
                <button className="border border-gray-300 px-4 py-2 rounded-lg">
                  9 месяц 0%
                </button>
                <button className="border border-gray-300 px-4 py-2 rounded-lg">
                  6 месяц 0%
                </button>
                <button className="border border-gray-300 px-4 py-2 rounded-lg">
                  3 месяц 0%
                </button>
              </div>
            </div>
            <div className="flex gap-4 mt-8">
              <button onClick={(e) => {
                e.stopPropagation(); handleAddToCart(product.id);
              }}
                className="flex-1 bg-yellow-500 text-white py-4 rounded-lg font-medium hover:bg-yellow-600 transition flex items-center justify-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                В корзину
              </button>
              <button onClick={()=> navigate("signupPage") } className="flex-1 bg-blue-600 text-white py-4 rounded-lg font-medium hover:bg-blue-700 transition">
                Купить сейчас
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;