import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online store with shopping cart, user authentication, and payment integration. Built with modern web technologies for a seamless shopping experience.",
      image: "https://placehold.co/600x400/3b82f6/ffffff?text=E-Commerce+Platform",
      technologies: ["Next.js", "React", "Tailwind CSS", "Stripe"],
      status: "Completed"
    },
    {
      title: "Task Management App",
      description: "A productivity application that helps teams organize and track their work. Features include drag-and-drop functionality, real-time updates, and team collaboration tools.",
      image: "https://placehold.co/600x400/10b981/ffffff?text=Task+Manager",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      status: "In Progress"
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather application that displays current conditions and forecasts. Includes location-based services and interactive maps for weather visualization.",
      image: "https://placehold.co/600x400/8b5cf6/ffffff?text=Weather+App",
      technologies: ["JavaScript", "API Integration", "CSS3", "Chart.js"],
      status: "Completed"
    }
  ]

  return (
    <div className="min-h-screen p-8 py-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center text-gray-900">
          My Projects
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Here are some of the projects I've been working on
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 w-full">
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    project.status === "Completed" 
                      ? "bg-green-500 text-white" 
                      : "bg-yellow-500 text-white"
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    View Project
                  </button>
                  <button className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
                    Source Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Interested in Working Together?</h2>
          <p className="text-xl mb-6 opacity-90">
            I'm always open to discussing new projects and opportunities.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  )
}
