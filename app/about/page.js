import Image from 'next/image'

// About page - bio, goals, and skills

export default function About() {
  const skills = ['JavaScript','React','Tailwind CSS','HTML','Next.js', 'Prompt Engineering', 'AI', 'Project Management']

  return (
    <div className="about-page max-w-5xl mx-auto px-6 py-16">
      <div className="about-title mb-6">
        <h1 className="text-3xl font-bold">About Me!</h1>
        <p className="text-gray-300">Learn more about my journey and skills</p>
      </div>

      <div className="about-divider mb-8" />

      <div className="about-wrapper">
        <div className="grid gap-8 md:grid-cols-3 items-start">
          <div className="md:col-span-1 flex justify-center md:justify-start">
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg">
              <Image
                src="/profile.jpg"
                alt="Syriana profile photo"
                width={224}
                height={224}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="profile-card bg-gray-900 p-6 rounded-lg">
              <p className="bio-text text-gray-200">
                Hi, I'm <strong>Syriana</strong>, a software developer combining code, creativity, and UX. I'm currently focused on learning Next.js, Tailwind CSS, and building accessible, performant interfaces.
              </p>
              <p className="goal-text text-gray-300 mt-4">
                My goal is to keep growing—because the sky is not the limit. I want to refine best practices, deepen architectural thinking, and build a portfolio that reflects craftsmanship and curiosity.
              </p>
            </div>

            <div className="skills-section mt-6">
              <h2 className="skills-heading text-xl font-semibold mb-3">Core Skills</h2>
              <div className="skills-badges flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span key={skill} className="skill-badge px-3 py-1 bg-sky-800/30 rounded-md text-sm text-gray-100">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}