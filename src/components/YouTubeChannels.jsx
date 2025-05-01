import { useState } from 'react'
import chaiLogo from '../assets/chai-white.svg'
import chaiDocsLogo from '../assets/chaidocs-white.svg'

const YouTubeChannels = () => {
  const [activeTab, setActiveTab] = useState('chai-aur-code')
  
  const channels = [
    {
      id: 'chai-aur-code',
      name: 'Chai aur Code',
      logo: chaiLogo,
      subscribers: '768K',
      videos: '438',
      description: 'Learn web development, JavaScript, React, Node.js and more with practical projects and real-world applications.',
      featured: [
        {
          id: 1,
          title: 'Complete React Course in Hindi',
          views: '1.2M',
          duration: '12:42:18',
          thumbnail: 'https://picsum.photos/seed/react/400/225',
        },
        {
          id: 2,
          title: 'JavaScript Interview Questions - FAANG Edition',
          views: '856K',
          duration: '1:34:56',
          thumbnail: 'https://picsum.photos/seed/js/400/225',
        },
        {
          id: 3,
          title: 'Build a Full Stack App with Next.js and MongoDB',
          views: '624K',
          duration: '2:12:34',
          thumbnail: 'https://picsum.photos/seed/next/400/225',
        }
      ]
    },
    {
      id: 'chai-docs',
      name: 'ChaiDocs',
      logo: chaiDocsLogo,
      subscribers: '214K',
      videos: '156',
      description: 'Deep dive into technical documentation, computer science concepts, and advanced programming tutorials.',
      featured: [
        {
          id: 1,
          title: 'Understanding System Design - Complete Course',
          views: '587K',
          duration: '10:15:42',
          thumbnail: 'https://picsum.photos/seed/system/400/225',
        },
        {
          id: 2,
          title: 'DevOps Masterclass - Docker, Kubernetes, CI/CD',
          views: '412K',
          duration: '4:42:18',
          thumbnail: 'https://picsum.photos/seed/devops/400/225',
        },
        {
          id: 3,
          title: 'Data Structures & Algorithms in Python',
          views: '328K',
          duration: '8:34:56',
          thumbnail: 'https://picsum.photos/seed/dsa/400/225',
        }
      ]
    }
  ]
  
  const activeChannel = channels.find(channel => channel.id === activeTab)
  
  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Free Learning Resources</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Access our library of free tutorials, courses, and documentation through our YouTube channels with over 980K subscribers.
          </p>
        </div>
        
        {/* Channel Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-800 rounded-lg p-1">
            {channels.map(channel => (
              <button
                key={channel.id}
                onClick={() => setActiveTab(channel.id)}
                className={`px-6 py-3 rounded-md font-medium transition ${
                  activeTab === channel.id
                    ? "bg-yellow-500 text-black"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {channel.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Channel Info */}
        <div className="flex flex-col lg:flex-row items-start gap-12 mb-16">
          <div className="lg:w-1/3">
            <div className="flex items-center mb-6">
              <img src={activeChannel.logo} alt={activeChannel.name} className="w-16 h-16 mr-4" />
              <div>
                <h3 className="text-2xl font-bold">{activeChannel.name}</h3>
                <div className="flex items-center mt-2">
                  <span className="text-red-500 mr-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-400 text-sm mr-4">{activeChannel.subscribers} subscribers</span>
                  <span className="text-gray-400 text-sm">{activeChannel.videos} videos</span>
                </div>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              {activeChannel.description}
            </p>
            <a 
              href="#" 
              className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-md inline-flex items-center transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
              Visit Channel
            </a>
          </div>
          
          {/* Featured Videos */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeChannel.featured.map(video => (
              <div key={video.id} className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="relative">
                  <img src={video.thumbnail} alt={video.title} className="w-full aspect-video object-cover" />
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 px-2 py-1 rounded text-xs">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-medium text-lg mb-2 line-clamp-2">{video.title}</h4>
                  <p className="text-gray-400 text-sm">{video.views} views</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-400 mb-6">
            Want more comprehensive learning? Join our structured cohorts.
          </p>
          <a 
            href="#" 
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-8 py-3 rounded-md inline-block transition"
          >
            Browse All Cohorts
          </a>
        </div>
      </div>
    </section>
  )
}

export default YouTubeChannels