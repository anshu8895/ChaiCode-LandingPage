import { useState, useEffect, useRef } from 'react';

const TopicsCloud = () => {
  // List of programming topics with size, color, and category information
  const topics = [
    { name: 'JavaScript', size: 'text-2xl', color: 'text-yellow-500', category: 'frontend' },
    { name: 'Python', size: 'text-3xl', color: 'text-blue-500', category: 'backend' },
    { name: 'React', size: 'text-4xl', color: 'text-blue-400', category: 'frontend' },
    { name: 'Node.js', size: 'text-2xl', color: 'text-green-500', category: 'backend' },
    { name: 'TypeScript', size: 'text-3xl', color: 'text-blue-600', category: 'frontend' },
    { name: 'MongoDB', size: 'text-xl', color: 'text-green-600', category: 'database' },
    { name: 'Express', size: 'text-2xl', color: 'text-gray-600', category: 'backend' },
    { name: 'HTML', size: 'text-3xl', color: 'text-orange-600', category: 'frontend' },
    { name: 'CSS', size: 'text-2xl', color: 'text-blue-500', category: 'frontend' },
    { name: 'SQL', size: 'text-xl', color: 'text-purple-500', category: 'database' },
    { name: 'Git', size: 'text-2xl', color: 'text-orange-500', category: 'devops' },
    { name: 'AWS', size: 'text-3xl', color: 'text-yellow-600', category: 'devops' },
    { name: 'Docker', size: 'text-2xl', color: 'text-blue-500', category: 'devops' },
    { name: 'Redux', size: 'text-xl', color: 'text-purple-600', category: 'frontend' },
    { name: 'Next.js', size: 'text-3xl', color: 'text-black', category: 'frontend' },
    { name: 'TailwindCSS', size: 'text-2xl', color: 'text-teal-500', category: 'frontend' },
    { name: 'GraphQL', size: 'text-xl', color: 'text-pink-500', category: 'backend' },
    { name: 'Django', size: 'text-xl', color: 'text-green-700', category: 'backend' },
    { name: 'Flutter', size: 'text-2xl', color: 'text-blue-400', category: 'mobile' },
    { name: 'Firebase', size: 'text-xl', color: 'text-yellow-500', category: 'backend' },
    { name: 'Vue.js', size: 'text-2xl', color: 'text-green-500', category: 'frontend' },
    { name: 'Angular', size: 'text-xl', color: 'text-red-500', category: 'frontend' },
    { name: 'Svelte', size: 'text-xl', color: 'text-orange-600', category: 'frontend' },
    { name: 'Java', size: 'text-2xl', color: 'text-red-600', category: 'backend' },
    { name: 'C++', size: 'text-xl', color: 'text-blue-700', category: 'language' },
    { name: 'Rust', size: 'text-xl', color: 'text-orange-700', category: 'language' },
    { name: 'Go', size: 'text-xl', color: 'text-blue-500', category: 'backend' },
    { name: 'Swift', size: 'text-xl', color: 'text-orange-500', category: 'mobile' },
    { name: 'Kotlin', size: 'text-xl', color: 'text-purple-500', category: 'mobile' },
    { name: 'Data Science', size: 'text-3xl', color: 'text-indigo-500', category: 'data' },
    { name: 'Machine Learning', size: 'text-2xl', color: 'text-green-600', category: 'data' },
    { name: 'DevOps', size: 'text-2xl', color: 'text-blue-600', category: 'devops' },
    { name: 'Blockchain', size: 'text-xl', color: 'text-yellow-600', category: 'emerging' },
    { name: 'UI/UX', size: 'text-2xl', color: 'text-pink-500', category: 'design' },
    { name: 'Figma', size: 'text-xl', color: 'text-purple-400', category: 'design' },
    { name: 'Web3', size: 'text-xl', color: 'text-indigo-600', category: 'emerging' },
  ];

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Topics' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'database', name: 'Databases' },
    { id: 'devops', name: 'DevOps' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'data', name: 'Data Science' },
    { id: 'design', name: 'Design' },
    { id: 'emerging', name: 'Emerging Tech' },
    { id: 'language', name: 'Languages' }
  ];

  // State for randomized positions and filtering
  const [randomizedTopics, setRandomizedTopics] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredTopic, setHoveredTopic] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationPhase, setAnimationPhase] = useState('idle'); // 'exit', 'enter', 'idle'
  const cloudRef = useRef(null);
  const prevCategoryRef = useRef('all');

  // Calculate random positions for topics once on mount with staggered entrance
  useEffect(() => {
    const shuffled = [...topics].sort(() => 0.5 - Math.random());
    
    // Set initial state to animate in
    setAnimationPhase('enter');
    setRandomizedTopics(shuffled);
    
    // Reset animation phase after initial animation
    const timer = setTimeout(() => {
      setAnimationPhase('idle');
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  // Handle category change with improved animation sequence
  const handleCategoryChange = (categoryId) => {
    if (categoryId === selectedCategory) return;
    
    prevCategoryRef.current = selectedCategory;
    setAnimationPhase('exit');
    setIsAnimating(true);
    
    // Schedule the category change after exit animation
    setTimeout(() => {
      setSelectedCategory(categoryId);
      setAnimationPhase('enter');
      
      // Reset animation states after entrance completes
      setTimeout(() => {
        setIsAnimating(false);
        setAnimationPhase('idle');
      }, 500);
    }, 400);
  };

  // Filter topics based on selected category
  const displayedTopics = selectedCategory === 'all' 
    ? randomizedTopics 
    : randomizedTopics.filter(topic => topic.category === selectedCategory);

  // Function to handle mouse movement for interactive effect with improved smoothing
  const handleMouseMove = (e) => {
    if (!cloudRef.current) return;
    
    const { left, top, width, height } = cloudRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    // Calculate distance from center (normalized)
    const distX = (mouseX - centerX) / (width / 2);
    const distY = (mouseY - centerY) / (height / 2);
    
    // Apply smoother tilt effect with easing
    if (cloudRef.current) {
      // Using CSS transform with transition for smoother movement
      cloudRef.current.style.transition = 'transform 0.1s cubic-bezier(0.25, 0.1, 0.25, 1)';
      cloudRef.current.style.transform = `perspective(1000px) rotateY(${distX * 5}deg) rotateX(${-distY * 5}deg)`;
    }
  };

  // Reset tilt when mouse leaves
  const handleMouseLeave = () => {
    if (cloudRef.current) {
      cloudRef.current.style.transition = 'transform 0.5s ease-out';
      cloudRef.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
    }
  };
  
  return (
    <section className="py-16 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1 bg-yellow-500 text-black rounded-full text-sm font-medium mb-4 animate-pulse-slow">TECHNOLOGIES</span>
          <h2 className="text-4xl font-bold mb-4">Explore Our <span className="text-yellow-500">Technology</span> Universe</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From fundamental web technologies to advanced frameworks, our courses cover the entire development ecosystem.
          </p>
        </div>

        {/* Category filters with enhanced transitions */}
        <div className="flex flex-wrap justify-center mb-8 gap-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ease-in-out transform ${
                selectedCategory === category.id
                  ? 'bg-yellow-500 text-black font-medium scale-105 shadow-lg'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:scale-105'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div 
          className="flex justify-center" 
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div 
            ref={cloudRef}
            className={`relative max-w-4xl w-full h-[450px] rounded-xl bg-gray-800/80 p-8 overflow-hidden 
              transition-all duration-500 ease-in-out border-4 border-yellow-500/80 shadow-[0_0_15px_1px_rgba(234,179,8,0.8)] ${
                isAnimating ? 'animate-shimmer' : ''
              }`}
          >
            {/* Cloud background pattern with subtle animation */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-80">
              <svg className="w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="cloud-pattern" patternUnits="userSpaceOnUse" width="100" height="100">
                    <path d="M30,50 Q40,30 50,50 T70,50" fill="none" stroke="rgba(234, 179, 8, 0.2)" strokeWidth="2" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cloud-pattern)" />
              </svg>
            </div>

            {/* Topic tags with enhanced animations */}
            <div className={`flex flex-wrap justify-center items-center h-full relative z-10 gap-4 transition-all duration-500 ${
              animationPhase === 'exit' ? 'opacity-0 scale-95' : 
              animationPhase === 'enter' ? 'opacity-100 scale-100' : 
              'opacity-100 scale-100'
            }`}>
              {displayedTopics.map((topic, index) => (
                <div 
                  key={`${topic.name}-${index}`} 
                  className={`${topic.size} ${topic.color} transform transition-all duration-300 font-medium px-4 py-2 rounded-full 
                    ${hoveredTopic === topic.name 
                      ? 'bg-gray-700/90 scale-110 shadow-lg ring-1 ring-yellow-500/30' 
                      : 'bg-gray-800/70 hover:scale-105 hover:shadow-md hover:bg-gray-700/80'} 
                    border border-gray-700 cursor-pointer animate-float`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animationDuration: `${Math.random() * 5 + 10}s`,
                    opacity: 0,
                    transform: 'translateY(20px)',
                    animation: `fadeInUp 0.5s ease-out forwards ${index * 0.05}s, 
                               float ${Math.random() * 5 + 10}s ease-in-out infinite ${index * 0.1}s`
                  }}
                  onMouseEnter={() => setHoveredTopic(topic.name)}
                  onMouseLeave={() => setHoveredTopic(null)}
                >
                  {topic.name}
                </div>
              ))}
            </div>
            
            {/* Subtle gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopicsCloud;