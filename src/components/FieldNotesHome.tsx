import "./field-notes.css";
import { Jimmy, ProjectBunny, TrailSnail, Frog } from "./FieldAnimals";

const work = [
  { year: 2026, label: "PERSONAL / DATA VISUALIZATION", title: "P.R.N.D.L NYC",
    href: "https://nyc-city-patterns-2026.bryanryu97.chatgpt.site/",
    summary: "Park at youR owN risk Dude Lol",
    details: "Built in ChatGPT, P.R.N.D.L NYC turns NYC parking-ticket data into an interactive map and a location-based risk score. Park at your own risk!",
    tags: ["ChatGPT", "NYC Open Data", "Data visualization"], tone: "cream" },
  { year: 2020, label: "PERSONAL / MOBILE", title: "Cook’d",
    href: "https://github.com/Do-Jest-While-True",
    summary: "A social recipe app for sharing what’s cooking.",
    details: "I built a React Native social recipe app and led user research, prioritization, and iterative product development.",
    tags: ["React Native", "User research", "Product development"], tone: "dark" },
  { year: 2021, label: "PERSONAL / MACHINE LEARNING", title: "Twitter Chatbot",
    href: "https://github.com/bryanryu1/twitter_project",
    summary: "An early experiment in generative conversation.",
    details: "A generative chatbot trained on tweets from Twitter (R.I.P.) to produce casual, conversational output.",
    tags: ["Python", "TensorFlow", "NLP"], tone: "lime" },
].sort((a, b) => b.year - a.year);

const journey = [
  {
    number: "01",
    heading: "Read and wrote a lot, really fast",
    place: "Rutgers University · 2020",
    role: "Philosophy",
    description: "Studied how to reason clearly, test assumptions, and make an argument that holds up.",
  },
  {
    number: "02",
    heading: "Let's learn to code!",
    place: "Fullstack Academy · 2020",
    role: "Software engineering bootcamp",
    description: "Learned to turn ideas into working software and found a lasting interest in the space between users and systems.",
  },
  {
    number: "03",
    heading: "Inside the system",
    place: "Connatix · 2021–2022",
    role: "Solutions Engineer",
    description: "Developed and deployed custom customer solutions with JavaScript, HTML, and CSS.",
  },
  {
    number: "04",
    heading: "Closer to the customer",
    place: "Aircall · 2022–2025",
    role: "Solutions engineering",
    description: "Grew from associate to senior solutions engineer, focused on both presales and postsales. Named Aircall’s 2024 Global Top Performer and led research for a WhatsApp integration proposal.",
  },
  {
    number: "05",
    heading: "The threads connect",
    place: "Aircall · 2025–now",
    role: "Product management",
    description: "Moved into product: first owning HubSpot and platform work, now leading integrations, MCP, and AI Voice Agent Integrations as Senior Product Manager.",
  },
];

