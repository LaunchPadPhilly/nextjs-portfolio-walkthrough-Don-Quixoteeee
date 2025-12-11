import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online store with shopping cart, user authentication, and payment integration. Built with modern web technologies for a seamless shopping experience.",
      image: "https://placehold.co/600x400/fbcfe8/9f1239?text=E-Commerce+Platform",
      technologies: ["Next.js", "React", "Tailwind CSS", "Stripe"],
      status: "Completed"
    },
    {
      title: "Task Management App",
      description: "A productivity application that helps teams organize and track their work. Features include drag-and-drop functionality, real-time updates, and team collaboration tools.",
      image: "https://placehold.co/600x400/e9d5ff/6b21a8?text=Task+Manager",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      status: "In Progress"
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather application that displays current conditions and forecasts. Includes location-based services and interactive maps for weather visualization.",
      image: "https://placehold.co/600x400/fce7f3/9f1239?text=Weather+App",
      technologies: ["JavaScript", "API Integration", "CSS3", "Chart.js"],
      status: "Completed"
    }
  ]

  return (
    <div className="projects-page max-w-6xl mx-auto px-6 py-16">
      <div className="projects-title text-center mb-6">
        <h1 className="text-3xl font-bold">My Projects</h1>
        <p className="text-gray-300">Showcase of my work and expertise</p>
      </div>

      <div className="projects-divider mb-8" />

      <div className="projects-wrapper grid gap-8 md:grid-cols-3">
        {projects.map((p) => (
          <article key={p.title} className="project-card bg-gray-900 rounded-lg overflow-hidden shadow-lg flex flex-col">
            <div className="project-media relative w-full h-48 md:h-40">
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
              {p.status === 'Completed' && (
                <span className="absolute top-3 left-3 bg-purple-600 text-white text-xs px-2 py-1 rounded">{p.status}</span>
              )}
            </div>
            <div className="project-body p-4 flex-1 flex flex-col">
              <h3 className="project-title text-xl font-semibold mb-2">{p.title}</h3>
              <p className="project-desc text-gray-300 mb-4 flex-1">{p.description}</p>
              <div className="project-tags mt-2 flex flex-wrap gap-2">
                {p.technologies.map(tech => (
                  <span key={tech} className="tech-badge text-sm bg-purple-800/30 text-gray-100 px-2 py-1 rounded">{tech}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="project-ideas mt-10 max-w-3xl mx-auto text-gray-300">
        <h3 className="text-lg font-semibold">💡 Project Ideas:</h3>
        <ul className="list-disc list-inside mt-2">
          <li>Past school projects</li>
          <li>Personal coding projects</li>
          <li>Design work or creative projects</li>
          <li>Future projects you want to build (coming soon!)</li>
        </ul>
      </div>
    </div>
  )
}
