import {
  FaReact,
  FaGitAlt,
  FaPython,
  FaGithub,
  FaDocker,
  FaDatabase
} from 'react-icons/fa';
import {
  SiTypescript,
  SiFastapi,
  SiNodedotjs,
  SiTailwindcss,
  SiChartdotjs,
  SiVite,
  SiPytorch,
  SiTensorflow,
  SiNumpy,
  SiPandas,
  SiJupyter,
  SiSqlite,
  SiPostgresql,
  SiVercel,
  SiJavascript,
  SiCplusplus
} from 'react-icons/si';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);
  return (
    <div className='min-h-screen bg-[#101010] text-white font-sans flex flex-col'>
      {/* Header */}
      <header className='bg-[#101010] text-white p-4 border-b border-cyan-600'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
          <div>
            <div className='text-xs text-gray-400 font-mono mb-1 animate-pulse'>
              ~/portfolio
            </div>
            <h1 className='text-2xl font-bold'>Zack Nelson</h1>
            <p className='text-sm mt-1 text-gray-400 font-light tracking-wide'>
              Coding with precision. Building with purpose.
            </p>
            <span className='inline-block text-xs text-gray-400 font-mono mt-1 overflow-hidden border-r-[6px] border-cyan-400 sm:animate-type whitespace-nowrap w-[36ch] sm:w-[56ch]'>
              <span className='hidden sm:inline'>
                now: refining projects and applying to full-stack roles
              </span>
            </span>
            <div className='sm:hidden text-xs text-gray-400 font-mono mt-[-1rem] leading-snug'>
              <div>now: refining projects and applying to</div>
              <div>
                full-stack roles
                <span className='inline-block border-r-[6px] border-cyan-400 animate-blink ml-1 h-[1em] align-middle'></span>
              </div>
            </div>
          </div>
          <nav className='mt-2 md:mt-0 space-x-4'>
            <a
              href='#about'
              className='hover:underline hover:text-cyan-400 underline-offset-4 decoration-2 transition'
              aria-label='About section'
            >
              About
            </a>
            <a
              href='#projects'
              className='hover:underline hover:text-cyan-400 underline-offset-4 decoration-2 transition'
              aria-label='Projects section'
            >
              Projects
            </a>
            <a
              href='#resume'
              className='hover:underline hover:text-cyan-400 underline-offset-4 decoration-2 transition'
              aria-label='Resume section'
            >
              Resume
            </a>
            <a
              href='#contact'
              className='hover:underline hover:text-cyan-400 underline-offset-4 decoration-2 transition'
              aria-label='Contact section'
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className='container mx-auto px-4 md:px-8 py-8 space-y-16 flex-1'>
        {/* About Section */}
        <section id='about' data-aos='fade-up'>
          <h2 className='text-3xl font-semibold tracking-wide mb-4'>
            About Me
          </h2>
          <p className='max-w-2xl font-light text-gray-300 leading-relaxed'>
            I’m a U.S. Marine Corps veteran and recent Computer Science graduate
            with experience building and deploying full-stack applications. My
            projects include <strong>JobLog</strong>, a job application tracker
            with built-in analytics, and <strong>Commit Companion</strong>, a
            Python CLI powered by GPT for generating consistent Git commit
            messages. I’m seeking a full-stack engineering role where I can
            apply my skills in scalable backend systems, responsive UI, and
            cloud deployment to deliver tools that create real impact.
          </p>
        </section>

        {/* Skills Section */}
        <section id='skills' data-aos='fade-up'>
          <h2 className='text-3xl font-semibold tracking-wide mb-4 border-b border-cyan-800 pb-1 inline-block'>
            Skills
          </h2>
          <div className='space-y-2'>
            <div>
              <h3 className='font-medium'>Languages</h3>
              <div className='flex flex-wrap gap-2 text-sm'>
                <span className='flex items-center gap-1 bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm'>
                  <FaPython /> Python
                </span>
                <span className='flex items-center gap-1 bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm'>
                  <SiTypescript /> TypeScript
                </span>
                <span className='flex items-center gap-1 bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm'>
                  <SiJavascript /> JavaScript
                </span>
                <span className='flex items-center gap-1 bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm'>
                  <SiCplusplus /> C++
                </span>
                <span className='flex items-center gap-1 bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm'>
                  <FaDatabase /> SQL
                </span>
              </div>
            </div>

            <div>
              <h3 className='font-medium'>Web & UI</h3>
              <div className='flex flex-wrap gap-2 text-sm'>
                <span className='flex items-center gap-1 bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm'>
                  <FaReact /> React
                </span>
                <span className='flex items-center gap-1 bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm'>
                  <SiFastapi /> FastAPI
                </span>
                <span className='flex items-center gap-1 bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm'>
                  <SiNodedotjs /> Node.js
                </span>
                <span className='flex items-center gap-1 bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm'>
                  <img
                    src='/icons/axios.png'
                    alt='Axios logo'
                    className='w-4 h-4 grayscale'
                  />
                  Axios
                </span>
                <span className='flex items-center gap-1 bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm'>
                  <SiTailwindcss /> Tailwind CSS
                </span>
                <span className='flex items-center gap-1 bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm'>
                  <SiChartdotjs /> Chart.js
                </span>
                <span className='flex items-center gap-1 bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm'>
                  <SiVite /> Vite
                </span>
              </div>
            </div>

            <div>
              <h3 className='font-medium'>Machine Learning & Data</h3>
              <div className='flex flex-wrap gap-2 text-sm'>
                <span className='flex items-center gap-1 bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm'>
                  <SiPytorch /> PyTorch
                </span>
                <span className='flex items-center gap-1 bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm'>
                  <SiTensorflow /> TensorFlow
                </span>
                <span className='flex items-center gap-1 bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm'>
                  <SiNumpy /> NumPy
                </span>
                <span className='flex items-center gap-1 bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm'>
                  <SiPandas /> Pandas
                </span>
                <span className='flex items-center gap-1 bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm'>
                  <img
                    src='/icons/opencv.png'
                    alt='OpenCV logo'
                    className='w-4 h-4 grayscale'
                  />
                  OpenCV
                </span>
              </div>
            </div>

            <div>
              <h3 className='font-medium'>Tools & Platforms</h3>
              <div className='flex flex-wrap gap-2 text-sm'>
                <span className='flex items-center gap-1 bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm'>
                  <FaGitAlt /> Git
                </span>
                <span className='flex items-center gap-1 bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm'>
                  <FaGithub /> GitHub
                </span>
                <span className='flex items-center gap-1 bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm'>
                  <SiJupyter /> Jupyter
                </span>
                <span className='flex items-center gap-1 bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm'>
                  <SiSqlite /> SQLite
                </span>
                <span className='flex items-center gap-1 bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm'>
                  <SiPostgresql /> PostgreSQL
                </span>
                <span className='flex items-center gap-1 bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm'>
                  <img
                    src='/icons/render.svg'
                    alt='Render logo'
                    className='w-4 h-4'
                  />
                  Render
                </span>
                <span className='flex items-center gap-1 bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm'>
                  <SiVercel /> Vercel
                </span>
                <span className='flex items-center gap-1 bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm'>
                  <FaDocker /> Docker (familiar)
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Divider between Skills and Projects */}
        <hr className='border-t border-cyan-800 my-12' />

        {/* Projects Section */}
        <section id='projects' data-aos='fade-up'>
          <h2 className='text-3xl font-semibold tracking-wide mt-4 mb-4 border-b border-cyan-800 pb-1 inline-block'>
            Projects
          </h2>
          <div className='grid md:grid-cols-2 gap-8'>
            {/* JobLog Card */}
            <div
              title='Track your job applications with analytics and tags'
              className='p-4 border rounded shadow transition hover:shadow-[0_0_0_3px_#22d3ee,0_0_12px_#22d3ee] hover:scale-[1.01] motion-safe:transition-transform motion-safe:duration-300 flex flex-col justify-between min-h-[500px]'
            >
              <div className='flex-1 flex flex-col'>
                <img
                  src='/joblog-thumb.jpg'
                  alt='Screenshot of JobLog'
                  className='w-full mb-2 rounded shadow-sm'
                />
                <h3 className='text-xl font-semibold'>JobLog</h3>
                <p className='text-xs text-gray-500 font-mono'>
                  Stack: React + FastAPI + PostgreSQL
                </p>
                <p className='text-xs text-gray-600 mb-2 font-mono'>
                  <strong>Role:</strong> Sole developer · Fullstack
                </p>
                <p className='text-sm mb-2'>
                  <strong>JobLog</strong> is a full-stack job tracker built with
                  React, FastAPI, and PostgreSQL. Includes custom analytics,
                  tag-based filtering, and CSV export.
                </p>
              </div>
              <div className='mt-2'>
                <a
                  href='https://joblog.zacknelson.dev/'
                  className='text-cyan-600 hover:underline hover:text-cyan-400 transition font-mono'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Live Demo
                </a>{' '}
                |{' '}
                <a
                  href='https://github.com/nelson-zack/joblog'
                  className='text-cyan-600 hover:underline hover:text-cyan-400 transition font-mono'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Commit Companion Card */}
            <div
              title='Generate smart Git commit messages with GPT'
              className='p-4 border rounded shadow transition hover:shadow-[0_0_0_3px_#22d3ee,0_0_12px_#22d3ee] hover:scale-[1.01] motion-safe:transition-transform motion-safe:duration-300 flex flex-col justify-between min-h-[500px]'
            >
              <div className='flex-1 flex flex-col'>
                <img
                  src='/commit-companion-thumb.jpg'
                  alt='Screenshot of Commit Companion'
                  className='w-full mb-2 rounded shadow-sm p-4 bg-[#101010]'
                />
                <h3 className='text-xl font-semibold'>Commit Companion</h3>
                <p className='text-xs text-gray-500 font-mono'>
                  Stack: Python + OpenAI API + Git CLI
                </p>
                <p className='text-xs text-gray-600 mb-2 font-mono'>
                  <strong>Role:</strong> Sole developer · Fullstack
                </p>
                <p className='text-sm mb-2'>
                  <strong>Commit Companion</strong> is a GPT-powered CLI that
                  summarizes staged diffs into smart Git commit messages.
                  Supports tone customization and Git hook automation.
                </p>
              </div>
              <div className='mt-2'>
                <a
                  href='https://github.com/nelson-zack/commit-companion'
                  className='text-cyan-600 hover:underline hover:text-cyan-400 transition font-mono'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section id='resume' data-aos='fade-up'>
          <h2 className='text-3xl font-semibold tracking-wide mb-4'>Resume</h2>
          <a
            href='/Zack_Nelson_resume.pdf'
            aria-label="Download Zack Nelson's resume (PDF)"
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-400 transition font-mono uppercase tracking-wide hover:shadow-[0_0_8px_#22d3ee]'
          >
            View My Resume
          </a>
          <div className='text-xs text-gray-500 mt-2'>
            or{' '}
            <a
              href='https://github.com/nelson-zack/portfolio'
              target='_blank'
              rel='noopener noreferrer'
              className='text-cyan-600 underline hover:text-cyan-400 transition'
            >
              view source
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section id='contact' data-aos='fade-up'>
          <h2 className='text-3xl font-semibold tracking-wide mb-4'>Contact</h2>
          <ul className='space-y-2'>
            <li>
              Email:{' '}
              <a
                href='mailto:zacknelson15@gmail.com'
                className='text-cyan-600 hover:underline hover:text-cyan-400 transition font-mono'
              >
                zacknelson15@gmail.com
              </a>
            </li>
            <li>
              GitHub:{' '}
              <a
                href='https://github.com/nelson-zack'
                className='text-cyan-600 hover:underline hover:text-cyan-400 transition font-mono'
                target='_blank'
                rel='noopener noreferrer'
              >
                github.com/nelson-zack
              </a>
            </li>
            <li>
              LinkedIn:{' '}
              <a
                href='https://www.linkedin.com/in/nelsonzack/'
                className='text-cyan-600 hover:underline hover:text-cyan-400 transition font-mono'
                target='_blank'
                rel='noopener noreferrer'
              >
                linkedin.com/in/nelsonzack
              </a>
            </li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className='text-center text-sm text-gray-500 py-6 space-y-1'>
        <p className='text-cyan-400 font-mono'>
          Building one commit at a time.
        </p>
        <p className='font-mono'>
          © {new Date().getFullYear()} Zack Nelson. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
