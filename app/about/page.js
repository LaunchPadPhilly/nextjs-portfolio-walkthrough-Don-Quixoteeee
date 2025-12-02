import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen p-8 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-12 text-center text-gray-900">
          About Me
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
          <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
            {/* Profile photo */}
            <div className="flex-shrink-0">
              <Image 
                src="https://ui-avatars.com/api/?name=Your+Name&size=300&background=3b82f6&color=fff&bold=true"
                alt="Profile photo"
                width={300}
                height={300}
                className="rounded-full border-4 border-blue-500 shadow-lg"
              />
            </div>
            
            {/* Bio */}
            <div className="flex-grow">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Hello! I'm Your Name</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                I'm a passionate developer who loves building beautiful and functional web applications. 
                I enjoy turning complex problems into simple, elegant solutions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Currently, I'm focused on mastering modern web technologies and creating projects 
                that make a difference. I believe in continuous learning and staying up-to-date 
                with the latest industry trends.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">My Skills</h2>
          <div className="flex flex-wrap gap-3">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
              HTML & CSS
            </span>
            <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold">
              JavaScript
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
              React
            </span>
            <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-semibold">
              Next.js
            </span>
            <span className="bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full font-semibold">
              Tailwind CSS
            </span>
            <span className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full font-semibold">
              Git & GitHub
            </span>
            <span className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full font-semibold">
              Node.js
            </span>
            <span className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full font-semibold">
              Responsive Design
            </span>
          </div>
        </div>

        {/* Goals/Interests Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">What I'm Learning</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Current Focus</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Advanced React patterns and hooks</li>
                <li>• Full-stack development with Next.js</li>
                <li>• Database design and optimization</li>
                <li>• API development and integration</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Future Goals</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Build scalable web applications</li>
                <li>• Contribute to open-source projects</li>
                <li>• Master cloud deployment and DevOps</li>
                <li>• Create impactful digital experiences</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
