import React, { Suspense, lazy, useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  ArrowDown,
  ArrowUp,
  Plus,
  Minus,
  Send,
  Search,
  Check,
  Command,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { Button } from "./components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "./components/ui/dialog";
import { projects, skills, experience } from "./data";
import "./styles.css";
gsap.registerPlugin(ScrollTrigger);
const CodeCore = lazy(() => import("./components/CodeCore"));
const email = "mailto:Samadkhan040204@gmail.com";
const nav = ["Work", "Expertise", "Experience", "About", "Contact"];
class SceneBoundary extends React.Component {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? (
      <div className="sculpture-fallback">
        <span />
        <span />
        <span />
      </div>
    ) : (
      this.props.children
    );
  }
}
function Label({ children }) {
  return (
    <p className="eyebrow section-label">
      <span className="tiny-square" />
      {children}
    </p>
  );
}
function Preview({ projectName }) {
  const index = ["TECH_CHAT", "RECRUITMENT ENGINE", "JD BOT", "BILLCRAFT"].indexOf(projectName);
  const [message, setMessage] = useState(""),
    [sent, setSent] = useState(false),
    [query, setQuery] = useState(""),
    [node, setNode] = useState("REST API"),
    [filter, setFilter] = useState("All");
  if (projectName === "CRL SOFTWARE")
    return (
      <div className="transport-preview transport-dashboard">
        <aside className="transport-sidebar" aria-label="Illustrative dashboard sidebar">
          <b>CRL<span>®</span></b><small>TRANSPORT OS</small>
          <span className="selected">◫ Overview</span><span>↗ Trips</span><span>▤ Fleet</span><span>◎ Drivers</span><span>≡ Reports</span>
          <div className="transport-account">CR<span>CRL Software<small>Operations workspace</small></span></div>
        </aside>
        <div className="transport-workspace">
        <div className="transport-heading"><div><small>WORKSPACE / OVERVIEW</small><b>Transport dashboard</b></div><span className="transport-date">SAMPLE VIEW</span></div>
        <div className="transport-stats">{[['Total trips','24'],['On the road','08'],['Available vehicles','12']].map(([label,value])=><div key={label}><small>{label}</small><b>{value}<ArrowUpRight size={12}/></b></div>)}</div>
        <div className="transport-activity"><div><b>Trip activity</b><small>ILLUSTRATIVE WEEK</small><div className="transport-bars" aria-hidden="true">{[35,60,45,85,55,100,70].map((height,i)=><span key={i}><i style={{height:`${height}%`}}/><small>{['M','T','W','T','F','S','S'][i]}</small></span>)}</div></div><div className="transport-dispatch"><b>Dispatch overview</b><div className="dispatch-ring"><span>08<small>IN TRANSIT</small></span></div><small>● On the road <span>08</span></small><small>○ Scheduled <span>16</span></small></div></div>
        <div className="transport-table-heading"><b>Recent trips</b><span>3 SAMPLE RECORDS</span></div>
        <div className="transport-table">
          <div><span>REFERENCE</span><span>ROUTE</span><span>STATUS</span></div>
          <div><b>CRL / 001</b><span>Sample route A</span><em>Scheduled</em></div>
          <div><b>CRL / 002</b><span>Sample route B</span><em>In transit</em></div>
          <div><b>CRL / 003</b><span>Sample route C</span><em>Completed</em></div>
        </div>
        <small className="sample-note">CONCEPTUAL DASHBOARD · ALL VALUES ARE SAMPLE DATA</small>
        </div>
      </div>
    );
  if (index === 0)
    return (
      <div className="chat-preview">
        <div className="chat-sidebar">
          <b>
            tc<span>_</span>
          </b>
          <div className="sidebar-line" />
          <span className="avatar">SK</span>
          <span className="avatar alt">AM</span>
          <span className="avatar">JD</span>
          <Plus size={17} />
        </div>
        <div className="chat-main">
          <div className="chat-top">
            <span>
              <b>Product team</b>
              <small>
                <i />
                Illustrative conversation
              </small>
            </span>
            <span>···</span>
          </div>
          <p className="chat-day">TODAY, 10:42 AM</p>
          <div className="message">
            Hey team! The new build is ready.<small>10:42</small>
          </div>
          <div className="message own">
            Looking good. Let's ship it. <span>↗</span>
            <small>10:43 ✓✓</small>
          </div>
          <div className="message">Great things happen in real time.</div>
          {sent ? (
            <div className="message own">
              {message}
              <small>Preview only ✓</small>
            </div>
          ) : (
            <div className="typing">
              <i />
              <i />
              <i />
            </div>
          )}
          <form
            className="message-input"
            onSubmit={(e) => {
              e.preventDefault();
              if (message.trim()) setSent(true);
            }}
          >
            <input
              aria-label="Try a preview message"
              placeholder="Write a message…"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                setSent(false);
              }}
            />
            <button aria-label="Send preview message">
              <Send size={16} />
            </button>
          </form>
        </div>
        <div className="floating-tag">
          <i /> CONNECTED BY DESIGN
        </div>
      </div>
    );
  if (index === 1)
    return (
      <div className="architecture">
        <div className="architecture-head">
          <Command size={20} />
          <span>RECRUITMENT / SYSTEM MAP</span>
        </div>
        <div className="nodes">
          {[
            "Authentication",
            "REST API",
            "AI questions",
            "Redis cache",
            "MongoDB",
            "Docker deploy",
          ].map((n, i) => (
            <button
              key={n}
              className={`node node-${i} ${node === n ? "selected" : ""}`}
              onClick={() => setNode(n)}
            >
              <span>0{i + 1}</span>
              {n}
              <ArrowUpRight size={14} />
            </button>
          ))}
        </div>
        <div className="architecture-note">
          {
            {
              Authentication: "Secure access to recruitment workflows.",
              "REST API":
                "Spring Boot endpoints connect application workflows.",
              "AI questions": "OpenAI-assisted MCQ generation.",
              "Redis cache": "Caching layer for application data.",
              MongoDB: "Document storage for recruitment data.",
              "Docker deploy": "Containerized deployment workflows.",
            }[node]
          }
        </div>
      </div>
    );
  if (index === 2)
    return (
      <div className="search-preview">
        <div className="preview-wordmark">
          jd bot<span>↗</span>
        </div>
        <p>Find the right fit.</p>
        <label className="search-input">
          <Search size={19} />
          <input
            aria-label="Filter illustrative candidates by skill"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a skill, e.g. React"
          />
        </label>
        <div className="filters">
          {["All", "Frontend", "Backend"].map((f) => (
            <button
              className={filter === f ? "selected" : ""}
              onClick={() => setFilter(f)}
              key={f}
            >
              {f}
            </button>
          ))}
        </div>
        {[
          ["AK", "Alex Kumar", "React · JavaScript", "Frontend"],
          ["SR", "Sara Rao", "Java · Spring Boot", "Backend"],
          ["RM", "Riya Mehta", "React · Tailwind CSS", "Frontend"],
        ]
          .filter(
            (p) =>
              (filter === "All" || p[3] === filter) &&
              p.join(" ").toLowerCase().includes(query.toLowerCase()),
          )
          .map((p) => (
            <div className="candidate" key={p[0]}>
              <span className="avatar">{p[0]}</span>
              <span>
                <b>{p[1]}</b>
                <small>{p[2]}</small>
              </span>
              <ArrowUpRight size={18} />
            </div>
          ))}
        <small className="sample-note">
          ILLUSTRATIVE CANDIDATES · SAMPLE DATA
        </small>
      </div>
    );
  return (
    <div className="invoice-preview">
      <div className="inventory">
        <span>INVENTORY OVERVIEW</span>
        {[
          "Design consultation",
          "Development services",
          "Product maintenance",
          "Hosting & deployment",
        ].map((v, i) => (
          <div key={v}>
            <span>0{i + 1}</span>
            {v}
            <Check size={14} />
          </div>
        ))}
      </div>
      <div className="invoice">
        <div className="invoice-top">
          <b>
            billcraft<span>®</span>
          </b>
          <ArrowUpRight size={22} />
        </div>
        <small>SAMPLE DOCUMENT</small>
        <h4>
          Invoice
          <br />
          <span>No. 0042</span>
        </h4>
        <div className="invoice-rule" />
        <div className="invoice-row">
          <span>Service</span>
          <span>Amount</span>
        </div>
        <div className="invoice-row">
          <span>Development</span>
          <span>₹ 12,000</span>
        </div>
        <div className="invoice-row">
          <span>Consultation</span>
          <span>₹ 3,000</span>
        </div>
        <div className="invoice-total">
          <span>Total</span>
          <b>₹ 15,000</b>
        </div>
        <span className="invoice-stamp">CRAFTED. SENT. SORTED.</span>
      </div>
    </div>
  );
}
function App() {
  const [menu, setMenu] = useState(false),
    [active, setActive] = useState(""),
    [selected, setSelected] = useState(null),
    [skill, setSkill] = useState(0);
  const root = useRef();
  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let lenis, tick;
    if (!reduced) {
      lenis = new Lenis({ duration: 1.05, anchors: true });
      lenis.on("scroll", ScrollTrigger.update);
      tick = (t) => lenis.raf(t * 1000);
      gsap.ticker.add(tick);
    }
    const ctx = gsap.context(() => {
      if (!reduced) {
        gsap.from(".hero-line > span", {
          yPercent: 110,
          stagger: 0.12,
          duration: 1.1,
          ease: "power3.out",
          delay: 0.15,
        });
        gsap.from(".hero-meta, .hero-bottom, .hero-aside", {
          opacity: 0,
          y: 16,
          stagger: 0.15,
          duration: 0.8,
          delay: 0.7,
        });
        gsap.utils
          .toArray(".reveal")
          .forEach((el) =>
            gsap.from(el, {
              opacity: 0,
              y: 35,
              duration: 0.85,
              scrollTrigger: { trigger: el, start: "top 93%", once: true },
            }),
          );
      }
      gsap.to(".scroll-progress", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: { start: 0, end: "max", scrub: true },
      });
    }, root);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-20% 0px -55% 0px" },
    );
    document
      .querySelectorAll("main section[id]")
      .forEach((el) => obs.observe(el));
    return () => {
      ctx.revert();
      obs.disconnect();
      if (tick) gsap.ticker.remove(tick);
      lenis?.destroy();
    };
  }, []);
  useEffect(() => {
    if (!menu) return;
    const onKey = (e) => {
      if (e.key === "Escape") setMenu(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menu]);
  return (
    <div ref={root}>
      <a className="skip-link" href="#work">
        Skip to selected work
      </a>
      <div className="scroll-progress" />
      <header className="navigation">
        <a
          href="#home"
          className="monogram name-logo"
          aria-label="Samad Khan, back to top"
        >
          Samad Khan<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          {nav.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={active === item.toLowerCase() ? "active" : ""}
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="nav-right">
          <span className="availability">
            <i /> Available for opportunities
          </span>
          <a className="circle-link" href={email} aria-label="Email Samad">
            <ArrowUpRight size={22} />
          </a>
          <button
            className="menu-toggle"
            aria-expanded={menu}
            aria-controls="mobile-menu"
            onClick={() => setMenu(!menu)}
          >
            {menu ? "Close" : "Menu"}{" "}
            {menu ? <Minus size={18} /> : <Plus size={18} />}
          </button>
        </div>
      </header>
      {menu && (
        <nav
          id="mobile-menu"
          className="mobile-menu"
          aria-label="Mobile navigation"
        >
          {nav.map((item, i) => (
            <a
              key={item}
              onClick={() => setMenu(false)}
              href={`#${item.toLowerCase()}`}
            >
              <small>0{i + 2}</small>
              {item}
              <ArrowUpRight />
            </a>
          ))}
        </nav>
      )}
      <main>
        <section id="home" className="hero">
          <div className="hero-meta eyebrow">
            <span>
              <i className="tiny-square" /> INDEPENDENT DIGITAL PORTFOLIO / 2026
            </span>
            <span>CREATIVE THINKING. SYSTEMATIC BUILDING.</span>
          </div>
          <div className="hero-stage">
            <h1>
              <span className="hero-line">
                <span>BUILDING</span>
              </span>
              <span className="hero-line">
                <span>
                  WHAT'S <i className="headline-star">✳</i>
                </span>
              </span>
              <span className="hero-line">
                <span>
                  NEXT<span className="lime-period">.</span>
                </span>
              </span>
            </h1>
            <div className="sculpture">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <span className="sculpture-coordinate eyebrow">
                FIG. 001 — THE CODE CORE
              </span>
              <SceneBoundary>
                <Suspense
                  fallback={
                    <div className="sculpture-fallback">
                      <span />
                      <span />
                      <span />
                    </div>
                  }
                >
                  <CodeCore />
                </Suspense>
              </SceneBoundary>
              <span className="sculpture-caption eyebrow">
                <span className="crosshair">+</span> ENGINEERED TO EVOLVE
              </span>
              <span className="drag-label eyebrow">↔ DRAG TO EXPLORE</span>
            </div>
            <div className="hero-aside">
              <span className="aside-line" />
              <p>
                Engineering the invisible.
                <br />
                Designing the unforgettable.
              </p>
              <span className="eyebrow">CODE. CRAFT. CONNECTION.</span>
            </div>
          </div>
          <div className="hero-bottom">
            <div className="hero-identity">
              <span className="eyebrow">THE ENGINEER BEHIND THE INTERFACE</span>
              <h2>
                SAMAD A. KHAN <ArrowUpRight size={24} />
              </h2>
              <p>
                Full Stack Developer <span>—</span> Nagpur, India
              </p>
            </div>
            <div className="hero-description">
              <p>
                Building scalable products, intelligent workflows
                <br className="desktop-break" /> & expressive digital
                experiences.
              </p>
              <Button asChild>
                <a href="#work">
                  EXPLORE SELECTED WORK <ArrowUpRight size={17} />
                </a>
              </Button>
            </div>
            <a
              className="scroll-cue"
              href="#work"
              aria-label="Scroll to selected work"
            >
              <ArrowDown size={20} />
              <span className="eyebrow">SCROLL TO DISCOVER</span>
            </a>
          </div>
          <div className="hero-baseline eyebrow">
            <span>21.1458° N / 79.0882° E</span>
            <span>01 / 06</span>
          </div>
        </section>
        <div className="ticker" aria-hidden="true">
          <span>THOUGHTFUL INTERFACES</span>
          <span>✳</span>
          <span>RELIABLE SYSTEMS</span>
          <span>✳</span>
          <span>REAL-WORLD IMPACT</span>
          <span>✳</span>
          <span>FULL STACK THINKING</span>
          <span>✳</span>
        </div>
        <section id="work" className="section work">
          <Label>02 / SELECTED ENGINEERING</Label>
          <div className="section-heading reveal">
            <h2>
              SYSTEMS THAT
              <br />
              DO MORE<span className="lime-period">.</span>
            </h2>
            <p>
              From real-time communication to intelligent business automation, I
              build products that turn complex workflows into useful
              experiences.
            </p>
          </div>
          <div className="project-list">
            {projects.map((p, i) => (
              <article key={p.id} className={`project project-${i} reveal`}>
                <div className="project-visual">
                  <div className="visual-header eyebrow">
                    <span>EXPLORATION / {p.id}</span>
                    <span>CONCEPTUAL INTERFACE PREVIEW</span>
                  </div>
                  <Preview projectName={p.name} />
                  <div className="visual-footer eyebrow">
                    <span>{p.category}</span>
                    <span>↗</span>
                  </div>
                </div>
                <div className="project-info">
                  <span className="project-number eyebrow">
                    PROJECT / {p.id}
                  </span>
                  <div className="project-title">
                    <h3>{p.name}</h3>
                    <button
                      className="circle-link"
                      onClick={() => setSelected(p)}
                      aria-label={`View ${p.name} case study`}
                    >
                      <ArrowUpRight />
                    </button>
                  </div>
                  <p>{p.description}</p>
                  <div className="tech-tags">
                    {p.stack.slice(0, 4).map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <button className="text-link" onClick={() => setSelected(p)}>
                    EXPLORE PROJECT <ArrowUpRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="expertise" className="section expertise">
          <Label>03 / TECHNICAL EXPERTISE</Label>
          <div className="section-heading reveal">
            <h2>
              DESIGN MINDED.
              <br />
              SYSTEM DRIVEN<span className="lime-period">.</span>
            </h2>
            <p>
              I work across the stack, connecting thoughtful interfaces with
              reliable APIs, data models, and application architecture.
            </p>
          </div>
          <div className="expertise-layout reveal">
            <div className="constellation" aria-hidden="true">
              <div className="constellation-ring r1" />
              <div className="constellation-ring r2" />
              <div className="constellation-ring r3" />
              <div className="core-label">
                FULL
                <br />
                STACK<span>CONNECTED BY CRAFT</span>
              </div>
              {["UI", "API", "DB", "RT", "DEV", "OPS"].map((s, i) => (
                <span
                  key={s}
                  className={`constellation-point point-${i} ${skill === i ? "selected" : ""}`}
                >
                  {s}
                </span>
              ))}
              <span className="constellation-caption eyebrow">
                ONE PERSPECTIVE. EVERY LAYER.
              </span>
            </div>
            <div className="skill-index">
              {skills.map(([title, tools], i) => (
                <div
                  key={title}
                  className={skill === i ? "skill active" : "skill"}
                >
                  <button
                    onClick={() => setSkill(skill === i ? -1 : i)}
                    aria-expanded={skill === i}
                    aria-controls={`skill-${i}`}
                  >
                    <span className="eyebrow">0{i + 1}</span>
                    {title}
                    {skill === i ? <Minus size={18} /> : <Plus size={18} />}
                  </button>
                  {skill === i && <p id={`skill-${i}`}>{tools}</p>}
                </div>
              ))}
              <small className="eyebrow skill-footnote">
                ALSO EXPLORING / PYTHON · C/C++
              </small>
            </div>
          </div>
        </section>
        <section id="experience" className="section experience">
          <Label>04 / PROFESSIONAL JOURNEY</Label>
          <div className="section-heading reveal">
            <h2>
              BUILT THROUGH
              <br />
              REAL WORK<span className="lime-period">.</span>
            </h2>
            <p>
              From the first reusable component to the systems behind a
              business. Always building. Always learning.
            </p>
          </div>
          {experience.map(([year, company, role, period, description], i) => (
            <article className="experience-row reveal" key={company}>
              <span className="experience-year">
                {year}
                <small>0{i + 1} / PROFESSIONAL EXPERIENCE</small>
              </span>
              <div>
                <div className="employer">
                  <h3>{company}</h3>
                  {i === 0 && (
                    <span className="current eyebrow">
                      <i />
                      CURRENT
                    </span>
                  )}
                </div>
                <div className="role-line">
                  <b>{role}</b>
                  <span>{period}</span>
                </div>
                <p>{description}</p>
              </div>
              <ArrowUpRight size={25} />
            </article>
          ))}
        </section>
        <section id="about" className="section about">
          <Label>05 / BEYOND THE CODE</Label>
          <div className="about-layout reveal">
            <div>
              <h2>
                CURIOUS
                <br />
                BY NATURE.
                <br />
                <span>ENGINEER</span>
                <br />
                BY PRACTICE.
              </h2>
              <div className="about-mark" aria-hidden="true">
                s/k<span>✳</span>
              </div>
            </div>
            <div className="about-copy">
              <p className="about-intro">
                I’m Samad A. Khan, a full-stack developer based in Nagpur,
                India.
              </p>
              <p>
                I build web applications, backend systems, and digital products
                that solve practical problems. My work spans real-time
                communication, business workflow platforms, recruitment
                automation, and intelligent billing systems.
              </p>
              <p>
                I enjoy understanding how systems work, designing clear
                solutions, and turning complex requirements into reliable
                applications.
              </p>
              <p className="belief">
                “Strong engineering combines technical precision, continuous
                learning, and thoughtful user experiences.”
              </p>
              {[
                [
                  "Education",
                  "B.Tech — Computer Science & Engineering",
                  "Priyadarshini Bhagwati College of Engineering · 2021–2025 · CGPA: 7.2/10",
                ],
                [
                  "Leadership",
                  "Learning beyond the classroom",
                  "Training & Placement Cell Coordinator · English Club Coordinator · College Kabaddi Team Captain",
                ],
                [
                  "Training",
                  "Expanding the toolkit",
                  "Cloud Computing & Microsoft Azure — KasNet Technologies. IoT & Embedded Systems — Agarkarmedia.",
                ],
              ].map(([title, lead, body]) => (
                <details key={title}>
                  <summary>
                    {title}
                    <Plus size={17} />
                  </summary>
                  <b>{lead}</b>
                  <p>{body}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="section contact">
          <Label>06 / START A CONVERSATION</Label>
          <p className="eyebrow contact-kicker">
            GOOD THINGS START WITH A CONVERSATION.
          </p>
          <h2 className="reveal">
            HAVE SOMETHING
            <br />
            WORTH BUILDING?
          </h2>
          <div className="contact-bottom">
            <h3>
              LET’S MAKE
              <br />
              <span>IT REAL.</span>
            </h3>
            <a href={email} className="contact-orb">
              LET’S TALK
              <ArrowUpRight size={38} />
            </a>
            <div className="contact-email">
              <span className="eyebrow">DROP ME A LINE</span>
              <a href={email}>
                Samadkhan040204@gmail.com <ArrowUpRight size={16} />
              </a>
              <span className="eyebrow">
                <i /> BASED IN NAGPUR. OPEN TO POSSIBILITIES.
              </span>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <a href="#home" className="monogram name-logo" aria-label="Samad Khan, back to top">
          Samad Khan<span>.</span>
        </a>
        <span>© 2026 SAMAD A. KHAN</span>
        <span>DESIGNED WITH INTENTION. ENGINEERED WITH PRECISION.</span>
        <a href="#home">
          BACK TO TOP <ArrowUp size={15} />
        </a>
      </footer>
      <Dialog
        open={!!selected}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        {selected && (
          <DialogContent>
            <Label>SELECTED ENGINEERING / {selected.id}</Label>
            <DialogTitle className="case-title">{selected.name}</DialogTitle>
            <DialogDescription className="case-description">
              {selected.description}
            </DialogDescription>
            <div className="case-role eyebrow">MY ROLE / {selected.role}</div>
            <h3>Implementation highlights</h3>
            <ul>
              {selected.highlights.map((h) => (
                <li key={h}>
                  <ArrowUpRight size={16} />
                  {h}
                </li>
              ))}
            </ul>
            <h3>Technology</h3>
            <div className="tech-tags">
              {selected.stack.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <p className="case-note">
              The interactive portfolio preview is a conceptual illustration,
              using sample data.
            </p>
            {selected.repo && <a href={selected.repo}>Repository ↗</a>}
            {selected.demo && <a href={selected.demo}>Live demo ↗</a>}
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
createRoot(document.getElementById("root")).render(<App />);
