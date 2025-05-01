const DiscordBanner = () => {
  return (
    <section className="bg-indigo-900 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Discord Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6">
              Join Our <span className="text-yellow-400">Discord</span> Community
            </h2>
            <p className="text-xl text-gray-200 mb-6">
              Connect with over <span className="font-bold text-white">80,000 active coders</span> in our friendly, supportive Discord community. Get help with coding problems, collaborate on projects, and make friends along the way.
            </p>
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4 text-yellow-400">Community Benefits:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-yellow-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Dedicated help channels for different technologies</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-yellow-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Weekly coding challenges and hackathons</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-yellow-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Direct access to mentors and industry experts</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-yellow-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Job opportunities and career networking</span>
                </li>
              </ul>
            </div>
            <a 
              href="https://discord.gg/chaiaurcode" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg font-medium transition duration-300 transform hover:scale-105"
            >
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.38-.444.8-.608 1.16a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.16.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z" />
              </svg>
              Join Discord
            </a>
          </div>
          
          {/* Discord Mockup/Illustration */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Discord application mockup */}
              <div className="bg-[#36393f] rounded-lg shadow-xl overflow-hidden">
                {/* Discord header */}
                <div className="bg-[#2f3136] p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-8 w-8 bg-yellow-400 rounded-full flex items-center justify-center text-[#36393f] font-bold text-lg">
                      C
                    </div>
                    <span className="ml-3 font-medium">ChaiAurCode</span>
                  </div>
                  <div className="flex space-x-3">
                    <div className="w-6 h-6 bg-[#40444b] rounded-full"></div>
                    <div className="w-6 h-6 bg-[#40444b] rounded-full"></div>
                  </div>
                </div>
                
                {/* Discord channels sidebar */}
                <div className="flex">
                  <div className="bg-[#2f3136] w-1/3 p-3 space-y-2">
                    <div className="text-gray-400 text-xs uppercase font-semibold">Channels</div>
                    <div className="text-gray-300 bg-[#42464d] px-2 py-1 rounded flex items-center">
                      <span className="text-gray-400 mr-1">#</span> general
                    </div>
                    <div className="text-gray-400 px-2 py-1 rounded flex items-center">
                      <span className="mr-1">#</span> help
                    </div>
                    <div className="text-gray-400 px-2 py-1 rounded flex items-center">
                      <span className="mr-1">#</span> projects
                    </div>
                    <div className="text-gray-400 px-2 py-1 rounded flex items-center">
                      <span className="mr-1">#</span> resources
                    </div>
                    <div className="text-gray-400 px-2 py-1 rounded flex items-center">
                      <span className="mr-1">#</span> jobs
                    </div>
                  </div>
                  
                  {/* Discord chat area */}
                  <div className="w-2/3 p-3 space-y-4">
                    {/* Messages */}
                    <div className="flex items-start space-x-2">
                      <div className="w-8 h-8 rounded-full bg-blue-500 flex-shrink-0"></div>
                      <div>
                        <div className="flex items-center">
                          <span className="font-medium text-blue-400">coder123</span>
                          <span className="text-xs text-gray-500 ml-2">Today at 3:45 PM</span>
                        </div>
                        <div className="text-sm">Hey everyone! Has anyone worked with Next.js?</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <div className="w-8 h-8 rounded-full bg-green-500 flex-shrink-0"></div>
                      <div>
                        <div className="flex items-center">
                          <span className="font-medium text-green-400">webdev_pro</span>
                          <span className="text-xs text-gray-500 ml-2">Today at 3:47 PM</span>
                        </div>
                        <div className="text-sm">Yes! I've built several projects with it. Need help?</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <div className="w-8 h-8 rounded-full bg-yellow-500 flex-shrink-0"></div>
                      <div>
                        <div className="flex items-center">
                          <span className="font-medium text-yellow-400">hitesh_mentor</span>
                          <span className="text-xs text-gray-500 ml-2">Today at 3:48 PM</span>
                        </div>
                        <div className="text-sm">We'll be covering Next.js in detail in tomorrow's live session!</div>
                      </div>
                    </div>
                    
                    {/* Chat input */}
                    <div className="bg-[#40444b] rounded-md p-2 flex items-center mt-auto">
                      <div className="w-6 h-6 bg-[#2f3136] rounded-full mr-2"></div>
                      <div className="text-gray-400 text-sm">Message #general</div>
                    </div>
                  </div>
                </div>
                
                {/* Discord status bar */}
                <div className="bg-[#292b2f] p-2 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-purple-500 rounded-full relative">
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#292b2f]"></div>
                    </div>
                    <span className="text-sm font-medium">You</span>
                  </div>
                  <div className="text-xs text-gray-400">
                    <span className="font-bold text-green-400">80,000+</span> members online
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-indigo-600 rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-indigo-600 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscordBanner;