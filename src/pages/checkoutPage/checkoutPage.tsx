import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetCartQuery } from "../../store/api/cartApi/cartApi";
import toast from "react-hot-toast";

const BOT_TOKEN = "8538474394:AAHduhMCgIin-Cp9GrlKuXksRJPREInafDM";
const CHAT_ID = "-1003694695177";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { data: cartData, isLoading, isError } = useGetCartQuery();

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    address: "",
    paymentMethod: "cod",
  });

  const [loading, setLoading] = useState(false);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-xl text-gray-600">Loading...</p>
      </div>
    );
  }

  // @ts-ignore
  if (isError || !cartData?.data?.[0]?.productsInCart) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-xl text-red-600">Error loading cart</p>
      </div>
    );
  }

  // @ts-ignore
  const cartItems = cartData.data[0].productsInCart;
  const subtotal = cartItems.reduce(
    (sum: number, item: any) => sum + item.product.discountPrice * item.quantity,
    0
  );
  const total = subtotal;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.phoneNumber || !formData.address) {
      toast.success(` Please fill in all required fields!`, {
                          duration: 3000,
                          icon: '✅',
                        })
      return;
    }

    setLoading(true);

    const itemsText = cartItems
      .map(
        (item: any) =>
          `• ${item.product.productName}\n  Quantity: ${item.quantity}\n  Price: ${item.product.discountPrice} TJS each\n  Subtotal: ${(item.product.discountPrice * item.quantity).toFixed(2)} TJS`
      )
      .join("\n\n");

    const paymentText =
      formData.paymentMethod === "cod" ? "Cash on Delivery" : "Bank Card / VISA / OMT";

    const message = `🛒 NEW ORDER

👤 Customer: ${formData.fullName}
📞 Phone: ${formData.phoneNumber}
📍 Address: ${formData.address}
💳 Payment Method: ${paymentText}

🛍️ Order Items:
${itemsText}

💰 Total Amount: ${total.toFixed(2)} TJS

⏰ Order Time: ${new Date().toLocaleString()}
`;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message,
            parse_mode: "HTML",
          }),
        }
      );

      const result = await response.json();

      if (result.ok) {
        toast.success(` Order placed successfully!\nWe will contact you soon.`, {
                          duration: 3000,
                          icon: '✅',
                        })
        
        navigate("/");
      } else {
        toast.success(` Error sending order. Please try again.`, {
                          duration: 3000,
                          icon: '✅',
                        })
      }
    } catch (error) {
      console.error(error);
      toast.success(` Network error. Please check your connection.`, {
                          duration: 3000,
                          icon: '✅',
                        })
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-sm text-gray-600">
          <span className="hover:text-blue-600 cursor-pointer" onClick={() => navigate("/")}>
            Home
          </span>{" "}
          /{" "}
          <span className="hover:text-blue-600 cursor-pointer" onClick={() => navigate("/cartPage")}>
            Cart
          </span>{" "}
          / <span className="text-blue-600 font-semibold">Checkout</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Order Confirmation</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Information</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="e.g. John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="+992 92 345 67 89"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Delivery Address (city, street, house) *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="Dushanbe, Rudaki Ave, House 45"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Payment Method
                  </label>
                  <select
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  >
                    <option value="cod">Cash on Delivery (COD)</option>
                    <option value="bank">Bank Card / Humo / ALIF</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xl font-bold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-xl disabled:opacity-70"
                >
                  {loading ? "Processing..." : "Confirm Order"}
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>

              <div className="space-y-5 mb-8 max-h-96 overflow-y-auto">
                {cartItems.map((item: any) => (
                  <div key={item.id} className="flex items-center gap-4 pb-4 border-b border-gray-100">
                    <img
                      src={`https://store-api.softclub.tj/images/${item.product.image}`}
                      alt={item.product.productName}
                      className="w-16 h-16 rounded-xl object-cover border border-gray-200"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 text-sm line-clamp-2">
                        {item.product.productName}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">
                        {item.quantity} × {item.product.discountPrice} TJS
                      </p>
                    </div>
                    <p className="font-bold text-gray-900">
                      {(item.product.discountPrice * item.quantity).toFixed(2)} TJS
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg text-gray-700">Total:</span>
                  <span className="text-2xl font-bold text-indigo-600">{total.toFixed(2)} TJS</span>
                </div>
                <p className="text-sm text-gray-600 text-center mt-4">
                  Delivery: <span className="text-green-600 font-semibold">Free</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;