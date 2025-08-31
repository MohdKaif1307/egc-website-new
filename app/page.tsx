import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>
                <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: "url('/images/hero-home.svg')",
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Simplifying Compliance, Empowering Businesses
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              From regulatory projects to corporate training and brand development — we provide end-to-end consultancy that helps your business stay future-ready.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="/contact" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Talk to Our Experts
              </a>
              <a 
                href="/services" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Explore Services
              </a>
            </div>
            <p className="text-lg text-blue-200">
              Trusted by entrepreneurs, startups, and enterprises for over 10 years.
            </p>
          </div>
        </div>
      </section>

      {/* Our Core Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive consultancy designed to simplify compliance and strengthen your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Business & Management Consulting */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Business & Management Consulting</h3>
              <p className="text-gray-600 mb-6">
                Expert guidance to streamline operations, compliance, and growth strategies.
              </p>
              <a href="/services/consulting" className="text-blue-600 hover:text-blue-700 font-semibold">
                Explore Consulting →
              </a>
            </div>

            {/* Learning & Development Programs */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Learning & Development Programs</h3>
              <p className="text-gray-600 mb-6">
                Customized workshops and corporate training designed to build skills and performance.
              </p>
              <a href="/services/training" className="text-green-600 hover:text-green-700 font-semibold">
                View Programs →
              </a>
            </div>

            {/* Corporate Compliance Solutions */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Corporate Compliance Solutions</h3>
              <p className="text-gray-600 mb-6">
                Ensure your business stays aligned with government regulations and industry standards.
              </p>
              <a href="/services/compliance" className="text-purple-600 hover:text-purple-700 font-semibold">
                Get Compliance Support →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Project Implementation */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white-900 mb-4">
              Driving Change Through Regulatory Projects
            </h2>
            <p className="text-xl text-white-600 max-w-3xl mx-auto">
              We actively participate in government-backed and industry-driven initiatives to promote compliance and awareness.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Eat Right India Initiative */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Eat Right India Initiative</h3>
              <p className="text-gray-600 mb-6">
                Supporting India's vision for safe, healthy, and sustainable food practices.
              </p>
              <a href="/projects/eat-right-india" className="text-green-600 hover:text-green-700 font-semibold">
                Learn More →
              </a>
            </div>

            {/* Legal Metrology Affairs */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Legal Metrology Affairs</h3>
              <p className="text-gray-600 mb-6">
                Advisory and compliance support for weights, measures, and labeling regulations.
              </p>
              <a href="/projects/legal-metrology" className="text-blue-600 hover:text-blue-700 font-semibold">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Brand & Marketing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Grow Your Brand, Expand Your Reach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Helping your business connect with customers and stand out in a competitive market.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* SEO Optimization Services */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">SEO Optimization Services</h3>
              <p className="text-gray-600 mb-6">
                Boost your online presence with data-driven SEO strategies to rank higher on search engines.
              </p>
              <a href="/services/seo" className="text-orange-600 hover:text-orange-700 font-semibold">
                Learn More →
              </a>
            </div>

            {/* Marketing for Your Brand */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Marketing for Your Brand</h3>
              <p className="text-gray-600 mb-6">
                End-to-end brand promotion and digital marketing solutions to grow visibility and reach.
              </p>
              <a href="/services/marketing" className="text-red-600 hover:text-red-700 font-semibold">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white-900 mb-6">
                Why Choose Emmanuel Global Consultancies?
              </h2>
              <p className="text-lg text-white-600 mb-8">
                At EGC World, we specialize in regulatory project implementation, corporate consultancy, training, and brand development. With over a decade of expertise, we help businesses simplify compliance, achieve growth, and stay future-ready.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white-700">10+ Years of Consultancy Experience</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white-700">1000+ Projects Delivered Successfully</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white-700">Dedicated Experts for Every Client</span>
                </div>
              </div>
              <a href="/about" className="text-white-600 hover:text-blue-700 font-semibold">
                Know More About Us →
              </a>
            </div>
            <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <p>Company Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Ramesh Gupta</h4>
                  <p className="text-gray-600">Food Entrepreneur</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "EGC World made our compliance journey smooth and stress-free. Excellent guidance throughout."
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Neha Sharma</h4>
                  <p className="text-gray-600">Startup Founder</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "They supported us with compliance and brand promotion — a one-stop solution!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Today */}
      <section className="py-20 bg-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Connect With Us
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Fill in your details and our team will connect with you within 24 hours.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-white-900"
                />
                <input
                  type="text"
                  placeholder="Email / Phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-white-900"
                />
              </div>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-black-900">
                <option value="">Service Needed</option>
                <option value="consulting">Consulting</option>
                <option value="training">Training</option>
                <option value="compliance">Compliance</option>
                <option value="marketing">Marketing</option>
                <option value="projects">Projects</option>
              </select>
              <button
                type="submit"
                className="w-full bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Request a Callback
              </button>
            </form>
          </div>
          
          <div className="mt-12 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center">
                <span className="mr-2">📞</span>
                <a href="tel:+918527273997" className="hover:text-blue-300 transition-colors">
                  +91 85272 73997
                </a>
              </div>
              <div className="flex items-center justify-center">
                <span className="mr-2">📧</span>
                <a href="mailto:support@egcworld.in" className="hover:text-blue-300 transition-colors">
                  support@egcworld.in
                </a>
              </div>
              <div className="flex items-center justify-center">
                <span className="mr-2">📍</span>
                <span>614, 6th Floor, Eros City Square Mall, Rose Wood City, Gurugram, Haryana, 122018</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insights & Resources */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white-900 mb-4">
              Insights & Resources
            </h2>
            <p className="text-xl text-white-600 max-w-3xl mx-auto">
              Stay updated with the latest in compliance, corporate training, and business growth.
            </p>
            <p className="text-white-500 mt-4">
              (Future blog posts will appear here — excellent for SEO & thought leadership.)
            </p>
          </div>
          
          <div className="text-center">
            <a href="/insights" className="text-white-600 hover:text-blue-700 font-semibold text-lg">
              View All Insights →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
