import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl text-center">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 text-gray-900">
          Hi, I'm <span className="text-blue-600">Your Name</span>!
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
          Welcome to my portfolio! I'm a passionate developer building amazing web experiences 
          with modern technologies. Explore my work and get to know me better.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link 
            href="/about" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Learn About Me
          </Link>
          <Link 
            href="/projects" 
            className="bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors shadow-lg hover:shadow-xl"
          >
            View My Projects
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">👤</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">About Me</h3>
            <p className="text-gray-600">
              Discover my background, skills, and what drives me as a developer.
            </p>
            <Link href="/about" className="text-blue-600 hover:underline mt-4 inline-block">
              Learn more →
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">💼</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Projects</h3>
            <p className="text-gray-600">
              Check out my latest work and projects I've built.
            </p>
            <Link href="/projects" className="text-blue-600 hover:underline mt-4 inline-block">
              View projects →
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Contact</h3>
            <p className="text-gray-600">
              Let's connect! Reach out for collaborations or just to say hello.
            </p>
            <Link href="/contact" className="text-blue-600 hover:underline mt-4 inline-block">
              Get in touch →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
