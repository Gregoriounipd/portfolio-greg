'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Hero Icons - npm install @heroicons/react
import { 
  Bars3Icon, 
  XMarkIcon,
  CodeBracketIcon,
  ComputerDesktopIcon,
  RocketLaunchIcon,
  GlobeAltIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  EnvelopeIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Gestione scroll per navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Dati dei progetti
  const projects = [
    {
      title: 'AdoriEvents.com',
      description: 'Piattaforma completa per la pianificazione di eventi con design moderno e funzionalità avanzate.',
      features: ['Gestione eventi completa', 'Design responsive', 'Integrazione Google Forms', 'SEO ottimizzato'],
      tech: ['Next.js', 'React', 'Tailwind CSS', 'Supabase'],
      link: 'https://adorievents.com',
      color: 'amber',
      icon: <RocketLaunchIcon className="w-6 h-6" />
    },
    {
      title: 'Itinerari Accessibili',
      description: 'Soluzione digitale per i Musei dell\'Università di Padova con focus sull\'accessibilità.',
      features: ['WCAG 2.1 AA', 'Tour virtuali', 'Multilingue', 'Database accessibile'],
      tech: ['Next.js', 'Accessibility', 'i18n', 'Vercel'],
      link: 'https://itinerariaccessibili.com',
      color: 'blue',
      icon: <GlobeAltIcon className="w-6 h-6" />
    }
  ]

  // Dati dei servizi
  const services = [
    {
      title: 'Sviluppo Web Completo',
      description: 'Creazione di siti web moderni e performanti con Next.js e React.',
      features: ['Single Page Applications', 'E-commerce', 'Progressive Web Apps'],
      icon: <CodeBracketIcon className="w-8 h-8" />,
      color: 'amber'
    },
    {
      title: 'Accessibilità Digitale',
      description: 'Soluzioni web accessibili che rispettano gli standard WCAG 2.1 AA.',
      features: ['Audit di accessibilità', 'Implementazione WCAG', 'Testing screen reader'],
      icon: <ComputerDesktopIcon className="w-8 h-8" />,
      color: 'blue'
    },
    {
      title: 'Ottimizzazione & SEO',
      description: 'Miglioro prestazioni e visibilità del tuo sito web.',
      features: ['Core Web Vitals', 'SEO tecnico', 'Performance optimization'],
      icon: <RocketLaunchIcon className="w-8 h-8" />,
      color: 'gradient'
    }
  ]

  // Tecnologie
  const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Supabase', icon: '🗄️' },
    { name: 'Vercel', icon: '▲' },
    { name: 'Git', icon: '📦' },
  ]

  return (
    <>
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-brand-amber-700 to-brand-blue-800 bg-clip-text text-transparent">
                Greg
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#home" className="text-gray-700 hover:text-brand-amber-700 transition">
                Home
              </Link>
              <Link href="#progetti" className="text-gray-700 hover:text-brand-amber-700 transition">
                Progetti
              </Link>
              <Link href="/servizi" className="text-gray-700 hover:text-brand-amber-700 transition">
                Servizi
              </Link>
              <Link href="#tecnologie" className="text-gray-700 hover:text-brand-amber-700 transition">
                Tech Stack
              </Link>
              <Link href="#contatti" className="px-4 py-2 bg-gradient-to-r from-brand-amber-600 to-brand-blue-800 text-white rounded-lg hover:opacity-90 transition">
                Contattami
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <Link href="#home" className="text-gray-700 hover:text-brand-amber-700">
                  Home
                </Link>
                <Link href="#progetti" className="text-gray-700 hover:text-brand-amber-700">
                  Progetti
                </Link>
                <Link href="/servizi" className="text-gray-700 hover:text-brand-amber-700">
                  Servizi
                </Link>
                <Link href="#tecnologie" className="text-gray-700 hover:text-brand-amber-700">
                  Tech Stack
                </Link>
                <Link href="#contatti" className="text-brand-amber-700 font-semibold">
                  Contattami
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-up">
              Ciao, sono <span className="bg-gradient-to-r from-brand-amber-700 to-brand-blue-800 bg-clip-text text-transparent">Greg</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-8">
              Web Developer | Specialista Next.js & React
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Trasformo idee in esperienze digitali moderne e accessibili. 
              Specializzato in sviluppo web con Next.js, React e Tailwind CSS, 
              creo soluzioni che uniscono design elegante e prestazioni eccellenti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#progetti"
                className="px-8 py-4 bg-gradient-to-r from-brand-amber-600 to-brand-blue-800 text-white rounded-lg font-semibold hover:opacity-90 transition transform hover:scale-105 inline-flex items-center justify-center"
              >
                Scopri i miei progetti
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="#contatti"
                className="px-8 py-4 border-2 border-brand-blue-800 text-brand-blue-800 rounded-lg font-semibold hover:bg-brand-blue-800 hover:text-white transition inline-flex items-center justify-center"
              >
                Lavoriamo insieme
                <EnvelopeIcon className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="progetti" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Progetti <span className="bg-gradient-to-r from-brand-amber-700 to-brand-blue-800 bg-clip-text text-transparent">In Evidenza</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Esplora alcuni dei miei lavori più recenti, dove innovazione e accessibilità si incontrano
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-br ${
                  project.color === 'amber' 
                    ? 'from-amber-50 to-orange-50' 
                    : 'from-blue-50 to-indigo-50'
                } rounded-2xl overflow-hidden shadow-lg`}
              >
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${
                      project.color === 'amber' 
                        ? 'bg-brand-amber-600' 
                        : 'bg-brand-blue-800'
                    } rounded-lg flex items-center justify-center text-white mr-4`}>
                      {project.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                  </div>
                  
                  <p className="text-gray-700 mb-6">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Caratteristiche principali:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-600">
                          <CheckCircleIcon className={`w-5 h-5 mr-2 ${
                            project.color === 'amber' ? 'text-brand-amber-600' : 'text-brand-blue-600'
                          }`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className={`px-3 py-1 ${
                          project.color === 'amber'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-blue-100 text-blue-800'
                        } rounded-full text-sm font-medium`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center ${
                      project.color === 'amber' 
                        ? 'text-brand-amber-600 hover:text-brand-amber-700' 
                        : 'text-brand-blue-600 hover:text-brand-blue-700'
                    } font-semibold`}
                  >
                    Visita il sito
                    <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servizi" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              I Miei <span className="bg-gradient-to-r from-brand-amber-700 to-brand-blue-800 bg-clip-text text-transparent">Servizi</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Offro soluzioni complete per portare la tua presenza digitale al livello successivo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className={`w-16 h-16 ${
                  service.color === 'amber' 
                    ? 'bg-gradient-to-br from-amber-500 to-amber-600'
                    : service.color === 'blue'
                    ? 'bg-gradient-to-br from-blue-700 to-blue-800'
                    : 'bg-gradient-to-r from-brand-amber-600 to-brand-blue-800'
                } rounded-xl flex items-center justify-center mb-6 text-white`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <CheckCircleIcon className="w-5 h-5 mr-2 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Pricing - PREZZI AGGIORNATI */}
          <div className="mt-16 text-center bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Investimento Trasparente</h3>
            <p className="text-gray-600 mb-6">
              Soluzioni professionali per ogni budget
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-brand-amber-600">€300</p>
                <p className="text-gray-600">Starter</p>
                <p className="text-sm text-gray-500 mt-1">Sito base</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-brand-blue-800">€800</p>
                <p className="text-gray-600">Professional</p>
                <p className="text-sm text-gray-500 mt-1">Più richiesto</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold bg-gradient-to-r from-brand-amber-700 to-brand-blue-800 bg-clip-text text-transparent">€1500+</p>
                <p className="text-gray-600">Enterprise</p>
                <p className="text-sm text-gray-500 mt-1">Progetti complessi</p>
              </div>
            </div>
            <Link 
              href="/servizi"
              className="inline-block mt-8 px-6 py-3 bg-gradient-to-r from-brand-amber-600 to-brand-blue-800 text-white rounded-lg font-semibold hover:opacity-90 transition"
            >
              Scopri Tutti i Servizi
            </Link>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="tecnologie" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Stack <span className="bg-gradient-to-r from-brand-amber-700 to-brand-blue-800 bg-clip-text text-transparent">Tecnologico</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Utilizzo le tecnologie più moderne per creare soluzioni robuste e scalabili
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="text-4xl mb-3">{tech.icon}</div>
                <p className="font-semibold text-gray-800">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Perché Scegliere <span className="bg-gradient-to-r from-brand-amber-700 to-brand-blue-800 bg-clip-text text-transparent">Me?</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Prezzi Onesti</h3>
              <p className="text-gray-600">
                Risparmia fino al 70% rispetto alle agenzie tradizionali, 
                mantenendo qualità professionale
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tecnologie Moderne</h3>
              <p className="text-gray-600">
                Le stesse tecnologie usate da Netflix e Airbnb per 
                garantire velocità e scalabilità
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Supporto Diretto</h3>
              <p className="text-gray-600">
                Parli direttamente con me, non con intermediari. 
                Modifiche rapide e comunicazione chiara
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-amber-600 to-brand-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto a Dare Vita al Tuo Progetto?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Trasformiamo insieme la tua idea in una realtà digitale di successo
          </p>
          <Link 
            href="#contatti"
            className="inline-block px-8 py-4 bg-white text-brand-blue-800 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105"
          >
            Richiedi un Preventivo Gratuito
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contatti" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Lavoriamo <span className="bg-gradient-to-r from-brand-amber-700 to-brand-blue-800 bg-clip-text text-transparent">Insieme</span>
            </h2>
            <p className="text-lg text-gray-600">
              Preventivi gratuiti in 24 ore. Parliamo del tuo progetto!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contattami</h3>
              <div className="space-y-4">
                <a 
                  href="https://www.fiverr.com/yourusername" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-brand-amber-600 transition"
                >
                  <span className="mr-3">💼</span> Fiverr Profile
                </a>
                <a 
                  href="mailto:gregoriomangione8@gmail.com"
                  className="flex items-center text-gray-700 hover:text-brand-amber-600 transition"
                >
                  <span className="mr-3">✉️</span> Email
                </a>
                <a 
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-brand-amber-600 transition"
                >
                  <span className="mr-3">💼</span> LinkedIn
                </a>
                <a 
                  href="https://github.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-brand-amber-600 transition"
                >
                  <span className="mr-3">🐙</span> GitHub
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Cosa Posso Fare Per Te</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 mt-1 mr-3 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Sviluppo siti web professionali e moderni</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 mt-1 mr-3 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Migrazione e modernizzazione di siti esistenti</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 mt-1 mr-3 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Implementazione di funzionalità personalizzate</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 mt-1 mr-3 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Consulenza su accessibilità e UX</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-brand-amber-100 to-brand-blue-100 rounded-xl text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              💡 Un sito web professionale è un investimento
            </h3>
            <p className="text-gray-700">
              Con un sito fatto bene, attiri nuovi clienti 24/7. 
              Il ritorno sull'investimento arriva già nei primi 2-3 mesi.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mb-4">© 2025 Greg - Web Developer. Tutti i diritti riservati.</p>
            <p className="text-gray-400">
              Creato con <span className="text-red-500">❤️</span> utilizzando le tecnologie che amo
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}