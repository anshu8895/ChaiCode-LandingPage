import hostelLogo from '../assets/tools/hostel-logo.svg'
import leetlabLogo from '../assets/tools/leetlab-logo.svg'
import masterjiLogo from '../assets/tools/masterji-logo.svg'

const Benefits = () => {
  return (
    <section className="bg-gray-800 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose <span className="text-yellow-500">ChaiCode</span></h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our unique approach to cohort-based learning provides advantages you won't find elsewhere
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Professional Teaching */}
          <div className="flex flex-col items-center p-6 text-center">
            <div className="bg-gray-700 p-5 rounded-full mb-6">
              <img src={masterjiLogo} alt="Professional Teaching" className="h-14 w-14" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Professional Teaching</h3>
            <p className="text-gray-300">
              Learn from experienced instructors who are active industry professionals with years of practical experience
            </p>
          </div>

          {/* Bounties */}
          <div className="flex flex-col items-center p-6 text-center">
            <div className="bg-gray-700 p-5 rounded-full mb-6">
              <svg className="h-14 w-14 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">Bounties</h3>
            <p className="text-gray-300">
              Earn rewards by completing real-world projects and challenges that enhance your portfolio
            </p>
          </div>

          {/* Coding Hostels */}
          <div className="flex flex-col items-center p-6 text-center">
            <div className="bg-gray-700 p-5 rounded-full mb-6">
              <img src={hostelLogo} alt="Coding Hostels" className="h-14 w-14" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Coding Hostels</h3>
            <p className="text-gray-300">
              Virtual environments where you can collaborate with peers, solve problems together, and learn from each other
            </p>
          </div>

          {/* Peer Code Reviews */}
          <div className="flex flex-col items-center p-6 text-center">
            <div className="bg-gray-700 p-5 rounded-full mb-6">
              <svg className="h-14 w-14 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">Peer Code Reviews</h3>
            <p className="text-gray-300">
              Get valuable feedback on your code from peers and mentors, improving your programming practices
            </p>
          </div>

          {/* Leet Lab */}
          <div className="flex flex-col items-center p-6 text-center">
            <div className="bg-gray-700 p-5 rounded-full mb-6">
              <img src={leetlabLogo} alt="Leet Lab" className="h-14 w-14" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Leet Lab</h3>
            <p className="text-gray-300">
              Practice solving algorithmic challenges and prepare for technical interviews with our specialized lab
            </p>
          </div>

          {/* Revision Classes */}
          <div className="flex flex-col items-center p-6 text-center">
            <div className="bg-gray-700 p-5 rounded-full mb-6">
              <svg className="h-14 w-14 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">Revision Classes</h3>
            <p className="text-gray-300">
              Dedicated sessions to reinforce key concepts and ensure you don't miss anything important
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits