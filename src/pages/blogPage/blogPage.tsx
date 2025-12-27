import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import said from "../../assets/photo_2025-12-25_10-55-35.jpg"
import nasim from "../../assets/photo_2025-12-27_13-25-20.jpg"

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
                Our Story
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Founded in 2025, NoyobTech has quickly become Tajikistan's leading online destination for cutting-edge technology and gadgets. We started with a simple mission: to bring the latest smartphones, tablets, laptops, headphones, and accessories to customers across the country — with fast delivery, genuine products, and unbeatable prices.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, we partner with global brands like Apple, Samsung, Xiaomi, Sony, JBL, Lenovo, ASUS, and many more. We offer over 5,000 original products, carefully selected to meet the needs of students, professionals, gamers, and tech enthusiasts in Tajikistan.
              </p>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="../../../image.png"
                  alt="Modern gadgets and happy customers"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-4xl font-bold text-gray-900">5,000+</h3>
              <p className="text-gray-600 mt-2">Original tech products available</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-4xl font-bold text-gray-900">50k+</h3>
              <p className="text-gray-600 mt-2">Orders delivered nationwide</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-4xl font-bold text-gray-900">98%</h3>
              <p className="text-gray-600 mt-2">Happy customers & positive reviews</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-4xl font-bold text-gray-900">100%</h3>
              <p className="text-gray-600 mt-2">Original & certified products</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="relative mb-6 overflow-hidden rounded-3xl">
                <img
                  src={said}
                  alt="Saiddamir Saidov"
                  className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent pt-16 pb-6">
                  <h3 className="text-2xl font-bold text-white">Saiddamir Saidov</h3>
                  <p className="text-white/80">Founder & CEO</p>
                  <div className="flex justify-center gap-4 mt-4">
                    <a href="#" className="text-white hover:text-blue-400 transition"><FaTwitter /></a>
                    <a href="#" className="text-white hover:text-pink-400 transition"><FaInstagram /></a>
                    <a href="#" className="text-white hover:text-blue-600 transition"><FaLinkedinIn /></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center group">
              <div className="relative mb-6 overflow-hidden rounded-3xl">
                <img
                  src="../../../licensed-image.webp"
                  alt="Dilnoza Rahimova"
                  className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent pt-16 pb-6">
                  <h3 className="text-2xl font-bold text-white">Khabib Nurmagommedov</h3>
                  <p className="text-white/80">Operations Director</p>
                  <div className="flex justify-center gap-4 mt-4">
                    <a href="#" className="text-white hover:text-blue-400 transition"><FaTwitter /></a>
                    <a href="#" className="text-white hover:text-pink-400 transition"><FaInstagram /></a>
                    <a href="#" className="text-white hover:text-blue-600 transition"><FaLinkedinIn /></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center group">
              <div className="relative mb-6 overflow-hidden rounded-3xl">
                <img
                  src={nasim}
                  alt="Nasim Alizoda"
                  className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent pt-16 pb-6">
                  <h3 className="text-2xl font-bold text-white">Nasim Alizoda</h3>
                  <p className="text-white/80">Head of Technology</p>
                  <div className="flex justify-center gap-4 mt-4">
                    <a href="#" className="text-white hover:text-blue-400 transition"><FaTwitter /></a>
                    <a href="#" className="text-white hover:text-pink-400 transition"><FaInstagram /></a>
                    <a href="#" className="text-white hover:text-blue-600 transition"><FaLinkedinIn /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12 gap-3">
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4-8-4m16 0v10l-8 4-8-4V7m16 0l-8-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">FAST DELIVERY ACROSS TAJIKISTAN</h3>
              <p className="text-gray-600">Free delivery in Dushanbe • Nationwide shipping in 1-3 days</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">24/7 CUSTOMER SUPPORT</h3>
              <p className="text-gray-600">We're here to help you anytime via chat, phone, or Telegram</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">100% ORIGINAL PRODUCTS</h3>
              <p className="text-gray-600">Official warranty • Return within 14 days • Full refund guarantee</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;