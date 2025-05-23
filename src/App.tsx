function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Zack Nelson</h1>
            <p className="text-sm mt-1">Full-Stack Developer · CS Grad · Builder</p>
          </div>
          <nav className="mt-2 md:mt-0 space-x-4">
            <a href="#about" className="hover:underline hover:text-blue-300 transition">About</a>
            <a href="#projects" className="hover:underline hover:text-blue-300 transition">Projects</a>
            <a href="#resume" className="hover:underline hover:text-blue-300 transition">Resume</a>
            <a href="#contact" className="hover:underline hover:text-blue-300 transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 space-y-16 flex-1">
        {/* About Section */}
        <section id="about">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="max-w-2xl">
            I’m a recent Computer Science graduate and a builder focused on solving real problems with clean, practical software. I’ve developed tools like JobLog, a job application tracker with analytics, and Commit Companion, a GPT-powered CLI for smart Git commits. I’m currently seeking full-stack software engineering roles where I can grow, contribute meaningfully, and continue building things people actually use.
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <h2 className="text-3xl font-semibold mb-4">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* JobLog Card */}
            <div className="p-4 border rounded shadow hover:shadow-lg transition flex flex-col justify-between min-h-[460px]">
              <img
                src="/joblog-thumb.jpg"
                alt="Screenshot of JobLog"
                className="w-full mb-2 rounded shadow-sm"
              />
              <h3 className="text-xl font-semibold">JobLog</h3>
              <p className="text-sm mb-2">Job application tracker built with React + FastAPI.</p>
              <div className="flex flex-wrap gap-2 text-xs mb-2">
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded">React</span>
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded">FastAPI</span>
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded">PostgreSQL</span>
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded">Tailwind CSS</span>
              </div>
              <div className="mt-auto">
                <a href="https://joblog.zacknelson.dev/" className="text-blue-600 hover:underline hover:text-blue-800 transition" target="_blank" rel="noopener noreferrer">Live Demo</a>{" "}
                |{" "}
                <a href="https://github.com/nelson-zack/joblog" className="text-blue-600 hover:underline hover:text-blue-800 transition" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>

            {/* Commit Companion Card */}
            <div className="p-4 border rounded shadow hover:shadow-lg transition flex flex-col min-h-[460px]">
              <div className="flex-1 flex flex-col">
                <img
                  src="/commit-companion-thumb.jpg"
                  alt="Screenshot of Commit Companion"
                  className="w-full mb-2 rounded shadow-sm p-4 bg-black"
                />
                <h3 className="text-xl font-semibold">Commit Companion</h3>
                <p className="text-sm mb-2">
                  AI-powered Git commit assistant that uses GPT to summarize staged diffs into clear, conventional messages. Supports tone customization, Git hook installation, and command-line usage.
                </p>
                <div className="flex flex-wrap gap-2 text-xs mb-2">
                  <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded">Python</span>
                  <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded">OpenAI API</span>
                  <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded">Git</span>
                  <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded">CLI</span>
                </div>
              </div>
              <div className="mt-auto">
                <a
                  href="https://github.com/nelson-zack/commit-companion"
                  className="text-blue-600 hover:underline hover:text-blue-800 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume">
          <h2 className="text-3xl font-semibold mb-4">Resume</h2>
          <a
            href="/ZackNelson_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            View My Resume
          </a>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2 className="text-3xl font-semibold mb-4">Contact</h2>
          <ul className="space-y-2">
            <li>Email: <a href="mailto:zacknelson15@gmail.com" className="text-blue-600 hover:underline hover:text-blue-800 transition">zacknelson15@gmail.com</a></li>
            <li>GitHub: <a href="https://github.com/nelson-zack" className="text-blue-600 hover:underline hover:text-blue-800 transition" target="_blank" rel="noopener noreferrer">github.com/nelson-zack</a></li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/nelsonzack/" className="text-blue-600 hover:underline hover:text-blue-800 transition" target="_blank" rel="noopener noreferrer">linkedin.com/in/nelsonzack</a></li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-6">
        © {new Date().getFullYear()} Zack Nelson. All rights reserved.
      </footer>
    </div>
  );
}

export default App;