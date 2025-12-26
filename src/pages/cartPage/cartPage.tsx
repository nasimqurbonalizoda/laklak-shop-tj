
import { useNavigate } from "react-router-dom";
import {useClearCartMutation,useDecreaseQuantityMutation,useGetCartQuery,
  useIncreaseQuantityMutation,useRemoveFromCartMutation,} from "../../store/api/cartApi/cartApi";

// type CartItem = {
//   id: number;
//   quantity: number;
//   product: {
//     id: number;
//     productName: string;
//     price: number;
//     image: string;
//   };
// };

const CartPage = () => {
  const { data, isLoading, isError } = useGetCartQuery();
  const [increase] = useIncreaseQuantityMutation();
  const [decrease] = useDecreaseQuantityMutation();
  const [remove] = useRemoveFromCartMutation();
  const [clear] = useClearCartMutation();

  const navigate=useNavigate()

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Loading cart...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-red-600">Error loading cart</p>
      </div>
    );
  }
  // @ts-ignore
  const cartItems: any = data?.data?.[0]?.productsInCart ?? [];
  const total = cartItems.reduce(
    (sum:any, item:any) => sum + item.product.price * item.quantity,0);
  
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">

        <nav className="text-sm text-gray-600 mb-8">
          Home / <span className="font-semibold text-gray-900">Shopping Cart</span>
        </nav>


        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

          <div className="hidden md:grid grid-cols-12 gap-6 px-8 py-6 bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold text-sm uppercase tracking-wider">
            <div className="col-span-5">Product</div>
            <div className="col-span-2 text-center">Price</div>
            <div className="col-span-3 text-center">Quantity</div>
            <div className="col-span-2 text-right">Subtotal</div>
          </div>

          {cartItems.map((item:any) => (
            <div key={item.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 px-6 md:px-8 py-8 border-b border-gray-100 hover:bg-gray-50 transition duration-200 items-center" >
              <div className="col-span-1 md:col-span-5 flex items-center gap-5">
                <img
                  src={`https://store-api.softclub.tj/images/${item.product.image}`}
                  alt={item.product.productName}
                  className="w-20 h-20 rounded-xl object-cover border border-gray-200 shadow-sm"
                  onError={(e) => (e.currentTarget.src = "/placeholder.jpg")}
                />
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {item.product.productName}
                  </h3>
                  <button
                    onClick={() => remove(item.id)}
                    className="text-red-500 hover:text-red-700 text-sm mt-2 flex items-center gap-1 transition"
                  >
                    <span className="text-xl"> × </span> Remove
                  </button>
                </div>
              </div>

              <div className="col-span-1 md:col-span-2 text-center">
                <p className="text-lg font-medium text-gray-800">
                  TJS {item.product.price.toFixed(2)}
                </p>
              </div>

              <div className="col-span-1 md:col-span-3 flex justify-center">
                <div className="flex items-center border border-gray-300 rounded-full overflow-hidden shadow-sm">
                  <button
                    onClick={() => decrease(item.id)}
                    disabled={item.quantity <= 1}
                    className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition">
                    -
                  </button>
                  <span className="w-14 text-center font-semibold text-gray-800">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => increase(item.id)}
                    className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition">
                    +
                  </button>
                </div>
              </div>
              <div className="col-span-1 md:col-span-2 text-right">
                <p className="text-xl font-bold text-indigo-600">
                  TJS {(item.product.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <button
            onClick={() => clear()}
            className="px-8 py-4 border border-red-500 text-red-600 rounded-xl font-medium hover:bg-red-50 transition duration-200">
            Clear Cart
          </button>
          <div className="bg-white rounded-2xl shadow-lg p-8 w-full md:w-96 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Cart Total</h3>

            <div className="flex justify-between items-center py-4 border-b border-gray-200">
              <span className="text-lg text-gray-700">Subtotal</span>
              <span className="text-xl font-semibold">TJS {total.toFixed(2)}</span>
            </div>

            <div className="flex justify-between items-center py-6">
              <span className="text-2xl font-bold text-gray-900">Total</span>
              <span className="text-3xl font-bold text-indigo-600">
                TJS {total.toFixed(2)}
              </span>
            </div>

            <button onClick={()=> navigate("/signupPage/")} className="w-full mt-6 py-5 bg-linear-to-r from-indigo-600 to-blue-600 text-white text-lg font-semibold rounded-xl hover:from-indigo-700 hover:to-blue-700 transition duration-300 shadow-lg">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;