export function FieldNotesHome() {
  return (
    <div className="field-site" id="top">
      <a className="field-skip" href="#work">Skip to personal projects</a>
      <header className="field-header">
        <a className="field-wordmark" href="#top" aria-label="Bryan Ryu, back to top">
          <span className="field-wordmark-mark">br<span>.</span></span>
          <span className="field-wordmark-caption">FIELD NOTES<br />BY BRYAN RYU</span>
        </a>
        <nav aria-label="Main navigation" className="field-nav">
          <a href="#work">Projects</a>
          <a href="#journey">Journey</a>
          <a href="#about">About</a>
          <a className="field-nav-contact" href="mailto:hello@bryanryu.me">Say hello <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <main>
        <section className="field-hero" aria-labelledby="hero-title">
          <div className="field-hero-copy">
            <div className="field-kicker"><span className="field-kicker-line" /> NEW YORK, NY <span className="field-kicker-star">✳</span> SENIOR PRODUCT MANAGER</div>
            <h1 id="hero-title">Hi, I’m Bryan.<br /><em>I connect</em> the dots.</h1>
            <p className="field-hero-deck">I build products at the intersection of people, complex systems, and useful AI. Currently leading integrations for humans, AI tools, and AI agents at Aircall.</p>
            <div className="field-hero-actions">
              <a className="field-button-primary" href="#work">Explore my projects <span aria-hidden="true">↗</span></a>
              <a className="field-button-text" href="/Bryan_Ryu_Resume_2026.pdf" target="_blank" rel="noreferrer">View resume <span aria-hidden="true">↗</span></a>
            </div>
            <div className="field-hero-caption">A living record of what I’ve built, learned, and followed.</div>
          </div>
          <div className="field-dog-scene">
            <Jimmy />
          </div>
        </section>

        <div className="field-marquee" aria-hidden="true"><span>PRODUCT THINKING</span><i>✳</i><span>TECHNICAL DEPTH</span><i>✳</i><span>HUMAN CURIOSITY</span><i>✳</i><span>PRODUCT THINKING</span></div>

        <section id="work" className="field-section field-work" aria-labelledby="work-title">
          <div className="field-section-top"><span>01 / PERSONAL PROJECTS</span><span>SELECTED NOTES, 2020–NOW</span></div>
          <div className="field-section-heading">
            <div><span className="field-eyebrow">THINGS OUT IN THE WORLD</span><h2 id="work-title">Side quests<span className="field-period">.</span></h2></div>
            <p>Things I’ve built outside work. A small collection for now, with more experiments on the way. Open a note to look inside.</p>
          </div>
          <div className="field-work-grid">
            {work.map((item) => (
              <details key={item.href} className={`field-work-card field-tone-${item.tone}`}>
                <summary>
                  <div className="field-card-meta"><span>{item.year} / {item.label}</span><a className="field-card-open" href={item.href} target="_blank" rel="noopener noreferrer" aria-label={`View ${item.title} (opens in a new tab)`}>↗</a></div>
                  <h3><a href={item.href} target="_blank" rel="noopener noreferrer">{item.title}</a></h3>
                  <p>{item.summary}</p>
                  <div className="field-card-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <span className="field-card-prompt">Note <span aria-hidden="true">+</span></span>
                </summary>
                <div className="field-card-detail"><p>{item.details}</p></div>
              </details>
            ))}
          </div>
          <p className="field-work-footnote">Explore the live projects and code. More experiments on the way.</p>
          <ProjectBunny />
        </section>

        <section id="journey" className="field-section field-journey" aria-labelledby="journey-title">
          <div className="field-section-top"><span>02 / THE WINDING ROUTE</span><span>FIVE STOPS, ONE THREAD</span></div>
          <div className="field-journey-intro">
            <div><span className="field-eyebrow">HOW I GOT HERE</span><h2 id="journey-title">The scenic route<span className="field-period">.</span></h2></div>
            <p>Philosophy taught me to ask. Engineering taught me to make. Solutions engineering put me beside the customer. Product brought the pieces together.</p>
          </div>
          <div className="field-trail" role="list">
            {journey.map((stop, index) => (
              <article key={stop.number} className={`field-stop field-stop-${index + 1}`} role="listitem">
                <div className="field-stop-marker">{stop.number}</div>
                <div className="field-stop-card">
                  <span>{stop.place}</span>
                  <h3>{stop.heading}</h3>
                  <strong>{stop.role}</strong>
                  <p>{stop.description}</p>
                </div>
              </article>
            ))}
            <TrailSnail />
          </div>
        </section>

        <section id="about" className="field-about" aria-labelledby="about-title">
          <div className="field-about-inner">
            <div><span className="field-eyebrow">03 / OFF THE CLOCK</span><h2 id="about-title">A little more<br /><em>human</em> than a resume.</h2></div>
            <div className="field-about-copy">
              <p>I’m a product manager with a solutions engineering background and a soft spot for useful tools, customer problems, and the systems behind them.</p>
              <p>Outside work, you’ll usually find me bouldering, looking for good coffee, or training Muay Thai.</p>
              <div className="field-about-links"><a href="mailto:hello@bryanryu.me">Email me ↗</a><a href="https://www.linkedin.com/in/bryan-ryu/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="/Bryan_Ryu_Resume_2026.pdf" target="_blank" rel="noreferrer">Resume ↗</a></div>
            </div>
            <Frog />
          </div>
        </section>
      </main>
      <footer className="field-footer"><span>© 2026 BRYAN RYU</span><span>MADE WITH CURIOSITY · NEW YORK, NY</span><a href="#top">BACK TO TOP ↑</a></footer>
    </div>
  );
}
