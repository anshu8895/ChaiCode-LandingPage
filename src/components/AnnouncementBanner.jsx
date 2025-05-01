import { useState } from 'react'

const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black py-2">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <span className="font-semibold mr-2">🎉 New:</span>
          <span>GenAI with Python cohort starting May 15th - <a href="#" className="font-bold underline">Register now</a> for early bird discount!</span>
        </div>
        <button 
          onClick={() => setIsVisible(false)}
          className="text-black focus:outline-none"
          aria-label="Close announcement"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default AnnouncementBanner