export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-900 text-white text-center p-8 mt-auto">
      <div className="max-w-7xl mx-auto">
        <p className="text-gray-400">
          © {currentYear} My Portfolio. Built with Next.js and Tailwind CSS
        </p>
      </div>
    </footer>
  )
}

