import hiteshThumb from '../assets/hitesh-thumb.svg'


const Udemy = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Content */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white">Learn to code with</span>
              <br />
              <span className="text-yellow-500">Udemy</span> 
              <span className="text-white"> courses</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join our structured learning programs with expert mentors, collaborate with peers in virtual coding hostels, and build real-world projects to advance your tech career.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 rounded-md text-center text-lg transition">
                Explore
              </a>
              <a href="#" className="bg-transparent border border-yellow-500 hover:bg-yellow-500/10 text-yellow-500 font-bold px-8 py-4 rounded-md text-center text-lg transition">
                View Demo
              </a>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap mt-12">
              <div className="mr-12 mb-6">
                <p className="text-4xl font-bold text-yellow-500">10k+</p>
                <p className="text-gray-400">Active Learners</p>
              </div>
              <div className="mr-12 mb-6">
                <p className="text-4xl font-bold text-yellow-500">6+</p>
                <p className="text-gray-400">Industry Experts</p>
              </div>
              <div className="mb-6">
                <p className="text-4xl font-bold text-yellow-500">92%</p>
                <p className="text-gray-400">Completion Rate</p>
              </div>
            </div>
          </div>
          
          {/*  Image */}   
          <div className="lg:w-1/2 relative">
            <div className="bg-gray-700 rounded-lg p-6 relative z-10 shadow-2xl">
              <div className="flex items-center mb-6">
                <img src={hiteshThumb} alt="Hitesh Choudhary" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="text-lg font-semibold">Hitesh Choudhary</p>
                  <p className="text-yellow-500 text-sm">Lead Instructor</p>
                </div>
                <div className="ml-auto">
                  <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-md">LIVE</span>
                </div>
              </div>
              <div className="bg-gray-800 rounded-md p-4 mb-4">
                <p className="text-sm mb-2">Today's topic:</p>
                <h3 className="text-xl font-semibold">Building Modern APIs with Node.js and Express</h3>
                <div className="mt-4 flex items-center">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gray-600 border-2 border-gray-700 flex items-center justify-center text-xs">
                        {i}
                      </div>
                    ))}
                    <div className="w-8 h-8 rounded-full bg-gray-600 border-2 border-gray-700 flex items-center justify-center text-xs">
                      +24
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 ml-3">28 students attending</p>
                </div>
              </div>
              <div className="bg-gray-800 rounded-md p-4">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-400">Session progress</span>
                  <span className="text-sm text-yellow-500">45 min remaining</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-500 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
              <div className="flex justify-between mt-6">
                <button className="bg-yellow-500 text-black px-4 py-2 rounded-md font-medium">
                  Join Session
                </button>
                <button className="bg-gray-600 text-white px-4 py-2 rounded-md font-medium">
                  See Schedule
                </button>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-[-30px] right-[-30px] w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-[-20px] left-[-20px] w-48 h-48 bg-purple-500/20 rounded-full blur-3xl"></div>
          </div>
        </div>
        
        
        {/* Brands Section */}
        <div className="mt-24">
          <p className="text-center text-gray-400 mb-8">TRUSTED BY DEVELOPERS FROM TOP COMPANIES</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {["Microsoft", "Google", "Amazon", "Meta", "Netflix", "Airbnb"].map((company) => (
              <span key={company} className="text-gray-500 font-semibold text-xl">{company}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


export default Udemy