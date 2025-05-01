import { useState } from 'react'
import chaidocsWhite from '../assets/chaidocs-white.svg'

const FreeResources = () => {
  const [activeTab, setActiveTab] = useState('api')
  
  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-yellow-500">Free</span> Resources
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We believe in open-source and accessible education. Explore our collection of free coding resources, API documentation, and developer tools.
          </p>
        </div>
        
        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md border border-gray-700 p-1">
            <button 
              onClick={() => setActiveTab('api')}
              className={`px-6 py-2 rounded-md transition ${
                activeTab === 'api' 
                  ? 'bg-yellow-500 text-black' 
                  : 'hover:bg-gray-800'
              }`}
            >
              API Hub
            </button>
            <button 
              onClick={() => setActiveTab('open-source')}
              className={`px-6 py-2 rounded-md transition ${
                activeTab === 'open-source' 
                  ? 'bg-yellow-500 text-black' 
                  : 'hover:bg-gray-800'
              }`}
            >
              Open Source
            </button>
            <button 
              onClick={() => setActiveTab('youtube')}
              className={`px-6 py-2 rounded-md transition ${
                activeTab === 'youtube' 
                  ? 'bg-yellow-500 text-black' 
                  : 'hover:bg-gray-800'
              }`}
            >
              YouTube
            </button>
          </div>
        </div>
        
        {/* API Hub Content */}
        {activeTab === 'api' && (
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                <span className="text-yellow-500">ChaiDocs</span> API Hub
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                Access over 500 free APIs for your projects. Perfect for beginners and experienced developers alike to practice integrating third-party services.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-yellow-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Over 500 free API endpoints with documentation</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-yellow-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>No authentication required for basic usage</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-yellow-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Ready-to-use code snippets in multiple languages</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-yellow-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Regular updates and new API additions</span>
                </li>
              </ul>
              
              <a 
                href="https://chaidocs.com" 
                target="_blank"
                rel="noopener noreferrer" 
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-3 rounded-md inline-flex items-center transition"
              >
                Explore API Hub
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-xl shadow-xl">
              <div className="flex items-center mb-6">
                <img src={chaidocsWhite} alt="ChaiDocs Logo" className="h-10 mr-3" />
                <h4 className="text-xl font-bold">ChaiDocs API Hub</h4>
              </div>
              
              <div className="bg-gray-900 p-4 rounded-md font-mono text-sm mb-4 overflow-hidden">
                <div className="flex items-center mb-2">
                  <span className="text-green-500 mr-2">GET</span>
                  <span className="text-gray-400">/api/products</span>
                </div>
                <div className="text-gray-500">// Sample response</div>
                <pre className="text-yellow-500 mt-2 overflow-x-auto pb-2">
{`{
  "products": [
    {
      "id": 1,
      "title": "iPhone 14 Pro",
      "price": 999,
      "category": "smartphones"
    },
    {
      "id": 2,
      "title": "MacBook Air M2",
      "price": 1199,
      "category": "laptops"
    }
  ],
  "total": 100,
  "skip": 0,
  "limit": 2
}`}
                </pre>
              </div>
              
              <div className="text-sm text-gray-400 flex justify-between">
                <span>Updated 2 days ago</span>
                <span>5.2k users this week</span>
              </div>
            </div>
          </div>
        )}
        
        {/* Open Source Content */}
        {activeTab === 'open-source' && (
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                <span className="text-yellow-500">Open Source</span> Projects
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                Explore and contribute to our open source projects. Great for gaining real-world experience and building your portfolio with collaborative coding.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-yellow-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Community-driven development with active maintainers</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-yellow-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Projects ranging from beginner to advanced levels</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-yellow-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Detailed documentation and contribution guides</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-yellow-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Recognition for contributors in our community</span>
                </li>
              </ul>
              
              <a 
                href="https://github.com/chaiaurcode" 
                target="_blank"
                rel="noopener noreferrer" 
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-3 rounded-md inline-flex items-center transition"
              >
                View GitHub
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 p-5 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 bg-purple-500 rounded-md flex items-center justify-center text-2xl font-bold">L</div>
                  <h4 className="ml-3 font-semibold">LeetLab</h4>
                </div>
                <p className="text-sm text-gray-400 mb-3">Interactive collection of coding challenges with automatic grading</p>
                <div className="flex items-center text-xs text-gray-500">
                  <span className="flex items-center mr-3">
                    <span className="h-3 w-3 bg-yellow-500 rounded-full mr-1"></span>
                    JavaScript
                  </span>
                  <span>⭐ 1.2k</span>
                </div>
              </div>
              
              <div className="bg-gray-800 p-5 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 bg-green-500 rounded-md flex items-center justify-center text-2xl font-bold">C</div>
                  <h4 className="ml-3 font-semibold">ChaiUI</h4>
                </div>
                <p className="text-sm text-gray-400 mb-3">Modern React component library with dark mode support</p>
                <div className="flex items-center text-xs text-gray-500">
                  <span className="flex items-center mr-3">
                    <span className="h-3 w-3 bg-blue-500 rounded-full mr-1"></span>
                    TypeScript
                  </span>
                  <span>⭐ 3.4k</span>
                </div>
              </div>
              
              <div className="bg-gray-800 p-5 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 bg-red-500 rounded-md flex items-center justify-center text-2xl font-bold">H</div>
                  <h4 className="ml-3 font-semibold">Hostel</h4>
                </div>
                <p className="text-sm text-gray-400 mb-3">Collaborative virtual coding spaces for team projects</p>
                <div className="flex items-center text-xs text-gray-500">
                  <span className="flex items-center mr-3">
                    <span className="h-3 w-3 bg-green-500 rounded-full mr-1"></span>
                    Node.js
                  </span>
                  <span>⭐ 945</span>
                </div>
              </div>
              
              <div className="bg-gray-800 p-5 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 bg-blue-500 rounded-md flex items-center justify-center text-2xl font-bold">P</div>
                  <h4 className="ml-3 font-semibold">PyChai</h4>
                </div>
                <p className="text-sm text-gray-400 mb-3">Python utilities for data processing and ML workflows</p>
                <div className="flex items-center text-xs text-gray-500">
                  <span className="flex items-center mr-3">
                    <span className="h-3 w-3 bg-purple-500 rounded-full mr-1"></span>
                    Python
                  </span>
                  <span>⭐ 780</span>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* YouTube Content */}
        {activeTab === 'youtube' && (
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                <span className="text-yellow-500">YouTube</span> Channels
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                Our free YouTube channels offer thousands of hours of high-quality coding tutorials, project builds, and technical discussions in Hindi and English.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-yellow-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Over 1,000+ free videos across both channels</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-yellow-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Structured learning paths for beginners to experts</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-yellow-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Project-based tutorials across many technologies</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-yellow-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Active community discussions in comments</span>
                </li>
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://youtube.com/chaiaurcode" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-md inline-flex items-center transition"
                >
                  Chai aur Code
                  <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                </a>
                <a 
                  href="https://youtube.com/hiteshchoudharydotcom" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-md inline-flex items-center transition"
                >
                  Hitesh Choudhary
                  <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-800 rounded-xl overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 bg-gray-900">
                  <div className="flex items-center justify-center h-full">
                    <div className="relative w-16 h-16">
                      <div className="absolute inset-0 bg-red-600 opacity-80 rounded-full"></div>
                      <svg className="absolute inset-0 h-full w-full text-white p-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold mb-1">Complete JavaScript Course for Beginners</h4>
                  <p className="text-sm text-gray-400">8 hours • 1.2M views • 1 month ago</p>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 bg-gray-900">
                  <div className="flex items-center justify-center h-full">
                    <div className="relative w-16 h-16">
                      <div className="absolute inset-0 bg-red-600 opacity-80 rounded-full"></div>
                      <svg className="absolute inset-0 h-full w-full text-white p-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold mb-1">React 18 Complete Course with Projects</h4>
                  <p className="text-sm text-gray-400">12 hours • 980K views • 3 months ago</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default FreeResources