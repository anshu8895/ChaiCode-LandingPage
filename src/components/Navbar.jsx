import { useState } from 'react'
import chaiCodeLogo from '../assets/chaicode-white.svg'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    <nav className="bg-gray-900 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#">
              <img src={chaiCodeLogo} alt="ChaiCode" className="h-8" />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center">
            <div className="flex space-x-6">
              <a href="#" className="text-white hover:text-yellow-500 px-2 py-1 rounded-md font-medium transition">Home</a>
              <a href="#" className="text-gray-300 hover:text-yellow-500 px-2 py-1 rounded-md font-medium transition">Cohorts</a>
              <a href="#" className="text-gray-300 hover:text-yellow-500 px-2 py-1 rounded-md font-medium transition">Udemy</a>
              <a href="#" className="text-gray-300 hover:text-yellow-500 px-2 py-1 rounded-md font-medium transition">Docs</a>
              <a href="#" className="text-gray-300 hover:text-yellow-500 px-2 py-1 rounded-md font-medium transition">Reviews</a>
              <a href="#" className="text-gray-300 hover:text-yellow-500 px-2 py-1 rounded-md font-medium transition">About</a>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center ml-6 space-x-4">
            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium transition">Login</a>
            <a href="#" className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-md font-medium transition">Join Cohort</a>
          </div>
          
          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                /* Icon when menu is open */
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800">
            <a href="#" className="text-white block px-3 py-2 rounded-md font-medium">Home</a>
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md font-medium">Cohorts</a>
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md font-medium">Pricing</a>
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md font-medium">Tools</a>
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md font-medium">Resources</a>
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md font-medium">About</a>
          </div>
          <div className="border-t border-gray-700 pt-4 pb-3">
            <div className="flex items-center justify-between px-5">
              <a href="#" className="text-gray-300 hover:text-white font-medium">Login</a>
              <a href="#" className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-md font-medium">Join Cohort</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar