import React from 'react'
import {FAQ,Hero,Blogs,Reviews} from '../components/cmp'

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="mb-8 sm:mb-12" data-aos="fade-up">
        <Hero/>
      </section>

      {/* Features Section */}
      <section className="py-8 sm:py-12 bg-gradient-to-r from-blue-50 to-purple-50" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" data-aos="fade-right">
              <div className="text-blue-600 text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Special Discounts</h3>
              <p className="text-gray-600">Get minimum 15% off on all medicines and 20% off on purchases above ₹999</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" data-aos="zoom-in">
              <div className="text-purple-600 text-4xl mb-4">👨‍⚕️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Doctor Consultation</h3>
              <p className="text-gray-600">Visit our in-store doctor for professional medical advice and consultation</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" data-aos="fade-left">
              <div className="text-green-600 text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Home Delivery</h3>
              <p className="text-gray-600">Quick delivery at your doorstep. Call us: <a href="tel:8969995969" className="text-blue-600 hover:text-blue-800">896 999 5969</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-8 sm:py-12 bg-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <Reviews/>
        </div>
      </section>

      {/* Blogs Section */}
      {/* <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <Blogs/>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="py-8 sm:py-12 bg-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <FAQ/>
        </div>
      </section>
    </div>
  )
}

export default Home