import { useState, useEffect, useRef } from 'react'
import './App.css'

const heroQuotes = [
  { text: "You don't have to carry this", em: "alone." },
  { text: "Your feelings are valid, and you are", em: "enough." },
  { text: "Healing takes time, and we are here", em: "with you." },
  { text: "It is okay to ask for", em: "help." },
  { text: "You are stronger than your", em: "darkest days." },
  { text: "Take a deep breath; we are in this", em: "together." },
]

const inspiringQuotes = [
  { quote: "Be the change you wish to see in the world.", author: "Mahatma Gandhi" },
  { quote: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
  { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { quote: "You are braver than you believe, stronger than you seem, and smarter than you think.", author: "A.A. Milne" },
  { quote: "The only way out is through.", author: "Robert Frost" },
  { quote: "Fall seven times, stand up eight.", author: "Japanese Proverb" },
  { quote: "Not until we are lost do we begin to find ourselves.", author: "Henry David Thoreau" },
]

const features = [
  {
    icon: "🧘",
    title: "Guided Meditation",
    desc: "Calm your mind with science-backed breathing exercises and mindfulness sessions designed for any emotional state.",
    status: "available",
  },
  {
    icon: "💬",
    title: "Safe Conversations",
    desc: "Connect with trained listeners who genuinely care. Share what's on your heart without fear of judgment.",
    status: "coming-soon",
  },
  {
    icon: "📓",
    title: "Mood Journaling",
    desc: "Track how you feel each day. Noticing patterns is the first step toward understanding yourself better.",
    status: "coming-soon",
  },
  {
    icon: "🌙",
    title: "Sleep Stories",
    desc: "Wind down with calming narratives and soundscapes that ease anxiety and prepare your mind for rest.",
    status: "coming-soon",
  },
  {
    icon: "📚",
    title: "Learning Resources",
    desc: "Evidence-based articles, videos, and tools to help you understand your mental health journey.",
    status: "available",
  },
  {
    icon: "🤝",
    title: "Community Support",
    desc: "Join a warm, moderated community of people who understand. You are never as alone as you feel.",
    status: "coming-soon",
  },
]

const steps = [
  { num: "01", title: "Create Your Space", desc: "Set up your free account in under a minute. No history, no judgment — just a blank, welcoming slate." },
  { num: "02", title: "Tell Us How You Feel", desc: "Complete a gentle, private check-in so we can personalise the experience around what you actually need today." },
  { num: "03", title: "Explore at Your Pace", desc: "Browse tools, sessions, and resources whenever you're ready. There's no rush and no wrong way to use Helping Hands." },
  { num: "04", title: "Grow, Gently", desc: "Watch yourself build resilience over time. Celebrate small wins and acknowledge how far you've come." },
]

const articles = [
  {
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=75&auto=format&fit=crop",
    tag: "Mindfulness",
    title: "5 Breathing Techniques for Anxiety",
    desc: "Simple, science-backed exercises you can do anywhere when the world feels too loud.",
  },
  {
    img: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=600&q=75&auto=format&fit=crop",
    tag: "Self-Care",
    title: "The Art of Doing Nothing at All",
    desc: "Rest is not laziness. Here's why giving yourself permission to pause is an act of courage.",
  },
  {
    img: "https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?w=600&q=75&auto=format&fit=crop",
    tag: "Connection",
    title: "How to Ask for Help When It's Hard",
    desc: "Reaching out can feel impossible. These gentle steps make the first move a little easier.",
  },
]

export default function App() {
  const [navScrolled, setNavScrolled] = useState(false)
  const [heroQuote] = useState(() => heroQuotes[Math.floor(Math.random() * heroQuotes.length)])
  const [inspiring] = useState(() => inspiringQuotes[Math.floor(Math.random() * inspiringQuotes.length)])
  const [notified, setNotified] = useState({})
  const revealRefs = useRef([])

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    revealRefs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const r = (el) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el)
  }

  const handleNotify = (title) => {
    setNotified(prev => ({ ...prev, [title]: true }))
  }

  return (
    <>
      {/* ── NAVBAR ── */}
      <nav className={navScrolled ? 'scrolled' : ''}>
        <a href="/" className="nav-logo">Helping<span>Hands</span></a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#resources">Resources</a></li>
          <li><a href="#support" className="nav-cta">Get Support</a></li>
        </ul>
      </nav>

      {/* ── HERO ── */}
      <div className="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="eyebrow-dot" />
            A safe place for you
          </div>
          <h1 className="hero-title">
            {heroQuote.text} <em>{heroQuote.em}</em>
          </h1>
          <p className="hero-subtitle">
            Helping Hands is a gentle space where healing begins. Whether you need someone to talk to, tools to cope, or simply to feel understood — you belong here.
          </p>
          <div className="hero-actions">
            <a href="#features" className="btn-primary">
              Begin Your Journey
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#about" className="btn-ghost">Learn More</a>
          </div>
        </div>
        <div className="scroll-hint" aria-hidden="true">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </div>

      {/* ── TRUST BAR ── */}
      <div className="trust-bar">
        <div className="trust-item"><span className="trust-icon">🔒</span><span>100% Confidential</span></div>
        <div className="trust-item"><span className="trust-icon">🌿</span><span>Judgment-Free Zone</span></div>
        <div className="trust-item"><span className="trust-icon">💙</span><span>Available 24 / 7</span></div>
      </div>

      {/* ── QUOTE BANNER ── */}
      <div className="quote-banner">
        <div className="quote-inner reveal" ref={r}>
          <blockquote>"{inspiring.quote}"</blockquote>
          <cite>— {inspiring.author}</cite>
        </div>
      </div>

      {/* ── FEATURES / PILLARS ── */}
      <div className="pillars-wrap" id="features">
        <div className="pillars-inner">
          <div className="pillars-header reveal" ref={r}>
            <div>
              <div className="section-tag">What We Offer</div>
              <h2 className="section-title">Everything you need to feel <em>supported</em></h2>
            </div>
            <p className="section-body">
              We've built Helping Hands with one purpose in mind — to be there for you in every moment, no matter what you're going through.
            </p>
          </div>

          <div className="pillars-grid">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="pillar-card reveal"
                ref={r}
                style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
              >
                {f.status === 'coming-soon' && (
                  <span className="coming-badge">Coming Soon</span>
                )}
                <div className="pillar-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
                {f.status === 'available' ? (
                  <button className="feature-btn available">Explore →</button>
                ) : notified[f.title] ? (
                  <button className="feature-btn notified" disabled>✓ We'll let you know</button>
                ) : (
                  <button className="feature-btn notify" onClick={() => handleNotify(f.title)}>
                    Notify Me When Ready
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── HOW IT WORKS ── */}
      <section id="about">
        <div className="section-tag reveal" ref={r}>How It Works</div>
        <h2 className="section-title reveal" ref={r}>Your path to <em>peace</em>, step by step</h2>
        <div className="steps-grid">
          {steps.map((s, i) => (
            <div key={s.num} className="step reveal" ref={r} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="step-num">{s.num}</div>
              <div className="step-divider" />
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── RESOURCES ── */}
      <div className="resources-wrap" id="resources">
        <div className="resources-inner">
          <div className="section-tag reveal" ref={r}>Gentle Reads</div>
          <h2 className="section-title reveal" ref={r}>Words that <em>help</em></h2>
          <div className="resources-grid">
            {articles.map((a, i) => (
              <div key={a.title} className="resource-card reveal" ref={r} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="resource-img" style={{ backgroundImage: `url('${a.img}')` }} />
                <div className="resource-body">
                  <div className="resource-tag">{a.tag}</div>
                  <h3>{a.title}</h3>
                  <p>{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CRISIS BANNER ── */}
      <div className="crisis-banner reveal" ref={r} id="support">
        <div className="crisis-text">
          <h3>Are you in crisis right now?</h3>
          <p>You are not alone. Help is available — please reach out immediately.</p>
        </div>
        <div className="crisis-actions">
          <a href="tel:1800-273-8255" className="crisis-btn">📞 Call a Helpline</a>
          <a href="#" className="crisis-btn-ghost">Chat with Someone Now</a>
        </div>
      </div>

      {/* ── TRUST BAR (bottom) ── */}
      <div className="trust-bar">
        <div className="trust-item"><span className="trust-icon">🔒</span><span>100% Confidential</span></div>
        <div className="trust-item"><span className="trust-icon">🌿</span><span>Judgment-Free Zone</span></div>
        <div className="trust-item"><span className="trust-icon">💙</span><span>Available 24 / 7</span></div>
      </div>

      {/* ── FOOTER ── */}
      <footer>
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <a href="/" className="nav-logo footer-logo">Helping<span>Hands</span></a>
              <p>A gentle digital space dedicated to mental wellness, healing, and the belief that every person deserves to feel at peace.</p>
            </div>
            <div className="footer-col">
              <h4>Support</h4>
              <ul>
                <li><a href="#">Crisis Line</a></li>
                <li><a href="#">Talk to Someone</a></li>
                <li><a href="#">Find a Therapist</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Explore</h4>
              <ul>
                <li><a href="#">Meditation</a></li>
                <li><a href="#">Journaling</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#">Resources</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>About</h4>
              <ul>
                <li><a href="#">Our Mission</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Helping Hands. Made with care for every soul.</p>
            <p>If you are in immediate danger, please call your local emergency services.</p>
          </div>
        </div>
      </footer>
    </>
  )
}