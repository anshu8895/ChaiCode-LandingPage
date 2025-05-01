import appStoreBadge from '../assets/store-buttons/app-store.svg'
import playStoreBadge from '../assets/store-buttons/play-store.svg'

const MobileApp = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* App Showcase */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative">
            {/* Phone mockup */}
            <div className="bg-gray-800 border-8 border-gray-700 rounded-3xl w-[280px] h-[560px] relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 right-0 h-16 bg-gray-700 flex justify-center items-end pb-1">
                <div className="w-32 h-5 bg-black rounded-b-xl"></div>
              </div>
              {/* App screen content */}
              <div className="pt-16 px-3 pb-3 h-full flex flex-col">
                <div className="bg-gray-900 rounded-xl p-3 mb-3">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full mr-2"></div>
                    <div>
                      <div className="h-3 w-28 bg-gray-600 rounded-md"></div>
                      <div className="h-2 w-20 bg-gray-700 mt-1 rounded-md"></div>
                    </div>
                  </div>
                  <div className="h-20 bg-gray-800 rounded-lg"></div>
                </div>
                <div className="flex-1 bg-gray-900 rounded-xl p-3 mb-3">
                  <div className="h-3 w-36 bg-gray-700 mb-3 rounded-md"></div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-24 bg-gray-800 rounded-lg"></div>
                    <div className="h-24 bg-gray-800 rounded-lg"></div>
                    <div className="h-24 bg-gray-800 rounded-lg"></div>
                    <div className="h-24 bg-gray-800 rounded-lg"></div>
                  </div>
                </div>
                <div className="h-16 bg-gray-900 rounded-xl flex justify-around items-center px-4">
                  <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
                  <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
                  <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
                  <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* App Description */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-bold mb-4">Learn on the <span className="text-yellow-500">Go</span></h2>
          <p className="text-xl text-gray-300 mb-6">
            ChaiCode's mobile application brings all our premium content, projects, and learning resources right to your fingertips. Never miss a beat in your coding journey.
          </p>
          
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-3 text-yellow-500">Key Features:</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-yellow-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Offline access to all course videos and materials</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-yellow-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Interactive coding challenges on the go</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-yellow-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Progress tracking and personalized learning paths</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-yellow-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Direct messaging with mentors and peers</span>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#" className="transform hover:scale-105 transition-transform">
              <img src={appStoreBadge} alt="Download on the App Store" className="h-14" />
            </a>
            <a href="#" className="transform hover:scale-105 transition-transform">
              <img src={playStoreBadge} alt="Get it on Google Play" className="h-14" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MobileApp