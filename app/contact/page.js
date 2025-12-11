import Link from 'next/link'

export default function Contact() {
  return (
    <div className="contact-page max-w-4xl mx-auto px-6 py-16">
      <div className="contact-title text-center mb-6">
        <h1 className="text-3xl font-bold">Get In Touch</h1>
        <p className="text-gray-300">Reach out through any of these channels</p>
      </div>

      <div className="contact-divider mb-8" />

      <div className="contact-wrapper grid gap-8 md:grid-cols-2">
        <div className="contact-card bg-gray-900 p-6 rounded-lg">
          <p className="contact-text text-gray-200 mb-4">
            I&apos;d love to hear from you! Feel free to reach out through any of these channels.
          </p>

          <div className="contact-list space-y-4">
            <div className="contact-row flex items-start gap-4">
              <span className="contact-icon text-2xl">📧</span>
              <div className="contact-detail">
                <p className="contact-label font-semibold">Email</p>
                <p className="contact-subtext text-gray-300">syrianag311@gmail.com</p>
              </div>
            </div>

            <div className="contact-row flex items-start gap-4">
              <span className="contact-icon text-2xl">🔗</span>
              <div className="contact-detail">
                <p className="contact-label font-semibold">LinkedIn</p>
                <Link href="https://www.linkedin.com/in/syriana-gil-7717b331b" target="_blank" rel="noopener noreferrer" className="contact-link text-sky-400 hover:underline">
                  linkedin.com/in/syriana-gil-7717b331b
                </Link>
                <p className="contact-subtext text-gray-300">Professional networking and updates</p>
              </div>
            </div>

            <div className="contact-row flex items-start gap-4">
              <span className="contact-icon text-2xl">💻</span>
              <div className="contact-detail">
                <p className="contact-label font-semibold">GitHub</p>
                <Link href="https://github.com/syrianag" target="_blank" rel="noopener noreferrer" className="contact-link text-sky-400 hover:underline">
                  github.com/syrianag
                </Link>
                <p className="contact-subtext text-gray-300">Follow along on GitHub</p>
              </div>
            </div>
          </div>
        </div>

        <div className="enhance-panel bg-gray-800 p-6 rounded-lg text-gray-200">
          <h3 className="enhance-title text-lg font-semibold">💡 Optional Enhancements:</h3>
          <ul className="enhance-list list-disc list-inside mt-3 space-y-1">
            <li>Add a contact form (coming in Week 4)</li>
            <li>Include your location or timezone</li>
            <li>Add social media icons</li>
            <li>List your availability for projects</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
