function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Zack Nelson</h1>
          <nav className="space-x-4">
            <a href="#about" className="hover:underline">About</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#resume" className="hover:underline">Resume</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-16">
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
              <h3 className="text-xl font-semibold">JobLog</h3>
              <p className="text-sm mb-2">Job application tracker built with React + FastAPI.</p>
              <a href="https://joblog-app.vercel.app" className="text-blue-600 hover:underline" target="_blank">Live Demo</a> |{" "}
              <a href="https://github.com/nelson-zack/joblog" className="text-blue-600 hover:underline" target="_blank">GitHub</a>
            </div>
            {/* Add more projects later */}
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume">
          <h2 className="text-3xl font-semibold mb-4">Resume</h2>
          <a
            href="/resume.pdf" // Replace with actual path
            target="_blank"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            View My Resume
          </a>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2 className="text-3xl font-semibold mb-4">Contact</h2>
          <ul className="space-y-2">
            <li>Email: <a href="mailto:zacknelson15@gmail.com" className="text-blue-600 hover:underline">zacknelson15@gmail.com</a></li>
            <li>GitHub: <a href="https://github.com/nelson-zack" className="text-blue-600 hover:underline" target="_blank">github.com/nelson-zack</a></li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/nelsonzack/" className="text-blue-600 hover:underline" target="_blank">linkedin.com/in/nelsonzack</a></li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;