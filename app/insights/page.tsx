import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Insights & Blog | EGC - Expert Business Consulting',
  description: 'Stay informed with the latest insights, industry trends, and expert analysis from EGC. Read our comprehensive articles on business strategy, compliance, and industry best practices.',
}

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative hero-gradient text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div className="hero-overlay"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: "url('/images/hero-insights.svg')",
          }}
        ></div>
        <div className="hero-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Insights & Expert Analysis
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Stay informed with the latest industry trends, regulatory updates, and expert insights 
              to drive your business success
            </p>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-20 section-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-body">
              Stay informed with our latest insights and expert analysis
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
              <div className="h-48 bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <p className="text-sm">Legal Metrology</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-heading mb-3">Legal Metrology in India: A Complete Guide for Businesses in 2025</h3>
                <p className="text-body mb-4">
                  Navigate the complex world of weights and measures regulations with our comprehensive guide for businesses.
                </p>
                <a href="/insights/legal-metrology-guide" className="text-primary-600 hover:text-primary-700 font-semibold">
                  Read More →
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
              <div className="h-48 bg-gradient-to-r from-accent-500 to-accent-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                  </svg>
                  <p className="text-sm">Food Safety</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-heading mb-3">Eat Right India Initiative: What Businesses Need to Know</h3>
                <p className="text-body mb-4">
                  Understanding the impact of this important initiative on food businesses and compliance requirements.
                </p>
                <a href="/insights/eat-right-india-initiative" className="text-primary-600 hover:text-primary-700 font-semibold">
                  Read More →
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
              <div className="h-48 bg-gradient-to-r from-secondary-500 to-secondary-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <p className="text-sm">Business Strategy</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-heading mb-3">Top 5 Business Challenges in 2025 and How Consulting Can Solve Them</h3>
                <p className="text-body mb-4">
                  Navigate the complex business landscape with expert guidance and strategic solutions.
                </p>
                <a href="/insights/business-challenges-2025" className="text-primary-600 hover:text-primary-700 font-semibold">
                  Read More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Topics */}
      <section className="py-20 section-bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
              Featured Topics
            </h2>
            <p className="text-xl text-body">
              Explore our expertise across key business areas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-xl bg-primary-50 hover:bg-primary-100 transition-colors">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-heading mb-2">Compliance</h3>
              <p className="text-body text-sm">Regulatory updates and compliance strategies</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-accent-50 hover:bg-accent-100 transition-colors">
              <div className="w-16 h-16 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-heading mb-2">Strategy</h3>
              <p className="text-body text-sm">Business strategy and growth insights</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-success-50 hover:bg-success-100 transition-colors">
              <div className="w-16 h-16 bg-success-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-heading mb-2">Training</h3>
              <p className="text-body text-sm">Learning and development best practices</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-secondary-50 hover:bg-secondary-100 transition-colors">
              <div className="w-16 h-16 bg-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-heading mb-2">Marketing</h3>
              <p className="text-body text-sm">Digital marketing and brand strategies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-primary-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated with Our Insights
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get the latest industry insights, regulatory updates, and expert analysis delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-white-900 focus:outline-white focus:ring-2 focus:ring-primary-100"
            />
            <button className="bg-accent-600 hover:bg-accent-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  )
}
