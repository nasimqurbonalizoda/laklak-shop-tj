import { useNavigate } from "react-router-dom";
import {
  useClearCartMutation, useDecreaseQuantityMutation, useGetCartQuery,
  useIncreaseQuantityMutation, useRemoveFromCartMutation,
} from "../../store/api/cartApi/cartApi";
import { useState } from "react";
import toast from "react-hot-toast";

const CartPage = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetCartQuery();
  const [increase] = useIncreaseQuantityMutation();
  const [decrease] = useDecreaseQuantityMutation();
  const [remove] = useRemoveFromCartMutation();
  const [clear] = useClearCartMutation();

  const [showModal, setShowModal] = useState(false);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Loading cart...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
        <div className="bg-white shadow-2xl rounded-2xl p-8 flex flex-col items-center gap-6 max-w-md w-full">
          <img
            src="../../../images (1).jpeg"
            alt="Not found"
            className="w-60 h-auto rounded-xl"
          />
          <h1 className="text-2xl font-bold text-gray-800">
            No Product
          </h1>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium 
       hover:bg-blue-700 transition-all duration-300" >
            Go to Home
          </button>
        </div>
      </div>

    );
  }

  // @ts-ignore
  const cartItems: any[] = data?.data?.[0]?.productsInCart ?? [];
  const isCartEmpty = cartItems.length === 0;

  const total = cartItems.reduce(
    (sum: number, item: any) => sum + item.product.price * item.quantity,
    0
  );

  const handleProceedToCheckout = () => {
    if (isCartEmpty) return;
    setShowModal(true);
  };

  const goToCheckout = () => {
    setShowModal(false);
    toast.success("You're being redirected to checkout! ✅", {
      duration: 3500,
      style: {
        background: "#10b981",
        color: "#fff",
        fontSize: "16px",
        borderRadius: "12px",
      },
    });
    navigate("/checkoutPage");
  };

  const continueShopping = () => {
    setShowModal(false);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <nav className="text-sm text-gray-600 mb-8">
          Home / <span className="font-semibold text-gray-900">Shopping Cart</span>
        </nav>

        {isCartEmpty ? (
          <div className="bg-white rounded-2xl shadow-lg p-16 text-center">
            <div className="max-w-md mx-auto">
              <img src="../../../images.jpeg" alt="" />
              <div />
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Your cart is empty
              </h2>
              <p className="text-gray-600 mb-10 text-lg">
                Looks like you haven't added anything to your cart yet.
              </p>
              <button
                onClick={() => navigate("/")}
                className="px-10 py-5 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-lg font-semibold rounded-xl hover:from-indigo-700 hover:to-blue-700 transition duration-300 shadow-lg">
                Continue Shopping
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="hidden md:grid grid-cols-12 gap-6 px-8 py-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-sm uppercase tracking-wider">
                <div className="col-span-5">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-3 text-center">Quantity</div>
                <div className="col-span-2 text-right">Subtotal</div>
              </div>

              {cartItems.map((item: any) => (
                <div
                  key={item.id}
                  className="grid grid-cols-1 md:grid-cols-12 gap-6 px-6 md:px-8 py-8 border-b border-gray-100 hover:bg-gray-50 transition duration-200 items-center"
                >
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
                        <span className="text-xl">×</span> Remove
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
                        className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
                      >
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
                className="px-8 py-4 border border-red-500 text-red-600 rounded-xl font-medium hover:bg-red-50 transition duration-200"
              >
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

                <button
                  onClick={handleProceedToCheckout}
                  disabled={isCartEmpty}
                  className="w-full mt-6 py-5 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-lg font-semibold rounded-xl hover:from-indigo-700 hover:to-blue-700 transition duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to complete your purchase?
            </h2>
            <p className="text-gray-600 mb-8">
              You can proceed to checkout now or continue shopping and add more items to your cart.
            </p>

            <div className="flex gap-4">
              <button
                onClick={continueShopping}
                className="flex-1 py-4 border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition"
              >
                Continue Shopping
              </button>
              <button
                onClick={goToCheckout}
                className="flex-1 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-indigo-700 transition shadow-lg"
              >
                Go to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;