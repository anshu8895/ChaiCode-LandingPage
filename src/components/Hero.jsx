import hiteshThumb from '../assets/hitesh-thumb.svg'
import chaiCodeLogo from '../assets/chaicode-white.svg'

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <div className="inline-block mb-3 px-4 py-1 bg-gray-800 rounded-full border border-gray-700">
            <p className="text-gray-300 text-sm">Trusted by 1.5M Code Learners</p>
          </div>
        </div>
        
        {/* Main Hero Content */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
            Consistency and Community
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 mb-10">
            An unmatched Learning Experience for coding courses.
          </p>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-400 mb-10">
              Content is every where, we provide a learning experience that is unmatched. Bounties, peer learning, 
              peer code reviews, Virtual hostel, Alumni Network, Doubt sessions, Group projects and so many other activities to keep you on track.
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="flex justify-center mb-16">
            <a href="#" className="relative inline-flex items-center bg-yellow-500 border border-gray-700 hover:bg-yellow-400 text-black px-6 py-3 rounded-full text-lg font-medium transition group">
              <span>Check all Live Cohorts</span>
              <span className="flex h-3 w-3 ml-3">
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
              </span>
            </a>
          </div>
        </div>
        
        {/* Video Embed */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700" style={{ aspectRatio: '15/7' }}>
            <div className="flex items-center justify-center h-full">
              <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" fillRule="evenodd"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero