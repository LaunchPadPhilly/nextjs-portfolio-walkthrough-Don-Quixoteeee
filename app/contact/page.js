import Link from 'next/link'

export default function Contact() {
  return (
    <div className="min-h-screen p-8 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center text-gray-900">
          Get In Touch
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          I'd love to hear from you! Feel free to reach out through any of these channels.
        </p>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
          <div className="space-y-8">
            {/* Email */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
              <div className="text-5xl">📧</div>
              <div className="flex-grow">
                <p className="font-bold text-gray-900 text-lg mb-1">Email</p>
                <a 
                  href="mailto:your.email@example.com" 
                  className="text-blue-600 hover:text-blue-800 hover:underline text-lg"
                >
                  your.email@example.com
                </a>
                <p className="text-sm text-gray-500 mt-1">I'll respond within 24 hours</p>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 p-6 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
              <div className="text-5xl">🔗</div>
              <div className="flex-grow">
                <p className="font-bold text-gray-900 text-lg mb-1">LinkedIn</p>
                <a 
                  href="https://linkedin.com/in/yourname" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 hover:underline text-lg"
                >
                  linkedin.com/in/yourname
                </a>
                <p className="text-sm text-gray-500 mt-1">Connect with me professionally</p>
              </div>
            </div>

            {/* GitHub */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="text-5xl">💻</div>
              <div className="flex-grow">
                <p className="font-bold text-gray-900 text-lg mb-1">GitHub</p>
                <a 
                  href="https://github.com/yourname" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 hover:underline text-lg"
                >
                  github.com/yourname
                </a>
                <p className="text-sm text-gray-500 mt-1">Check out my code and contributions</p>
              </div>
            </div>

            {/* Twitter/X (Optional) */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 p-6 bg-cyan-50 rounded-lg hover:bg-cyan-100 transition-colors">
              <div className="text-5xl">🐦</div>
              <div className="flex-grow">
                <p className="font-bold text-gray-900 text-lg mb-1">Twitter / X</p>
                <a 
                  href="https://twitter.com/yourname" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-600 hover:text-cyan-800 hover:underline text-lg"
                >
                  @yourname
                </a>
                <p className="text-sm text-gray-500 mt-1">Follow me for updates and thoughts</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg shadow-lg p-8 md:p-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Let's Work Together</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            I'm always interested in hearing about new opportunities, whether it's a 
            freelance project, collaboration, or just a friendly chat about web development. 
            Don't hesitate to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/projects" 
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center"
            >
              View My Projects
            </Link>
            <Link 
              href="/about" 
              className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors text-center"
            >
              Learn More About Me
            </Link>
          </div>
        </div>

        {/* Response Time Info */}
        <div className="mt-8 text-center text-gray-600">
          <p className="text-sm">
            💡 <strong>Response Time:</strong> I typically respond within 24-48 hours
          </p>
        </div>
      </div>
    </div>
  )
}
