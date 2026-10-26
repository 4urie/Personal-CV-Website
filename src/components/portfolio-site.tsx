"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowDown, ArrowDownRight, ArrowUpRight, BookOpen, Check, Code2, Cpu, Database, Droplets, ExternalLink, Github, Library, Linkedin, Mail, MapPin, Menu, PanelsTopLeft, Smartphone, Sparkles, Utensils, X, ArrowUp, GraduationCap, BriefcaseBusiness, Award, Target } from "lucide-react";
import { profile, projects, skillGroups, strengths } from "@/data/portfolio";

const iconMap = { code: Code2, smartphone: Smartphone, database: Database, cpu: Cpu };
const projectIconMap = { utensils: Utensils, droplets: Droplets, "book-open": BookOpen, library: Library, "panels-top-left": PanelsTopLeft };
const navItems = ["About", "Education", "Skills", "Projects", "Achievements", "Experience", "Contact"];

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

function SectionHeading({ number, eyebrow, title, description }: { number: string; eyebrow: string; title: string; description?: string }) {
  return <div className="section-heading"><span className="section-number">{number}</span><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{description && <p className="section-description">{description}</p>}</div></div>;
}

export default function PortfolioSite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("main section[id]");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) setActiveSection(entry.target.id);
    }), { rootMargin: "-35% 0px -55% 0px" });
    sections.forEach((section) => observer.observe(section));
    const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); revealObserver.unobserve(entry.target); }
    }), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { observer.disconnect(); revealObserver.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);

  function closeMenu() { setMenuOpen(false); }

  return <>
    <header className="site-header">
        <a href="#home" className="wordmark" aria-label="Aurie Nellas, home"><span className="wordmark-mark">a<span>.</span></span><span className="wordmark-name">aurie nellas</span></a>
      <nav className={`main-nav ${menuOpen ? "nav-open" : ""}`} aria-label="Main navigation">
        {navItems.map((item) => { const id = item.toLowerCase(); return <a key={id} href={`#${id}`} onClick={closeMenu} className={activeSection === id ? "nav-link active" : "nav-link"}>{item}</a>; })}
        <a className="nav-contact" href={`mailto:${profile.email}`} onClick={closeMenu}>Let’s talk <ArrowUpRight size={14} /></a>
      </nav>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}>{menuOpen ? <X /> : <Menu />}</button>
    </header>

    <main>
      <section id="home" className="hero section-wrap">
        <div className="hero-gridline" aria-hidden="true" />
        <div className="hero-copy">
          <div className="availability"><span className="status-dot" /> OPEN TO INTERNSHIP OPPORTUNITIES</div>
          <p className="hero-kicker">{profile.alternativeHeadline}<span className="kicker-line" /></p>
          <h1>Aurie D.<br /><span>Nellas</span><span className="hero-period">.</span></h1>
          <p className="hero-role">Full-Stack Developer <span>·</span> BSIT Student</p>
          <p className="hero-description">Building thoughtful digital experiences through web, mobile, and connected technology.</p>
          <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={17} /></a><a className="button button-quiet" href={`mailto:${profile.email}`}>Get in touch <ArrowUpRight size={16} /></a></div>
          <div className="hero-location"><MapPin size={14} /> Panabo City, Philippines <span className="location-separator">/</span> Fourth-year BSIT</div>
        </div>
        <div className="hero-aside">
          <div className="portrait-frame"><div className="portrait-corner corner-tl" /><div className="portrait-corner corner-tr" /><div className="portrait-corner corner-bl" /><div className="portrait-corner corner-br" /><div className="portrait-inner"><Image className="profile-photo" src="/images/aurie-nellas.png" alt="Aurie Nellas" fill priority sizes="(max-width: 650px) 245px, (max-width: 900px) 270px, 300px" /><span className="portrait-index">PROFILE / 01</span><span className="portrait-caption">AURIE D. NELLAS</span><span className="portrait-decoration" aria-hidden="true">✳</span></div></div>
          <div className="hero-side-note"><span>01 — 05</span><span className="side-note-line" /><span>Selected work<br />&amp; background</span></div>
          <div className="hero-stamp"><Sparkles size={14} /><span>Curious by<br />nature.</span></div>
        </div>
        <a href="#about" className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
        <span className="hero-coordinate">07°18′N · 125°41′E</span>
      </section>

      <section id="about" className="content-section about-section section-wrap">
        <Reveal><SectionHeading number="01" eyebrow="A little about me" title="Building with purpose." description="A curious developer in the making, interested in how technology can make everyday experiences work a little better." /></Reveal>
        <div className="about-grid"><Reveal className="about-copy"><p className="body-lead">{profile.introduction}</p><p className="body-copy">My learning spans the full path from interface design and application development to data, connected devices, and the systems that bring them together.</p><a className="text-link" href="#contact">Let’s connect <ArrowUpRight size={15} /></a></Reveal>
          <Reveal className="info-panel"><div className="panel-top"><span>QUICK DETAILS</span><span className="panel-dot" /></div><dl className="info-list"><div><dt>Based in</dt><dd>{profile.location}</dd></div><div><dt>Education</dt><dd>BS Information Technology</dd></div><div><dt>Institution</dt><dd>Davao del Norte State College</dd></div><div><dt>Year level</dt><dd>Fourth year</dd></div><div><dt>Focus areas</dt><dd>Web · Mobile · IoT</dd></div></dl><div className="panel-index">AURIE / 2026</div></Reveal>
        </div>
        <Reveal className="objective-card"><div className="objective-icon"><Target size={18} /></div><div><p className="eyebrow">CAREER OBJECTIVE</p><p>{profile.objective}</p></div><span className="objective-number">A—01</span></Reveal>
      </section>

      <section id="education" className="content-section education-section section-wrap"><Reveal><SectionHeading number="02" eyebrow="Where I’m learning" title="Education." description="Developing a solid foundation and putting it into practice through academic projects." /></Reveal><Reveal className="education-card"><div className="education-icon"><GraduationCap size={22} /></div><div className="education-main"><span className="education-label">CURRENTLY STUDYING</span><h3>Davao del Norte State College</h3><p>Bachelor of Science in Information Technology</p><div className="education-tags"><span>Fourth-year student</span><span>Panabo City, Philippines</span></div></div><div className="education-focus"><span>ACADEMIC FOCUS</span><p>Software development<br />Databases<br />Mobile applications<br />IoT systems</p></div></Reveal></section>

      <section id="skills" className="content-section skills-section section-wrap"><Reveal><SectionHeading number="03" eyebrow="Tools of the trade" title="Skills & technologies." description="A growing toolkit built through coursework, independent exploration, and hands-on project work." /></Reveal><div className="skills-grid">{skillGroups.map((group, index) => { const Icon = iconMap[group.icon as keyof typeof iconMap]; return <Reveal key={group.title} className="skill-card"><div className="skill-card-top"><span className="skill-icon"><Icon size={18} /></span><span className="skill-index">0{index + 1}</span></div><h3>{group.title}</h3><div className="skill-tags">{group.items.map((item) => <span className="skill-tag" key={item}>{item}</span>)}</div></Reveal>; })}</div><Reveal className="strengths-row"><span className="strength-label">HOW I WORK</span>{strengths.map((item) => <span key={item} className="strength-item"><Check size={13} />{item}</span>)}</Reveal></section>

      <section id="projects" className="content-section projects-section section-wrap"><Reveal><div className="projects-heading"><SectionHeading number="04" eyebrow="Selected academic work" title="Projects with purpose." description="A selection of projects exploring connected systems, education, and useful everyday applications." /><span className="projects-count">05 <span>PROJECTS</span></span></div></Reveal><div className="projects-grid">{projects.map((project, index) => { const Icon = projectIconMap[project.icon as keyof typeof projectIconMap]; return <Reveal key={project.name} className={`project-card project-card-${index + 1}`}><div className="project-visual"><div className="project-visual-grid" /><div className="project-visual-icon"><Icon size={27} strokeWidth={1.35} /></div><span className="project-visual-index">0{index + 1} / 05</span><span className="project-visual-mark">✳</span></div><div className="project-body"><div className="project-meta"><span>{project.category}</span><span className="project-arrow"><ArrowUpRight size={15} /></span></div><h3>{project.name}</h3><p>{project.description}</p><div className="project-tags">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>{project.live && <a className="project-live-link" href={project.live} target="_blank" rel="noreferrer">Visit live portfolio <ExternalLink size={13} /></a>}</div></Reveal>; })}</div><div className="projects-footnote"><span className="footnote-mark">↳</span><p>Project details reflect available academic information. Repository links can be added as projects are published.</p></div></section>

      <section id="achievements" className="content-section empty-section section-wrap"><Reveal><SectionHeading number="05" eyebrow="Milestones" title="Achievements & certifications." description="A space for verified milestones and credentials as they’re earned." /><div className="empty-state"><div className="empty-state-icon"><Award size={20} /></div><div><h3>More to come.</h3><p>Certifications and achievements will be added here once confirmed.</p></div><span className="empty-state-label">IN PROGRESS</span></div></Reveal></section>

      <section id="experience" className="content-section experience-section section-wrap"><Reveal><SectionHeading number="06" eyebrow="Experience so far" title="Learning by doing." description="My experience to date is centered on academic projects and collaborative learning." /><div className="experience-row"><div className="experience-icon"><BriefcaseBusiness size={19} /></div><div className="experience-copy"><span className="education-label">ACADEMIC PROJECTS</span><h3>Project-based development</h3><p>Building experience through coursework and academic work in software development, databases, mobile applications, and IoT systems.</p></div><span className="experience-type">ACADEMIC</span></div></Reveal></section>

      <section id="contact" className="contact-section section-wrap"><Reveal className="contact-inner"><div className="contact-orbit" aria-hidden="true">✳</div><p className="eyebrow">HAVE A PROJECT OR OPPORTUNITY?</p><h2>Let’s make<br /><span>something useful.</span></h2><p className="contact-description">I’m open to connecting about internships, collaborations, and opportunities to grow as a developer.</p><a className="button button-primary contact-button" href={`mailto:${profile.email}`}>Say hello <ArrowUpRight size={17} /></a><div className="contact-bottom"><span><Mail size={14} /> {profile.email}</span><span>BASED IN DAVAO DEL NORTE, PH</span></div></Reveal></section>
    </main>

    <footer className="site-footer section-wrap"><a href="#home" className="wordmark footer-wordmark"><span className="wordmark-mark">a<span>.</span></span><span className="wordmark-name">aurie nellas</span></a><p>Designed &amp; built with curiosity.<br /><span>© {new Date().getFullYear()} Aurie D. Nellas</span></p><div className="footer-links"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github size={17} /></a><a href={`mailto:${profile.email}`} aria-label="Email Aurie"><Mail size={17} /></a><span className="linkedin-placeholder" aria-label="LinkedIn profile not provided"><Linkedin size={17} /><span>Profile not provided</span></span><a href="#home" aria-label="Back to top"><ArrowUp size={16} /></a></div><a className="footer-domain" href={profile.domain} target="_blank" rel="noreferrer">4urie.me <ArrowUpRight size={12} /></a></footer>
    {showTop && <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Scroll to top"><ArrowUp size={17} /></button>}
  </>;
}
