const TweetLove = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Tweet <span className="text-yellow-500">Love</span></h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          See what our community is saying about ChaiCode on Twitter
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Tweet 1 */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-2 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(96,165,250,0.4)] transition-all duration-300 ease-in-out">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-blue-500 rounded-full overflow-hidden mr-4">
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600"></div>
            </div>
            <div>
              <h4 className="font-bold">Rajesh Kumar</h4>
              <div className="flex items-center text-gray-400 text-sm">
                <span>@rajesh_codes</span>
                <svg className="h-4 w-4 text-blue-400 ml-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.721 13.255-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </div>
            </div>
          </div>
          <p className="mb-4">Just completed the first week of the GenAI with Python cohort at @ChaiCode and I'm blown away by the teaching quality. The coding hostels concept is genius - solving problems with peers late at night is where the real learning happens! 🚀 #ChaiCode #GenAI</p>
          <div className="flex items-center justify-between text-gray-400 text-sm">
            <span>April 2, 2025</span>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <svg className="h-4 w-4 mr-1 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                </svg>
                <span>42</span>
              </div>
              <div className="flex items-center">
                <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M15 15l-2 5L9 9l11-4-5 2-7 7 5-2 7-7-5 2z"></path>
                </svg>
                <span>12</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tweet 2 */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-2 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(96,165,250,0.4)] transition-all duration-300 ease-in-out">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-purple-500 rounded-full overflow-hidden mr-4">
              <div className="w-full h-full bg-gradient-to-br from-purple-400 to-purple-600"></div>
            </div>
            <div>
              <h4 className="font-bold">Priya Sharma</h4>
              <div className="flex items-center text-gray-400 text-sm">
                <span>@priya_dev</span>
                <svg className="h-4 w-4 text-blue-400 ml-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                </svg>
              </div>
            </div>
          </div>
          <p className="mb-4">After trying multiple online platforms, @ChaiCode's Web Dev cohort is on another level. The peer code reviews have improved my coding standards dramatically. The Leet Lab practice helped me crack a FAANG interview! Forever grateful 🙏 #WebDev #ChaiCode</p>
          <div className="flex items-center justify-between text-gray-400 text-sm">
            <span>April 18, 2025</span>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <svg className="h-4 w-4 mr-1 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                </svg>
                <span>128</span>
              </div>
              <div className="flex items-center">
                <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M15 15l-2 5L9 9l11-4-5 2-7 7 5-2 7-7-5 2z"></path>
                </svg>
                <span>37</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tweet 3 */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-2 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(96,165,250,0.4)] transition-all duration-300 ease-in-out">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-green-500 rounded-full overflow-hidden mr-4">
              <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600"></div>
            </div>
            <div>
              <h4 className="font-bold">Ankit Patel</h4>
              <div className="flex items-center text-gray-400 text-sm">
                <span>@ankit_tech</span>
                <svg className="h-4 w-4 text-blue-400 ml-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                </svg>
              </div>
            </div>
          </div>
          <p className="mb-4">The DevOps cohort at @ChaiCode is worth every penny! Got hands-on experience with CI/CD pipelines, Kubernetes, and infrastructure as code. The bounty system kept me motivated - earned my first MacBook through a project challenge! 🔥 #DevOps #ChaiCode</p>
          <div className="flex items-center justify-between text-gray-400 text-sm">
            <span>April 25, 2025</span>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <svg className="h-4 w-4 mr-1 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                </svg>
                <span>78</span>
              </div>
              <div className="flex items-center">
                <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M15 15l-2 5L9 9l11-4-5 2-7 7 5-2 7-7-5 2z"></path>
                </svg>
                <span>22</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tweet 4 */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-2 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(96,165,250,0.4)] transition-all duration-300 ease-in-out">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-orange-500 rounded-full overflow-hidden mr-4">
              <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-600"></div>
            </div>
            <div>
              <h4 className="font-bold">Meera Joshi</h4>
              <div className="flex items-center text-gray-400 text-sm">
                <span>@meera_codes</span>
                <svg className="h-4 w-4 text-blue-400 ml-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                </svg>
              </div>
            </div>
          </div>
          <p className="mb-4">The Data Science cohort @ChaiCode transformed my career! From knowing basic Python to implementing ML models in production within 3 months. The mentorship and placement support was phenomenal. Now working at my dream company! 📊 #DataScience #ChaiCode</p>
          <div className="flex items-center justify-between text-gray-400 text-sm">
            <span>April 15, 2025</span>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <svg className="h-4 w-4 mr-1 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                </svg>
                <span>85</span>
              </div>
              <div className="flex items-center">
                <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M15 15l-2 5L9 9l11-4-5 2-7 7 5-2 7-7-5 2z"></path>
                </svg>
                <span>23</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tweet 5 */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-2 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(96,165,250,0.4)] transition-all duration-300 ease-in-out">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-pink-500 rounded-full overflow-hidden mr-4">
              <div className="w-full h-full bg-gradient-to-br from-pink-400 to-pink-600"></div>
            </div>
            <div>
              <h4 className="font-bold">Vikram Singh</h4>
              <div className="flex items-center text-gray-400 text-sm">
                <span>@vikram_dev</span>
                <svg className="h-4 w-4 text-blue-400 ml-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                </svg>
              </div>
            </div>
          </div>
          <p className="mb-4">The @ChaiCode Masterji AI tool is INSANE! It's like having a personal coding mentor 24/7. My debugging skills have improved 10x and I'm building projects I never thought I could. Best investment for any developer! 💯 #ChaiCode #AI</p>
          <div className="flex items-center justify-between text-gray-400 text-sm">
            <span>April 8, 2025</span>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <svg className="h-4 w-4 mr-1 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                </svg>
                <span>107</span>
              </div>
              <div className="flex items-center">
                <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M15 15l-2 5L9 9l11-4-5 2-7 7 5-2 7-7-5 2z"></path>
                </svg>
                <span>41</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tweet 6 */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-2 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(96,165,250,0.4)] transition-all duration-300 ease-in-out">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-indigo-500 rounded-full overflow-hidden mr-4">
              <div className="w-full h-full bg-gradient-to-br from-indigo-400 to-indigo-600"></div>
            </div>
            <div>
              <h4 className="font-bold">Sanya Kapoor</h4>
              <div className="flex items-center text-gray-400 text-sm">
                <span>@sanya_builds</span>
                <svg className="h-4 w-4 text-blue-400 ml-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                </svg>
              </div>
            </div>
          </div>
          <p className="mb-4">Started @ChaiCode's free YouTube courses and was so impressed I joined the full cohort. The community is incredible - made lifelong friends and future co-founders! The Chai Hostel hackathons are unforgettable! 🚀 #ChaiFam #ChaiCode</p>
          <div className="flex items-center justify-between text-gray-400 text-sm">
            <span>April 22, 2025</span>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <svg className="h-4 w-4 mr-1 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                </svg>
                <span>93</span>
              </div>
              <div className="flex items-center">
                <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M15 15l-2 5L9 9l11-4-5 2-7 7 5-2 7-7-5 2z"></path>
                </svg>
                <span>28</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-10">
        <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-500 transition">
          <span className="font-medium">Follow us on Twitter for more updates</span>
          <svg className="h-5 w-5 ml-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
          </svg>
        </a>
      </div>
    </section>
  )
}

export default TweetLove