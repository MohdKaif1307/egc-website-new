export default function EatRightIndiaProject() {
  return (
    <>
            {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-900 via-green-800 to-green-700 text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>
                <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: "url('/images/hero-eat-right.svg')",
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Eat Right India Initiative
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-4xl mx-auto">
              Supporting FSSAI's mission to ensure safe, healthy, and sustainable food for all citizens through comprehensive implementation and awareness programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Partner With Us
              </a>
              <a
                href="/projects"
                className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                View All Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="bg-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white-900 mb-6">
                About the Eat Right India Initiative
              </h2>
              <p className="text-lg text-white-600 mb-6">
                The Eat Right India Initiative, launched by the Food Safety and Standards Authority of India (FSSAI), is a comprehensive movement to transform the country's food ecosystem and ensure safe, healthy, and sustainable food for all citizens.
              </p>
              <p className="text-lg text-white-600 mb-8">
                This initiative aims to create a culture of safe and healthy eating habits, reduce foodborne illnesses, and promote sustainable food practices across the country. EGC World is proud to be a key implementation partner in this transformative initiative.
              </p>
            </div>
            <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <p>Eat Right India Initiative Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Role */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              EGC World's Role in the Initiative
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive implementation and support services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Training & Education</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive training programs for food handlers, business owners, and consumers on food safety practices.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Food safety certification programs</li>
                <li>• Hygiene and sanitation training</li>
                <li>• Nutritional awareness workshops</li>
                <li>• Best practices implementation</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Compliance Support</h3>
              <p className="text-gray-600 mb-4">
                Helping businesses align with FSSAI guidelines and maintain food safety standards.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• FSSAI license assistance</li>
                <li>• Compliance audits and assessments</li>
                <li>• Documentation and record keeping</li>
                <li>• Regulatory updates and guidance</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Awareness Campaigns</h3>
              <p className="text-gray-600 mb-4">
                Engaging communities and stakeholders through targeted awareness and education programs.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Community outreach programs</li>
                <li>• School and college campaigns</li>
                <li>• Digital awareness initiatives</li>
                <li>• Public health messaging</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Implementation Support</h3>
              <p className="text-gray-600 mb-4">
                Hands-on support for implementing food safety practices and quality management systems.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Process optimization</li>
                <li>• Quality management systems</li>
                <li>• Monitoring and evaluation</li>
                <li>• Continuous improvement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Objectives */}
      <section className="bg-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white-900 mb-4">
              Key Objectives of the Initiative
            </h2>
            <p className="text-xl text-white-600">
              Building a healthier and safer food ecosystem for India
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white-900 mb-2">Safe Food</h3>
              <p className="text-white-600">
                Ensure food safety from farm to fork through proper handling, processing, and distribution practices.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white-900 mb-2">Healthy Food</h3>
              <p className="text-white-600">
                Promote nutritious and balanced diets to improve public health and reduce lifestyle diseases.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white-900 mb-2">Sustainable Food</h3>
              <p className="text-white-600">
                Encourage sustainable food production and consumption practices for environmental conservation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Results */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Impact & Results
            </h2>
            <p className="text-xl text-gray-600">
              Measurable outcomes from our participation in the initiative
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Food Businesses Trained</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">10,000+</div>
              <div className="text-gray-600">Individuals Educated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Cities Covered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-600">Compliance Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-white-600">
              Real impact from our implementation efforts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Restaurant Chain Transformation</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Helped a major restaurant chain implement comprehensive food safety protocols, resulting in 100% FSSAI compliance and improved customer trust.
              </p>
              <div className="text-sm text-gray-500">
                <strong>Result:</strong> 40% increase in customer satisfaction scores
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">School Nutrition Program</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Implemented healthy eating programs in 25 schools, educating over 5,000 students and staff on nutrition and food safety.
              </p>
              <div className="text-sm text-gray-500">
                <strong>Result:</strong> 60% improvement in food safety awareness
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-500 to-white-400 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the Eat Right India Movement
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto">
            Partner with us to contribute to building a healthier, safer, and more sustainable food ecosystem for India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-primary-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Partner With Us
            </a>
            <a 
              href="/projects" 
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              View All Projects
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
