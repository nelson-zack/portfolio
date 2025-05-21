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
            I’m a recent Computer Science graduate and a builder. I’ve created real-world tools like JobLog to solve my own needs and help others. I'm looking for opportunities in software engineering, preferably full-stack, where I can continue growing and solving meaningful problems.
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <h2 className="text-3xl font-semibold mb-4">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-4 border rounded shadow hover:shadow-lg transition">
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
              <a href="https://joblog-app.vercel.app" className="text-blue-600 hover:underline hover:text-blue-800 transition" target="_blank" rel="noopener noreferrer">Live Demo</a>{" "}
              |{" "}
              <a href="https://github.com/nelson-zack/joblog" className="text-blue-600 hover:underline hover:text-blue-800 transition" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
            {/* Add more projects here */}
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