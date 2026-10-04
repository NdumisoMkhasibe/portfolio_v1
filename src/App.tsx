import { useEffect, useState } from 'react';
import { credentials, education, experience, projects, skills } from './data';
import { Icon, type IconName } from './icons';

const sections: { id: string; label: string; icon: IconName }[] = [
  { id: 'home', label: 'Home', icon: 'home' },
  { id: 'about', label: 'About', icon: 'about' },
  { id: 'portfolio', label: 'Projects', icon: 'work' },
  { id: 'experience', label: 'Experience', icon: 'experience' },
  { id: 'contact', label: 'Contact', icon: 'contact' },
  { id: 'playground', label: 'Playground', icon: 'play' },
];

type Mark = 'X' | 'O' | null;

function getWinner(board: Mark[]) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];
  for (const [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return board.every(Boolean) ? 'draw' : null;
}

function Sidebar({
  active,
  open,
  onClose,
}: {
  active: string;
  open: boolean;
  onClose: () => void;
}) {
  return (
    <>
      <a className="mobile-brand" href="#home" onClick={onClose} aria-label="Ndumiso Mkhasibe, home">
        <span>NM</span>
      </a>
      <nav id="main-navigation" className={`side-nav${open ? ' side-nav--open' : ''}`} aria-label="Main navigation">
        <a className="nav-brand" href="#home" onClick={onClose} aria-label="Ndumiso Mkhasibe, home">
          <span>NM</span>
          <small>NDUMISO MKHASIBE</small>
        </a>
        <div className="nav-links">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`nav-link${active === section.id ? ' is-active' : ''}`}
              aria-label={section.label}
              aria-current={active === section.id ? 'location' : undefined}
              onClick={onClose}
            >
              <Icon name={section.icon} />
              <span className="nav-label">{section.label}</span>
            </a>
          ))}
        </div>
        <div className="nav-socials" aria-label="Social links">
          <a href="https://github.com/ndumisomkhasibe" target="_blank" rel="noreferrer" aria-label="GitHub profile">
            <Icon name="github" />
          </a>
          <a href="https://www.linkedin.com/in/ndumiso-mkhasibe-20165377/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
            <Icon name="linkedin" />
          </a>
        </div>
      </nav>
    </>
  );
}

function SectionHeading({
  number,
  eyebrow,
  title,
  intro,
  titleId,
}: {
  number: string;
  eyebrow: string;
  title: string;
  intro?: string;
  titleId: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow"><span>{number}</span> / {eyebrow}</p>
      <h2 id={titleId}>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  );
}

