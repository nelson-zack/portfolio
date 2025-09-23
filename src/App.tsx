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
import { useEffect, useRef, useState } from 'react';
import type { KeyboardEvent as ReactKeyboardEvent } from 'react';
import { FiCopy, FiCheck, FiSearch } from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';

type Command = {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  type: 'section' | 'external';
};

const SectionDivider = () => (
  <div className='relative my-12 h-12 overflow-hidden'>
    <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.35)_0%,rgba(34,211,238,0.15)_40%,transparent_70%)] blur-2xl opacity-60'></div>
    <div className='absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(34,211,238,0.2)_0,rgba(34,211,238,0.2)_1px,transparent_1px,transparent_12px)] opacity-30'></div>
    <div className='absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent'></div>
  </div>
);

function App() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [paletteQuery, setPaletteQuery] = useState('');
  const paletteInputRef = useRef<HTMLInputElement>(null);

  const handleCopy = (id: string, value: string) => {
    navigator.clipboard.writeText(value).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  const commands: Command[] = [
    {
      id: 'goto-about',
      title: 'About',
      subtitle: 'Jump to About section',
      href: '#about',
      type: 'section'
    },
    {
      id: 'goto-projects',
      title: 'Projects',
      subtitle: 'Jump to Projects grid',
      href: '#projects',
      type: 'section'
    },
    {
      id: 'goto-resume',
      title: 'Resume',
      subtitle: 'View resume call-to-action',
      href: '#resume',
      type: 'section'
    },
    {
      id: 'goto-contact',
      title: 'Contact',
      subtitle: 'Find email and social links',
      href: '#contact',
      type: 'section'
    },
    {
      id: 'job-radar-live',
      title: 'Job Radar — Live Demo',
      subtitle: 'jobradar.zacknelson.dev',
      href: 'https://jobradar.zacknelson.dev/',
      type: 'external'
    },
    {
      id: 'job-radar-repo',
      title: 'Job Radar — GitHub',
      subtitle: 'nelson-zack/job-radar',
      href: 'https://github.com/nelson-zack/job-radar',
      type: 'external'
    },
    {
      id: 'job-log-live',
      title: 'Job Log — Live Demo',
      subtitle: 'joblog.zacknelson.dev',
      href: 'https://joblog.zacknelson.dev/',
      type: 'external'
    },
    {
      id: 'job-log-repo',
      title: 'Job Log — GitHub',
      subtitle: 'nelson-zack/joblog',
      href: 'https://github.com/nelson-zack/joblog',
      type: 'external'
    },
    {
      id: 'commit-companion-repo',
      title: 'Commit Companion — GitHub',
      subtitle: 'nelson-zack/commit-companion',
      href: 'https://github.com/nelson-zack/commit-companion',
      type: 'external'
    },
    {
      id: 'commit-companion-pypi',
      title: 'Commit Companion — PyPI',
      subtitle: 'pypi.org/project/commit-companion',
      href: 'https://pypi.org/project/commit-companion/',
      type: 'external'
    }
  ];

  useEffect(() => {
    AOS.init({ duration: 700, once: false });
  }, []);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const isKShortcut = event.key.toLowerCase() === 'k' && (event.metaKey || event.ctrlKey);
      if (isKShortcut) {
        event.preventDefault();
        setPaletteQuery('');
        setIsPaletteOpen(true);
      }

      if (event.key === 'Escape') {
        setIsPaletteOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isPaletteOpen) {
      requestAnimationFrame(() => {
        paletteInputRef.current?.focus();
      });
    }
  }, [isPaletteOpen]);

  const handleCommandSelect = (command: Command) => {
    setIsPaletteOpen(false);
    setPaletteQuery('');

    if (command.type === 'section') {
      requestAnimationFrame(() => {
        const element = document.querySelector(command.href);
        if (element) {
          (element as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    } else if (command.type === 'external') {
      window.open(command.href, '_blank', 'noopener,noreferrer');
    }
  };

  const filteredCommands = commands.filter((command) => {
    const normalizedQuery = paletteQuery.trim().toLowerCase();
    if (!normalizedQuery) return true;
    return (
      command.title.toLowerCase().includes(normalizedQuery) ||
      command.subtitle.toLowerCase().includes(normalizedQuery)
    );
  });

  const handlePaletteInputKeyDown = (event: ReactKeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && filteredCommands.length > 0) {
      event.preventDefault();
      handleCommandSelect(filteredCommands[0]);
    }
  };

  useEffect(() => {
    const glow = document.getElementById('cursor-glow');
    if (!glow) return;

    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) {
      glow.style.display = 'none';
      return;
    }

    const baseOpacity = 0.28;

    const handlePointerMove = (event: PointerEvent) => {
      glow.style.opacity = baseOpacity.toString();
      glow.style.transform = `translate3d(${event.clientX - 128}px, ${event.clientY - 128}px, 0)`;
    };

    const handlePointerLeave = () => {
      glow.style.opacity = '0';
    };

    const handlePointerOver = (event: PointerEvent) => {
      if ((event.target as HTMLElement).closest('a, button')) {
        glow.style.opacity = '0.5';
      }
    };

    const handlePointerOut = (event: PointerEvent) => {
      if ((event.target as HTMLElement).closest('a, button')) {
        glow.style.opacity = baseOpacity.toString();
      }
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerleave', handlePointerLeave);
    document.addEventListener('pointerover', handlePointerOver);
    document.addEventListener('pointerout', handlePointerOut);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
      document.removeEventListener('pointerover', handlePointerOver);
      document.removeEventListener('pointerout', handlePointerOut);
    };
  }, []);

  return (
    <div className='relative min-h-screen bg-[#101010] text-white font-sans flex flex-col'>
      <div
        className='fixed top-0 left-0 h-1 bg-cyan-400 z-50 transition-[width] duration-200'
        style={{ width: `${scrollProgress}%` }}
        aria-hidden='true'
      ></div>
      {isPaletteOpen && (
        <div
          className='fixed inset-0 z-50 flex items-start justify-center bg-black/80 px-4 py-16 backdrop-blur-sm'
          role='dialog'
          aria-modal='true'
          aria-label='Command palette'
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setIsPaletteOpen(false);
            }
          }}
        >
          <div className='w-full max-w-xl overflow-hidden rounded-xl border border-cyan-500/40 bg-[#0a0f12] text-white shadow-xl shadow-cyan-500/10'>
            <div className='flex items-center gap-3 border-b border-cyan-500/30 px-4 py-3'>
              <FiSearch className='text-cyan-400' aria-hidden='true' />
              <input
                ref={paletteInputRef}
                type='text'
                value={paletteQuery}
                onChange={(event) => setPaletteQuery(event.target.value)}
                onKeyDown={handlePaletteInputKeyDown}
                placeholder='Jump to section or open a project...'
                className='flex-1 bg-transparent text-sm font-mono text-white placeholder:text-gray-500 focus:outline-none'
                aria-label='Command palette search'
              />
              <span className='hidden text-[10px] uppercase tracking-[0.2em] text-gray-500 sm:inline'>Esc to close</span>
            </div>
            <ul className='max-h-72 overflow-y-auto py-2'>
              {filteredCommands.length > 0 ? (
                filteredCommands.map((command) => (
                  <li key={command.id}>
                    <button
                      type='button'
                      onClick={() => handleCommandSelect(command)}
                      className='flex w-full items-start justify-between gap-3 px-4 py-3 text-left transition hover:bg-cyan-500/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60'
                    >
                      <div>
                        <div className='text-sm font-medium text-white'>{command.title}</div>
                        <div className='text-xs text-gray-400 font-mono'>{command.subtitle}</div>
                      </div>
                      <span className='text-[10px] uppercase tracking-[0.2em] text-cyan-500/70'>
                        {command.type === 'external' ? 'external' : 'section'}
                      </span>
                    </button>
                  </li>
                ))
              ) : (
                <li className='px-4 py-6 text-center text-xs uppercase tracking-[0.3em] text-gray-500'>
                  No matches
                </li>
              )}
            </ul>
            <div className='border-t border-cyan-500/20 bg-[#090d10] px-4 py-3 text-[10px] uppercase tracking-[0.3em] text-gray-500'>
              Press <span className='text-cyan-400'>Esc</span> or click outside to close · Shortcut <span className='text-cyan-400'>⌘</span>/<span className='text-cyan-400'>Ctrl</span> + <span className='text-cyan-400'>K</span>
            </div>
          </div>
        </div>
      )}
      <div className='pointer-events-none fixed inset-0 z-0 overflow-hidden'>
        <div
          id='cursor-glow'
          className='absolute h-64 w-64 rounded-full opacity-0 transition-opacity duration-500 blur-3xl'
          style={{
            background:
              'radial-gradient(circle, rgba(34,211,238,0.6) 0%, rgba(34,211,238,0.25) 45%, rgba(34,211,238,0.08) 70%, transparent 100%)'
          }}
        ></div>
      </div>
      {/* Header */}
      <header className='bg-[#101010] text-white p-4 border-b border-cyan-600'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center gap-4'>
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
        <div className='w-full pt-2 md:w-auto md:self-start md:text-right md:pl-4 md:pt-0'>
          <button
            type='button'
            onClick={() => setIsPaletteOpen(true)}
            className='group inline-flex w-full items-center justify-center gap-2 rounded border border-cyan-500/40 bg-[#0e1417] px-3 py-1.5 text-xs font-mono text-cyan-300 transition hover:border-cyan-400 hover:text-cyan-100 md:w-auto md:justify-end'
          >
            Quick Jump
            <span className='flex items-center gap-1 rounded bg-[#091015] px-2 py-[2px] text-[10px] uppercase tracking-[0.3em] text-cyan-400/80 transition group-hover:text-cyan-200'>
              ⌘
              <span className='text-gray-500 group-hover:text-gray-300'>/</span>
              Ctrl + K
            </span>
          </button>
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
            focused on shipping reliable, full-stack products end to end. I’ve
            deployed <strong>Job Radar</strong>, a hiring intelligence dashboard
            for remote junior SWE roles, <strong>Job Log</strong>, a kanban-style
            job tracker with analytics and automations, and
            <strong> Commit Companion</strong>, a GPT-powered CLI for consistent
            Git commits <strong>published on PyPI</strong>. I’m now looking for a
            full-stack engineering role where I can deliver resilient backend
            systems, polished interfaces, and thoughtful developer tooling at
            scale.
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
        <SectionDivider />

        {/* Projects Section */}
        <section id='projects' data-aos='fade-up'>
          <h2 className='text-3xl font-semibold tracking-wide mt-4 mb-4 border-b border-cyan-800 pb-1 inline-block'>
            Projects
          </h2>
          <div className='grid md:grid-cols-2 gap-8'>
            {/* Job Radar Card */}
            <div className='group relative rounded-lg p-[1px] bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 bg-[length:200%_200%] transition duration-500 hover:from-cyan-500/20 hover:via-cyan-400/70 hover:to-cyan-500/20 hover:animate-border-pan'>
              <div
                title='Monitor ATS job boards and surface hiring insights'
                className='rounded-lg border border-cyan-500/20 bg-[#101010] shadow transition hover:shadow-[0_0_0_3px_#22d3ee,0_0_12px_#22d3ee] hover:scale-[1.01] motion-safe:transition-transform motion-safe:duration-300 flex flex-col justify-between min-h-[500px] p-4'
              >
                <div className='flex-1 flex flex-col'>
                  <img
                    src='/job-radar-thumb.jpg'
                    alt='Screenshot of Job Radar dashboard'
                    className='w-full mb-2 rounded shadow-sm'
                  />
                <h3 className='text-xl font-semibold'>Job Radar</h3>
                <p className='text-xs text-gray-500 font-mono'>
                  Stack: FastAPI + Next.js + PostgreSQL
                </p>
                <p className='text-xs text-gray-600 mb-2 font-mono'>
                  <strong>Role:</strong> Sole developer · Fullstack
                </p>
                <p className='text-sm mb-2'>
                  <strong>Job Radar</strong> scrapes Greenhouse boards and curated
                  GitHub repositories to spotlight remote junior SWE roles,
                  normalizes each listing, and surfaces sourcing insights with
                  data quality checkpoints. Built with an ingestion pipeline
                  designed to expand into additional ATS providers as they roll
                  out.
                </p>
              </div>
                <div className='mt-2'>
                  <a
                    href='https://jobradar.zacknelson.dev/'
                    className='text-cyan-600 hover:underline hover:text-cyan-400 transition font-mono'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Live Demo
                  </a>{' '}
                  |{' '}
                  <a
                    href='https://github.com/nelson-zack/job-radar'
                    className='text-cyan-600 hover:underline hover:text-cyan-400 transition font-mono'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Job Log Card */}
            <div className='group relative rounded-lg p-[1px] bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 bg-[length:200%_200%] transition duration-500 hover:from-cyan-500/20 hover:via-cyan-400/70 hover:to-cyan-500/20 hover:animate-border-pan'>
              <div
                title='Track your job applications with analytics and tags'
                className='rounded-lg border border-cyan-500/20 bg-[#101010] shadow transition hover:shadow-[0_0_0_3px_#22d3ee,0_0_12px_#22d3ee] hover:scale-[1.01] motion-safe:transition-transform motion-safe:duration-300 flex flex-col justify-between min-h-[500px] p-4'
              >
                <div className='flex-1 flex flex-col'>
                  <img
                    src='/joblog-thumb.jpg'
                    alt='Screenshot of Job Log'
                    className='w-full mb-2 rounded shadow-sm'
                  />
                <h3 className='text-xl font-semibold'>Job Log</h3>
                <p className='text-xs text-gray-500 font-mono'>
                  Stack: React + FastAPI + PostgreSQL
                </p>
                <p className='text-xs text-gray-600 mb-2 font-mono'>
                  <strong>Role:</strong> Sole developer · Fullstack
                </p>
                <p className='text-sm mb-2'>
                  <strong>Job Log</strong> is a full-stack job tracker that
                  consolidates applications into a kanban-style pipeline with
                  analytics, reminders, and interview timelines. Offers tag-based
                  filtering, daily digest emails, and CSV exports to keep the job
                  search organized end to end.
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
            </div>

            {/* Commit Companion Card */}
            <div className='group relative rounded-lg p-[1px] bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 bg-[length:200%_200%] transition duration-500 hover:from-cyan-500/20 hover:via-cyan-400/70 hover:to-cyan-500/20 hover:animate-border-pan'>
              <div
                title='Generate smart Git commit messages with GPT'
                className='rounded-lg border border-cyan-500/20 bg-[#101010] shadow transition hover:shadow-[0_0_0_3px_#22d3ee,0_0_12px_#22d3ee] hover:scale-[1.01] motion-safe:transition-transform motion-safe:duration-300 flex flex-col justify-between min-h-[500px] p-4'
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
                  <strong>Commit Companion</strong> is an open-source CLI that
                  turns staged diffs into consistent Git commit messages with GPT,
                  <strong> published on PyPI</strong>. Supports Conventional
                  Commits, tone presets, and optional Git hook automation for
                  hands-free commits.
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
                  </a>{' '}
                  |{' '}
                  <a
                    href='https://pypi.org/project/commit-companion/'
                    className='text-cyan-600 hover:underline hover:text-cyan-400 transition font-mono'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    PyPI
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

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

        <SectionDivider />

        {/* Contact Section */}
        <section id='contact' data-aos='fade-up'>
          <h2 className='text-3xl font-semibold tracking-wide mb-4'>Contact</h2>
          <ul className='space-y-3'>
            <li className='flex items-center gap-2'>
              <span>Email:</span>
              <a
                href='mailto:zacknelson15@gmail.com'
                className='text-cyan-600 hover:underline hover:text-cyan-400 transition font-mono'
              >
                zacknelson15@gmail.com
              </a>
              <button
                type='button'
                onClick={() => handleCopy('email', 'zacknelson15@gmail.com')}
                className='text-cyan-500 hover:text-cyan-300 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 rounded'
                aria-label='Copy email address'
              >
                {copiedId === 'email' ? <FiCheck aria-hidden='true' /> : <FiCopy aria-hidden='true' />}
              </button>
            </li>
            <li className='flex items-center gap-2'>
              <span>GitHub:</span>
              <a
                href='https://github.com/nelson-zack'
                className='text-cyan-600 hover:underline hover:text-cyan-400 transition font-mono'
                target='_blank'
                rel='noopener noreferrer'
              >
                github.com/nelson-zack
              </a>
              <button
                type='button'
                onClick={() => handleCopy('github', 'https://github.com/nelson-zack')}
                className='text-cyan-500 hover:text-cyan-300 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 rounded'
                aria-label='Copy GitHub profile URL'
              >
                {copiedId === 'github' ? <FiCheck aria-hidden='true' /> : <FiCopy aria-hidden='true' />}
              </button>
            </li>
            <li className='flex items-center gap-2'>
              <span>LinkedIn:</span>
              <a
                href='https://www.linkedin.com/in/nelsonzack/'
                className='text-cyan-600 hover:underline hover:text-cyan-400 transition font-mono'
                target='_blank'
                rel='noopener noreferrer'
              >
                linkedin.com/in/nelsonzack
              </a>
              <button
                type='button'
                onClick={() => handleCopy('linkedin', 'https://www.linkedin.com/in/nelsonzack/')}
                className='text-cyan-500 hover:text-cyan-300 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 rounded'
                aria-label='Copy LinkedIn profile URL'
              >
                {copiedId === 'linkedin' ? <FiCheck aria-hidden='true' /> : <FiCopy aria-hidden='true' />}
              </button>
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
