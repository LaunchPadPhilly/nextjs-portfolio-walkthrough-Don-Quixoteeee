import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <Link href="/" className="text-2xl font-bold hover:text-blue-400 transition-colors">
            My Portfolio
          </Link>
          
          {/* Navigation links */}
          <div className="flex gap-6">
            <Link 
              href="/" 
              className="hover:text-blue-400 transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="hover:text-blue-400 transition-colors font-medium"
            >
              About
            </Link>
            <Link 
              href="/projects" 
              className="hover:text-blue-400 transition-colors font-medium"
            >
              Projects
            </Link>
            <Link 
              href="/contact" 
              className="hover:text-blue-400 transition-colors font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

