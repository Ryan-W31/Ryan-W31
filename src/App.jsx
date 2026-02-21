import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink,
  Terminal,
  Code2,
  Cpu,
  Database,
  Cloud,
  ChevronDown
} from 'lucide-react';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-base font-sans overflow-x-hidden">
      {/* Navigation */}
      <motion.nav 
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'glass border-b border-highlight-med/30' : 'bg-transparent'}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.a 
              href="#" 
              className="flex items-center gap-2 group"
              whileHover={{ scale: 1.02 }}
            >
              <Terminal className="w-5 h-5 text-foam" />
              <span className="text-lg font-semibold text-text group-hover:text-foam transition-colors">
                Ryan Weisman
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-subtle hover:text-foam transition-colors link-hover"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Social Links - Desktop */}
            <div className="hidden md:flex items-center gap-4">
              <a href="https://github.com/Ryan-W31" target="_blank" rel="noopener noreferrer" 
                className="text-subtle hover:text-foam transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/ryanweisman/" target="_blank" rel="noopener noreferrer"
                className="text-subtle hover:text-foam transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-subtle hover:text-foam transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass border-t border-highlight-med/30"
            >
              <div className="px-4 py-4 space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 text-subtle hover:text-foam transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="flex gap-4 pt-4 border-t border-highlight-med/30">
                  <a href="https://github.com/Ryan-W31" target="_blank" rel="noopener noreferrer"
                    className="text-subtle hover:text-foam transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/in/ryanweisman/" target="_blank" rel="noopener noreferrer"
                    className="text-subtle hover:text-foam transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 text-xs font-medium bg-pine/10 text-pine rounded-full border border-pine/20">
                  Software Engineer @ Apple
                </span>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text mb-6">
                Hi, I'm <span className="gradient-text">Ryan</span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-lg text-subtle mb-6 max-w-lg">
                Building scalable systems and solving interesting problems. 
                Currently working on Apple's internal generative AI platform.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-8">
                <a 
                  href="#projects" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-foam text-base font-medium rounded-lg hover:bg-foam/90 transition-colors"
                >
                  View Projects
                  <ChevronDown className="w-4 h-4" />
                </a>
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 px-6 py-3 border border-foam/30 text-foam font-medium rounded-lg hover:bg-foam/10 transition-colors"
                >
                  Get in Touch
                </a>
              </motion.div>

              {/* Tech Stack Tags */}
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-2">
                {['Rust', 'Python', 'Java', 'Kubernetes', 'AWS', 'React'].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs text-muted border border-highlight-med rounded-md">
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Image */}
            <motion.div variants={scaleIn} className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-pine/20 to-iris/20 rounded-2xl blur-2xl" />
                <img 
                  src="/Ryan-W31/SF.jpeg" 
                  alt="Ryan in San Francisco" 
                  className="relative w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-2xl border-2 border-rose/30"
                />
                <motion.div 
                  className="absolute -bottom-4 -right-4 bg-surface border border-highlight-med px-4 py-2 rounded-lg shadow-xl"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-sm text-foam font-mono">Go Knights Go!</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-muted" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-text mb-6">
                A little about <span className="text-foam">me</span>
              </h2>
              <div className="space-y-4 text-subtle">
                <p>
                  I'm a Software Engineer at Apple in Austin, TX, working on the internal generative AI platform 
                  that powers RAG workflows for 200+ internal applications. I graduated from the University of 
                  Central Florida with a B.S. in Computer Science.
                </p>
                <p>
                  I love building things that are both functional and elegant — from terminal multiplexers in Rust 
                  to distributed systems handling millions of requests.
                </p>
              </div>

              {/* Developer Setup */}
              <div className="mt-8 p-6 bg-surface rounded-xl border border-highlight-med/30">
                <h3 className="text-lg font-semibold text-foam mb-4 flex items-center gap-2">
                  <Terminal className="w-5 h-5" />
                  Current Setup
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-gold">Font:</span>
                    <span className="text-text">Zed Mono</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gold">Editor:</span>
                    <span className="text-text">Neovim</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gold">Theme:</span>
                    <span className="text-text">Rosé Pine</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gold">Terminal:</span>
                    <span className="text-text">Ghostty</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div>
              <h3 className="text-xl font-semibold text-text mb-6">Interests & Hobbies</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { icon: '📚', label: 'Reading', desc: 'Brandon Sanderson' },
                  { icon: '⛳', label: 'Sports' },
                  { icon: '📷', label: 'Photography' },
                  { icon: '🥾', label: 'Hiking' },
                  { icon: '✈️', label: 'Traveling' },
                  { icon: '🏍️', label: 'Motorcycles' },
                ].map((item) => (
                  <motion.div 
                    key={item.label}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 bg-surface rounded-lg border border-highlight-med/30 hover:border-foam/30 transition-colors"
                  >
                    <span className="text-2xl mb-2 block">{item.icon}</span>
                    <span className="text-text font-medium">{item.label}</span>
                    {item.desc && <span className="text-xs text-muted block mt-1">{item.desc}</span>}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-surface/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">Experience</h2>
              <p className="text-subtle max-w-2xl mx-auto">
                I like making cool stuff and solving cool problems in cool (and efficient) ways.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Apple */}
              <motion.div 
                whileHover={{ y: -4 }}
                className="group bg-surface rounded-2xl p-8 border border-highlight-med/30 card-glow"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-pine/10 rounded-xl">
                      <Cpu className="w-6 h-6 text-pine" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foam">Apple, Inc.</h3>
                      <p className="text-sm text-iris">Software Engineer</p>
                    </div>
                  </div>
                  <span className="text-sm text-muted font-mono">Jan 2025 - Present</span>
                </div>
                <ul className="space-y-3 text-subtle">
                  <li className="flex items-start gap-3">
                    <span className="text-foam mt-1.5">•</span>
                    <span>Developing ingestion services for Apple's internal generative AI platform, powering RAG workflows for <strong className="text-text">200+</strong> internal applications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-foam mt-1.5">•</span>
                    <span>Designed scalable microservices using Kubernetes and Kafka for <strong className="text-text">3M+</strong> weekly requests</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-foam mt-1.5">•</span>
                    <span>Replaced legacy system with Java Spring solution, reducing ingestion time by <strong className="text-text">30%</strong></span>
                  </li>
                </ul>
              </motion.div>

              {/* Deltek */}
              <motion.div 
                whileHover={{ y: -4 }}
                className="group bg-surface rounded-2xl p-8 border border-highlight-med/30 card-glow"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-iris/10 rounded-xl">
                      <Database className="w-6 h-6 text-iris" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foam">Deltek, Inc.</h3>
                      <p className="text-sm text-iris">Data & Analytics Intern</p>
                    </div>
                  </div>
                  <span className="text-sm text-muted font-mono">Jun 2023 - Aug 2023</span>
                </div>
                <ul className="space-y-3 text-subtle">
                  <li className="flex items-start gap-3">
                    <span className="text-foam mt-1.5">•</span>
                    <span>Developed classification model for sales reps to identify favorable customer interactions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-foam mt-1.5">•</span>
                    <span>Refined classification algorithm achieving <strong className="text-text">98%</strong> accuracy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-foam mt-1.5">•</span>
                    <span>Engineered Python script using GPT-4, attaining <strong className="text-text">81%</strong> accuracy</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 text-center"
          >
            <figure className="inline-block">
              <img 
                src="/Ryan-W31/7854150432__MG_4043.jpg" 
                alt="Nassau, The Bahamas" 
                className="w-full max-w-md h-64 object-cover rounded-xl border border-rose/30"
              />
              <figcaption className="mt-3 text-sm text-muted">
                Snapped in Nassau, The Bahamas
              </figcaption>
            </figure>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">Projects</h2>
              <p className="text-subtle max-w-2xl mx-auto">
                School and personal projects I've worked on. Click any card to view on GitHub.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {[
                {
                  name: 'remux',
                  tech: 'Rust',
                  icon: Terminal,
                  iconColor: 'text-rose',
                  bgColor: 'bg-rose/10',
                  description: 'Revamping tmux by building a terminal multiplexer from the ground up using Rust.',
                  href: 'https://github.com/Prometheus1400/remux'
                },
                {
                  name: 'myGPT-2',
                  tech: 'Python | PyTorch',
                  icon: Code2,
                  iconColor: 'text-gold',
                  bgColor: 'bg-gold/10',
                  description: 'Built a 124M+ parameter GPT-2 clone with Hugging Face FineWeb-Edu dataset for training.',
                  highlights: ['124M+ parameters', '10B token dataset', 'CUDA & distributed processing'],
                  href: 'https://github.com/Ryan-W31/myGPT2'
                },
                {
                  name: 'QBxR',
                  tech: 'MongoDB | Express | React | Node | AWS',
                  icon: Cloud,
                  iconColor: 'text-pine',
                  bgColor: 'bg-pine/10',
                  description: 'NFL Quarterback Rating System — Senior capstone project with Agile methodology.',
                  highlights: ['Project Manager', '150+ page tech doc', '5+ AWS products'],
                  href: 'https://github.com/Ryan-W31/QBxR'
                },
                {
                  name: 'PL/0 Virtual Machine',
                  tech: 'C',
                  icon: Cpu,
                  iconColor: 'text-iris',
                  bgColor: 'bg-iris/10',
                  description: 'Compiler with syntax parser and code generator, plus assembler and virtual machine.',
                  href: 'https://github.com/Ryan-W31/PL0-Compiler'
                }
              ].map((project, index) => (
                <motion.a
                  key={project.name}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group block bg-surface rounded-2xl p-8 border border-highlight-med/30 hover:border-foam/30 transition-all card-glow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 ${project.bgColor} rounded-xl`}>
                        <project.icon className={`w-6 h-6 ${project.iconColor}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foam group-hover:text-foam/80 transition-colors">
                          {project.name}
                        </h3>
                        <p className="text-sm text-iris">{project.tech}</p>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted group-hover:text-foam transition-colors" />
                  </div>
                  <p className="text-subtle mb-4">{project.description}</p>
                  {project.highlights && (
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((highlight) => (
                        <span key={highlight} className="px-2 py-1 text-xs bg-highlight-low text-muted rounded">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 text-center"
          >
            <figure className="inline-block">
              <img 
                src="/Ryan-W31/_MG_9862.jpg" 
                alt="Chimney Rock, NC" 
                className="w-full max-w-md h-64 object-cover rounded-xl border border-rose/30"
              />
              <figcaption className="mt-3 text-sm text-muted">
                Taken in Chimney Rock, NC
              </figcaption>
            </figure>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-surface/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">Get in Touch</h2>
            <p className="text-subtle max-w-2xl mx-auto mb-12">
              Interested in collaborating or just want to chat? Feel free to reach out.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <a 
                href="mailto:ryan.weisman.512@gmail.com"
                className="flex items-center gap-3 px-8 py-4 bg-foam text-base font-medium rounded-xl hover:bg-foam/90 transition-colors"
              >
                <Mail className="w-5 h-5" />
                ryan.weisman.512@gmail.com
              </a>
            </div>

            <div className="flex items-center justify-center gap-6">
              <a 
                href="https://github.com/Ryan-W31" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-subtle hover:text-foam transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/ryanweisman/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-subtle hover:text-foam transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* Hometown Photo */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 text-center"
          >
            <figure className="inline-block">
              <img 
                src="/Ryan-W31/IMG_0624.JPG" 
                alt="Henderson, NV" 
                className="w-full max-w-lg h-64 object-cover rounded-xl border border-rose/30"
              />
              <figcaption className="mt-3 text-sm text-muted">
                My hometown — Henderson, NV (just outside Las Vegas)
              </figcaption>
            </figure>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-highlight-med/30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Ryan Weisman. Built with React & Tailwind CSS.
          </p>
          <p className="text-sm text-muted">
            Theme: <span className="text-rose">Rosé Pine</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