function Artwork({ kind }: { kind: (typeof projects)[number]['artwork'] }) {
  if (kind === 'career') {
    return (
      <div className="project-art project-art--career" aria-hidden="true">
        <span className="art-kicker">CAREER SYSTEMS</span>
        <div className="career-window">
          <div className="window-dots"><i /><i /><i /></div>
          <div className="career-line career-line--wide" />
          <div className="career-line" />
          <div className="career-doc"><span>CV</span><span>→</span><span>ROLE</span></div>
          <div className="career-progress"><i /></div>
        </div>
        <span className="art-stamp">01 / BUILD</span>
      </div>
    );
  }
  if (kind === 'map') {
    return (
      <div className="project-art project-art--map" aria-hidden="true">
        <span className="art-kicker">COMMUNITY MAP</span>
        <div className="map-grid">
          <i /><i /><i /><i /><i />
          <b className="map-pin map-pin--one" />
          <b className="map-pin map-pin--two" />
          <b className="map-pin map-pin--three" />
          <span className="map-route" />
        </div>
        <span className="art-stamp">CONTEXT / PLACE</span>
      </div>
    );
  }
  return (
    <div className="project-art project-art--barber" aria-hidden="true">
      <span className="art-kicker">SERVICE BOOKING</span>
      <div className="barber-mark">
        <span>IVORY</span>
        <i />
        <small>BARBERS</small>
      </div>
      <span className="art-stamp">APPOINTMENTS / CAPE TOWN</span>
    </div>
  );
}

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  return (
    <article className={`project-card project-card--${project.artwork}`} style={{ animationDelay: `${index * 110}ms` }}>
      <Artwork kind={project.artwork} />
      <div className="project-overlay">
        <p className="project-type">{project.type}</p>
        <h3>{project.name}</h3>
        <div className="project-details">
          <p>{project.summary}</p>
          <ul className="stack-list" aria-label={`${project.name} technologies`}>
            {project.stack.map((technology) => <li key={technology}>{technology}</li>)}
          </ul>
          <div className="project-links">
            <a href={project.repository} target="_blank" rel="noreferrer">
              Repository <Icon name="external" />
            </a>
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer">
                Live site <Icon name="external" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function Playground() {
  const [board, setBoard] = useState<Mark[]>(Array(9).fill(null));
  const [status, setStatus] = useState('Your turn — play as X.');
  const [finished, setFinished] = useState(false);

  function play(index: number) {
    if (board[index] || finished) return;
    const next = [...board];
    next[index] = 'X';
    const playerResult = getWinner(next);
    if (playerResult) {
      setBoard(next);
      setStatus(playerResult === 'draw' ? 'A draw. Try another round.' : 'You got it. Nice play.');
      setFinished(true);
      return;
    }

    const available = next.map((mark, cell) => mark ? -1 : cell).filter((cell) => cell >= 0);
    const computerChoice = available.includes(4) ? 4 : available[0];
    next[computerChoice] = 'O';
    const result = getWinner(next);
    setBoard(next);
    if (result) {
      setStatus(result === 'draw' ? 'A draw. Try another round.' : 'The computer wins this round.');
      setFinished(true);
    } else {
      setStatus('Your turn — play as X.');
    }
  }

  function reset() {
    setBoard(Array(9).fill(null));
    setStatus('Your turn — play as X.');
    setFinished(false);
  }

  return (
    <div className="playground-card">
      <div className="game-copy">
        <p className="eyebrow">A SMALL INTERACTIVE BREAK</p>
        <h3>Tic-tac-toe</h3>
        <p>A little nod to the small, deliberate decisions behind good software.</p>
        <p className="game-status" aria-live="polite">{status}</p>
        <button className="outline-button" type="button" onClick={reset}>Start a new round</button>
      </div>
      <div className="game-board" role="group" aria-label="Tic-tac-toe board">
        {board.map((mark, index) => (
          <button
            className={`game-cell${mark ? ` game-cell--${mark.toLowerCase()}` : ''}`}
            type="button"
            key={index}
            onClick={() => play(index)}
            disabled={Boolean(mark) || finished}
            aria-label={`Row ${Math.floor(index / 3) + 1}, column ${(index % 3) + 1}${mark ? `, ${mark}` : ', empty'}`}
          >
            {mark}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0.1, 0.3, 0.6] },
    );
    document.querySelectorAll<HTMLElement>('.portfolio-section').forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') setMenuOpen(false);
    }
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Sidebar active={active} open={menuOpen} onClose={() => setMenuOpen(false)} />
      <button
        className={`menu-toggle${menuOpen ? ' menu-toggle--open' : ''}`}
        type="button"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <Icon name={menuOpen ? 'close' : 'menu'} />
      </button>
      <main id="main-content">
        <section className="portfolio-section hero-section" id="home" aria-labelledby="hero-title">
          <div className="page-tags page-tags--top" aria-hidden="true">&lt;html&gt;<br />&lt;body&gt;</div>
          <div className="hero-content">
            <p className="eyebrow hero-eyebrow"><span>PORTFOLIO / 2026</span></p>
            <h1 id="hero-title"><span className="hero-greeting">Hello, I’m</span>Ndumiso<br />Mkhasibe<span className="accent-period">.</span></h1>
            <p className="hero-role">Software engineering trainee</p>
            <p className="hero-summary">Building practical software and AI-powered tools, with a focus on clear, useful systems.</p>
            <div className="hero-actions">
              <a className="primary-button" href="#portfolio">Explore my work <Icon name="arrow" /></a>
              <a className="text-link" href="#contact">Get in touch</a>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="hero-orbit hero-orbit--outer" />
            <div className="hero-orbit hero-orbit--inner" />
            <div className="hero-monogram"><span>N</span><span>M</span></div>
            <span className="hero-art-label hero-art-label--top">SOFTWARE<br />ENGINEERING</span>
            <span className="hero-art-label hero-art-label--bottom">CAPE TOWN<br />SOUTH AFRICA</span>
            <i className="orbit-point orbit-point--one" />
            <i className="orbit-point orbit-point--two" />
          </div>
          <div className="hero-footnote"><span className="footnote-line" /> Scroll to explore</div>
          <div className="page-tags page-tags--bottom" aria-hidden="true">&lt;/body&gt;<br />&lt;/html&gt;</div>
        </section>

        <section className="portfolio-section about-section" id="about" aria-labelledby="about-title">
          <div className="section-shell">
            <div className="about-grid">
              <div className="about-copy">
                <SectionHeading number="01" eyebrow="ABOUT ME" title="Practical thinking. Built into software." titleId="about-title" />
                <p className="body-copy">I’m a software engineering trainee at WeThinkCode_ in Cape Town. I’m building hands-on experience in Java, Python, TypeScript and the systems that help useful ideas work reliably.</p>
                <p className="body-copy">My earlier work as an electrical technician taught me to troubleshoot carefully, take ownership on site and collaborate across teams. I bring that same steady approach to software.</p>
                <div className="skills-block">
                  <h3 className="minor-heading">TOOLS &amp; PRACTICE</h3>
                  <ul className="skill-list">
                    {skills.map((skill) => <li key={skill}>{skill}</li>)}
                  </ul>
                </div>
              </div>
              <div className="skill-stage" aria-label="A rotating cube listing Java, Python, TypeScript, APIs, Git, and databases">
                <div className="cube-scene" aria-hidden="true">
                  <div className="skill-cube">
                    <div className="cube-face cube-face--front"><span>JAVA</span><small>01</small></div>
                    <div className="cube-face cube-face--right"><span>PYTHON</span><small>02</small></div>
                    <div className="cube-face cube-face--back"><span>REST APIs</span><small>03</small></div>
                    <div className="cube-face cube-face--left"><span>TYPESCRIPT</span><small>04</small></div>
                    <div className="cube-face cube-face--top"><span>GIT</span><small>05</small></div>
                    <div className="cube-face cube-face--bottom"><span>DATABASES</span><small>06</small></div>
                  </div>
                </div>
                <p className="stage-caption">Learning by building <span>↗</span></p>
              </div>
            </div>
            <div className="about-details">
              <div className="detail-column">
                <p className="eyebrow">EDUCATION</p>
                {education.map((item) => (
                  <article className="education-item" key={item.institution}>
                    <div><h3>{item.qualification}</h3><p>{item.institution} · {item.location}</p></div>
                    <span>{item.period}</span>
                  </article>
                ))}
              </div>
              <div className="detail-column credential-column">
                <p className="eyebrow">CERTIFICATIONS &amp; LEARNING</p>
                <ul className="credential-list">
                  {credentials.map((credential) => <li key={credential}>{credential}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="portfolio-section projects-section" id="portfolio" aria-labelledby="projects-title">
          <div className="section-shell">
            <SectionHeading
              number="02"
              eyebrow="SELECTED PROJECTS"
              title="A few things I’ve been building."
              intro="Three projects exploring career tools, community safety, and practical service experiences."
              titleId="projects-title"
            />
            <div className="project-grid">
              {projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}
            </div>
            <a className="all-work-link" href="https://github.com/ndumisomkhasibe" target="_blank" rel="noreferrer">
              More on GitHub <Icon name="arrow" />
            </a>
          </div>
        </section>

        <section className="portfolio-section experience-section" id="experience" aria-labelledby="experience-title">
          <div className="section-shell experience-grid">
            <div className="experience-intro">
              <SectionHeading
                number="03"
                eyebrow="EXPERIENCE"
                title="Good engineering starts with good habits."
                intro="My path into software began in electrical engineering, where careful checks and clear teamwork mattered every day."
                titleId="experience-title"
              />
              <p className="body-copy">Those roles weren’t software jobs. They did shape how I approach a problem: understand the system, work methodically and communicate with the people around it.</p>
            </div>
            <div className="experience-list">
              {experience.map((job, index) => (
                <article className="experience-card" key={job.company}>
                  <span className="experience-index">0{index + 1}</span>
                  <p className="eyebrow">{job.period}</p>
                  <h3>{job.role}</h3>
                  <p className="experience-company">{job.company} <span>·</span> {job.location}</p>
                  <ul>{job.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="portfolio-section contact-section" id="contact" aria-labelledby="contact-title">
          <div className="section-shell contact-grid">
            <div className="contact-copy">
              <SectionHeading
                number="04"
                eyebrow="CONTACT"
                title="Let’s build something useful."
                intro="I’m pursuing junior, graduate and internship opportunities in software development, cloud and AI."
                titleId="contact-title"
              />
              <p className="body-copy">If you’re working on a practical problem or want to talk about an opportunity, I’d be glad to hear from you.</p>
              <a className="primary-button" href="mailto:mkhasibendumiso3@gmail.com">Send me an email <Icon name="arrow" /></a>
            </div>
            <div className="contact-card">
              <p className="eyebrow">CAPE TOWN, SOUTH AFRICA</p>
              <a className="contact-method" href="mailto:mkhasibendumiso3@gmail.com">
                <span className="contact-icon"><Icon name="mail" /></span>
                <span><small>EMAIL</small><strong>mkhasibendumiso3@gmail.com</strong></span>
                <Icon className="contact-arrow" name="arrow" />
              </a>
              <a className="contact-method" href="tel:+27635007022">
                <span className="contact-icon"><Icon name="phone" /></span>
                <span><small>PHONE</small><strong>+27 63 500 7022</strong></span>
                <Icon className="contact-arrow" name="arrow" />
              </a>
              <a className="contact-method" href="https://github.com/ndumisomkhasibe" target="_blank" rel="noreferrer">
                <span className="contact-icon"><Icon name="github" /></span>
                <span><small>GITHUB</small><strong>github.com/ndumisomkhasibe</strong></span>
                <Icon className="contact-arrow" name="external" />
              </a>
              <a className="contact-method" href="https://www.linkedin.com/in/ndumiso-mkhasibe-20165377/" target="_blank" rel="noreferrer">
                <span className="contact-icon"><Icon name="linkedin" /></span>
                <span><small>LINKEDIN</small><strong>Ndumiso Mkhasibe</strong></span>
                <Icon className="contact-arrow" name="external" />
              </a>
            </div>
          </div>
        </section>

        <section className="portfolio-section playground-section" id="playground" aria-labelledby="playground-title">
          <div className="section-shell">
            <SectionHeading number="05" eyebrow="PLAYGROUND" title="A small pause between builds." titleId="playground-title" />
            <Playground />
          </div>
        </section>

        <footer className="site-footer">
          <span>© {new Date().getFullYear()} Ndumiso Mkhasibe</span>
          <span>Built with curiosity in Cape Town.</span>
          <a href="#home">Back to top ↑</a>
        </footer>
      </main>
    </>
  );
}
