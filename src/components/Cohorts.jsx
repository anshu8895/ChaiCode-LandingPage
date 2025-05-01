import webdevCohort from '../assets/cohorts/webdev-cohort.svg'
import dsCohort from '../assets/cohorts/ds-cohort.svg'
import devopsCohort from '../assets/cohorts/devops-cohort.svg'
import genaiCohort from '../assets/cohorts/genai-cohort.svg'

const Cohorts = () => {
  const cohorts = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      description: 'Master frontend and backend technologies to build complete web applications from scratch.',
      image: webdevCohort,
      startDate: 'June 5, 2025',
      duration: '16 weeks',
      level: 'Beginner to Intermediate',
      featured: true,
      tag: 'Most Popular'
    },
    {
      id: 2,
      title: 'Data Science & Analytics',
      description: 'Learn data analysis, visualization, machine learning and statistical modeling to extract insights.',
      image: dsCohort,
      startDate: 'July 12, 2025',
      duration: '14 weeks',
      level: 'Intermediate',
      featured: false
    },
    {
      id: 3,
      title: 'DevOps Engineering',
      description: 'Master CI/CD pipelines, containerization, cloud infrastructure and automation tools.',
      image: devopsCohort,
      startDate: 'May 20, 2025',
      duration: '12 weeks',
      level: 'Intermediate to Advanced',
      featured: false
    },
    {
      id: 4,
      title: 'GenAI with Python',
      description: 'Build and deploy cutting-edge generative AI models with practical applications.',
      image: genaiCohort,
      startDate: 'May 15, 2025',
      duration: '10 weeks',
      level: 'Intermediate',
      featured: true,
      tag: 'New'
    }
  ]

  return (
    <section id="cohorts" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Learning <span className="text-yellow-500">Cohorts</span></h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join our structured learning programs with expert mentors, peer collaboration, and real-world projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {cohorts.map((cohort) => (
            <div 
              key={cohort.id} 
              className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition hover:transform hover:-translate-y-2"
            >
              <div className="relative">
                <img src={cohort.image} alt={cohort.title} className="w-full h-48 object-cover" />
                {cohort.featured && (
                  <span className="absolute top-4 right-4 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">
                    {cohort.tag}
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{cohort.title}</h3>
                <p className="text-gray-400 mb-4">{cohort.description}</p>
                <div className="border-t border-gray-700 pt-4 mt-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Start Date:</span>
                    <span className="text-white font-medium">{cohort.startDate}</span>
                  </div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Duration:</span>
                    <span className="text-white font-medium">{cohort.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm mb-4">
                    <span className="text-gray-400">Level:</span>
                    <span className="text-white font-medium">{cohort.level}</span>
                  </div>
                  <a 
                    href="#" 
                    className="block text-center bg-gray-700 hover:bg-yellow-500 hover:text-black text-white font-medium py-2 rounded transition"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-block bg-transparent border border-yellow-500 hover:bg-yellow-500 hover:text-black text-yellow-500 font-bold px-8 py-3 rounded-md transition"
          >
            View All Cohorts
          </a>
        </div>
      </div>
    </section>
  )
}

export default Cohorts