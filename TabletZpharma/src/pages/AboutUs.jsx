import React from 'react';

function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Your Trusted Healthcare Partner
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                TabletzPharma is committed to providing quality healthcare products at affordable prices. 
                With our special discounts and in-house doctor consultation, we ensure comprehensive healthcare solutions for everyone.
              </p>
              <div className="flex flex-col gap-4">
                <div className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold">
                  15% OFF on All Medicines
                </div>
                <div className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold">
                  20% OFF on Purchases Above ₹999
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://img.freepik.com/free-vector/doctor-character-avatar-isolated_24877-60111.jpg" 
                alt="Healthcare Professional" 
                className="rounded-lg shadow-xl w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive healthcare solutions for your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl text-center">
              <div className="text-4xl mb-4">💊</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Quality Medicines</h3>
              <p className="text-gray-600">Wide range of medicines with special discounts</p>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl text-center">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Home Delivery</h3>
              <p className="text-gray-600">Call 8969995969 for quick delivery</p>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl text-center">
              <div className="text-4xl mb-4">👨‍⚕️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Doctor Consultation</h3>
              <p className="text-gray-600">Visit our in-house doctor for professional advice</p>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Consultation Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://img.freepik.com/free-vector/medical-doctor-team-concept-illustration_114360-1513.jpg" 
                alt="Doctor Consultation" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Doctor Consultation</h3>
              <p className="text-gray-600 mb-6">
                Visit our in-house doctor for professional medical advice and consultation. 
                Our experienced doctor is available to help you with:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600">✓</span>
                  <span className="text-gray-600">General health check-ups</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600">✓</span>
                  <span className="text-gray-600">Prescription services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600">✓</span>
                  <span className="text-gray-600">Medical advice</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600">✓</span>
                  <span className="text-gray-600">Health consultations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    
    </div>
  );
}

export default AboutUs;