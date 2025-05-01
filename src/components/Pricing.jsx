const Pricing = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Simple, Transparent <span className="text-yellow-500">Pricing</span></h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Choose the plan that's right for your learning journey
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Basic Plan */}
        <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-yellow-500/50 transition duration-300 flex flex-col">
          <div className="p-8 flex-1">
            <h3 className="text-2xl font-bold mb-2">Basic</h3>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold">₹499</span>
              <span className="text-gray-400 ml-1">/month</span>
            </div>
            <p className="text-gray-300 mb-6">Perfect for beginners who want to explore a single cohort</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-yellow-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Access to 1 cohort</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-yellow-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Basic coding hostel access (5 hrs/week)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-yellow-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Course videos and materials</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-yellow-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Community forum access</span>
              </li>
              <li className="flex items-start text-gray-500">
                <svg className="h-6 w-6 text-gray-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>No bounty program access</span>
              </li>
              <li className="flex items-start text-gray-500">
                <svg className="h-6 w-6 text-gray-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>No 1:1 mentorship</span>
              </li>
            </ul>
          </div>
          <div className="px-8 pb-8">
            <button className="w-full bg-transparent border border-yellow-500 hover:bg-yellow-500/10 text-yellow-500 font-bold px-4 py-3 rounded-md transition">
              Choose Basic
            </button>
          </div>
        </div>

        {/* Pro Plan - Most Popular */}
        <div className="bg-gray-800 rounded-xl overflow-hidden border-2 border-yellow-500 transform scale-105 z-10 shadow-xl relative flex flex-col">
          <div className="bg-yellow-500 text-black font-semibold py-1 text-center">
            MOST POPULAR
          </div>
          <div className="p-8 flex-1">
            <h3 className="text-2xl font-bold mb-2">Pro</h3>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold">₹999</span>
              <span className="text-gray-400 ml-1">/month</span>
            </div>
            <p className="text-gray-300 mb-6">Ideal for learners who want to master multiple skills</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-yellow-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Access to <strong>all</strong> cohorts</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-yellow-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Unlimited coding hostel access</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-yellow-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Course videos and materials</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-yellow-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Priority community support</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-yellow-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Full bounty program access</span>
              </li>
              <li className="flex items-start text-gray-500">
                <svg className="h-6 w-6 text-gray-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>Limited 1:1 mentorship (2 sessions/month)</span>
              </li>
            </ul>
          </div>
          <div className="px-8 pb-8">
            <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-4 py-3 rounded-md transition">
              Choose Pro
            </button>
          </div>
        </div>

        {/* Elite Plan */}
        <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-yellow-500/50 transition duration-300 flex flex-col">
          <div className="p-8 flex-1">
            <h3 className="text-2xl font-bold mb-2">Elite</h3>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold">₹1999</span>
              <span className="text-gray-400 ml-1">/month</span>
            </div>
            <p className="text-gray-300 mb-6">The ultimate package for serious career advancement</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-yellow-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Everything in Pro plan</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-yellow-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Unlimited 1:1 mentorship</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-yellow-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Resume & portfolio review</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-yellow-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Interview preparation sessions</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-yellow-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Job placement assistance</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-yellow-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Premium bounty rewards</span>
              </li>
            </ul>
          </div>
          <div className="px-8 pb-8">
            <button className="w-full bg-transparent border border-yellow-500 hover:bg-yellow-500/10 text-yellow-500 font-bold px-4 py-3 rounded-md transition">
              Choose Elite
            </button>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-12">
        <p className="text-gray-300 mb-2">Need a custom solution for your team or company?</p>
        <a href="#" className="text-yellow-500 font-semibold hover:text-yellow-400 underline">
          Contact us for enterprise pricing
        </a>
      </div>
    </section>
  )
}

export default Pricing