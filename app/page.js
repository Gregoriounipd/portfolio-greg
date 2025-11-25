'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar.js'




// Heroicons di react
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
      color: 'blue',
      icon: <RocketLaunchIcon className="w-6 h-6" />
    },
    {
      title: 'Itinerari Accessibili',
      description: 'Soluzione digitale per i Musei dell\'Università di Padova con focus sull\'accessibilità.',
      features: ['WCAG 2.1 AA', 'Tour virtuali', 'Multilingue', 'Database accessibile'],
      tech: ['Next.js', 'Accessibility', 'i18n', 'Vercel'],
      link: 'https://itinerariaccessibili.com',
      color: 'purple',
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
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-up">
              Ciao, sono <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Greg</span>
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
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:opacity-90 transition transform hover:scale-105 inline-flex items-center justify-center"
              >
                Scopri i miei progetti
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="#contatti"
                className="px-8 py-4 border-2 border-brand-blue-800 text-purple-600 rounded-lg font-semibold hover:bg-brand-blue-800 hover:text-white transition inline-flex items-center justify-center"
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
              Progetti <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">In Evidenza</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Esplora alcuni dei miei lavori più recenti, dove innovazione e accessibilità si incontrano
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-br ${project.color === 'amber'
                    ? 'from-amber-50 to-orange-50'
                    : 'from-blue-50 to-indigo-50'
                  } rounded-2xl overflow-hidden shadow-lg`}
              >
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${project.color === 'amber'
                        ? 'bg-brand-purple-500'
                        : 'bg-brand-blue-600'
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
                          <CheckCircleIcon className={`w-5 h-5 mr-2 ${project.color === 'amber' ? 'text-blue-500' : 'text-brand-blue-600'
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
                        className={`px-3 py-1 ${project.color === 'amber'
                            ? 'bg-amber-100 text-brand-purple-600'
                            : 'bg-blue-100 text-brand-blue-700'
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
                    className={`inline-flex items-center ${project.color === 'amber'
                        ? 'text-blue-500 hover:text-blue-600'
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
              I Miei <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Servizi</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Offro soluzioni complete per portare la tua presenza digitale al livello successivo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className={`w-16 h-16 ${service.color === 'amber'
                    ? 'bg-gradient-to-br from-blue-500 to-blue-600'
                    : service.color === 'blue'
                      ? 'bg-gradient-to-br from-blue-700 to-blue-800'
                      : 'bg-gradient-to-r from-blue-500 to-purple-600'
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
                <p className="text-3xl font-bold text-blue-500">200€</p>
                <p className="text-gray-600">Starter</p>
                <p className="text-sm text-gray-500 mt-1">Sito base</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-purple-600">350€</p>
                <p className="text-gray-600">Professional</p>
                <p className="text-sm text-gray-500 mt-1">Più richiesto</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">800€</p>
                <p className="text-gray-600">Enterprise</p>
                <p className="text-sm text-gray-500 mt-1">Progetti complessi</p>
              </div>
            </div>
            <Link
              href="/servizi"
              className="inline-block mt-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:opacity-90 transition"
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
              Stack <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Tecnologico</span>
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
              Perché Scegliere <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Me?</span>
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
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto a Dare Vita al Tuo Progetto?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Trasformiamo insieme la tua idea in una realtà digitale di successo
          </p>
          <Link
            href="#contatti"
            className="inline-block px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105"
          >
            Richiedi un Preventivo Gratuito
          </Link>
        </div>
      </section>
      {/* Contact Section - VERSIONE MIGLIORATA */}
      <section id="contatti" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Lavoriamo <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Insieme</span>
            </h2>
            <p className="text-lg text-gray-600">
              Preventivi gratuiti in 24 ore. Parliamo del tuo progetto!
            </p>
          </div>

          {/* WhatsApp CTA Principale */}
          <div className="max-w-2xl mx-auto mb-12">
            <a
              href="https://wa.me/393508887554?text=Ciao%20Greg%2C%20ti%20scrivo%20per%20info%20su%20un%20sito%20web%20professionale"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center justify-center mb-4">
                <svg className="w-12 h-12 mr-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <div className="text-left">
                  <p className="text-2xl font-bold">Scrivimi su WhatsApp</p>
                  <p className="text-green-100">Risposta veloce garantita</p>
                </div>
              </div>
              <p className="text-center text-green-50">
                Il modo più veloce per ottenere un preventivo o fare domande →
              </p>
            </a>
          </div>

          <div className="text-center mb-8">
            <p className="text-gray-500 text-sm uppercase tracking-wider">Oppure</p>
          </div>

          {/* Grid con Info e Form */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

            {/* Colonna Sinistra - Info Contatto */}
            <div className="space-y-6">

              {/* Card Contatti */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <EnvelopeIcon className="w-6 h-6 mr-3 text-blue-500" />
                  Altri Contatti
                </h3>
                <div className="space-y-4">
                  <a
                    href="tel:+393508887554"
                    className="flex items-center text-gray-700 hover:text-blue-500 transition group"
                  >
                    <span className="mr-3 text-2xl">📞</span>
                    <div>
                      <p className="font-medium group-hover:underline">Telefono</p>
                      <p className="text-sm text-gray-600">+39 350 888 7554</p>
                    </div>
                  </a>
                  <a
                    href="mailto:assistenza.greg4web@gmail.com"
                    className="flex items-center text-gray-700 hover:text-blue-500 transition group"
                  >
                    <span className="mr-3 text-2xl">✉️</span>
                    <div>
                      <p className="font-medium group-hover:underline">Email</p>
                      <p className="text-sm text-gray-600">assistenza.greg4web@gmail.com</p>
                    </div>
                  </a>
                  <a
                    href="https://github.com/GregorioUnipd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-blue-500 transition group"
                  >
                    <span className="mr-3 text-2xl">🐙</span>
                    <div>
                      <p className="font-medium group-hover:underline">GitHub</p>
                      <p className="text-sm text-gray-600">@GregorioUnipd</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Card Cosa Posso Fare */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 shadow-lg">
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
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 mt-1 mr-3 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">E-commerce e piattaforme custom</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Colonna Destra - Google Form CTA */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Compila il Modulo</h3>
              <p className="text-gray-600 mb-6">
                Preferisci scrivere con calma? Compila il form e ti rispondo entro 24 ore
              </p>

              {/* Vantaggi del form */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 mt-1 mr-3 text-blue-500 flex-shrink-0" />
                  <span className="text-gray-700">Descrivi il tuo progetto nei dettagli</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 mt-1 mr-3 text-blue-500 flex-shrink-0" />
                  <span className="text-gray-700">Ricevi un preventivo personalizzato</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 mt-1 mr-3 text-blue-500 flex-shrink-0" />
                  <span className="text-gray-700">Nessun impegno, risposta in 24h</span>
                </li>
              </ul>

              {/* Bottone per aprire il form */}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScn-9a0EAtRtx1-B16YkjfJ_knDb2nwzpsfShIdx0AOie7kJw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:opacity-90 transition shadow-lg transform hover:scale-105 duration-200"
              >
                <span className="flex items-center justify-center">
                  Compila il Modulo di Contatto
                  <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-2" />
                </span>
              </a>

              {/* Info aggiuntiva */}
              <p className="text-sm text-gray-500 text-center mt-4">
                📋 Si apre in una nuova finestra
              </p>
            </div>

          </div>

          {/* Trust Badge */}
          <div className="mt-12 p-8 bg-gradient-to-r from-amber-50 to-blue-50 rounded-xl text-center max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center justify-center">
              <span className="text-3xl mr-3">💡</span>
              Un sito web professionale è un investimento
            </h3>
            <p className="text-gray-700">
              Con un sito fatto bene, attiri nuovi clienti 24/7.
              Il ritorno sull'investimento arriva già nei primi 2-3 mesi.
            </p>
          </div>

          {/* Social Proof (opzionale) */}
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              ⚡ Risposta media in <span className="font-bold text-gray-700">2 ore</span> su WhatsApp
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