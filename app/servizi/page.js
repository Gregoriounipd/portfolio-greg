'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import {
  ArrowLeftIcon,
  CodeBracketIcon,
  ComputerDesktopIcon,
  RocketLaunchIcon,
  GlobeAltIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  CurrencyEuroIcon,
  ClockIcon,
  SparklesIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon,
  MagnifyingGlassIcon,
  ChartBarIcon,
  CubeTransparentIcon,
  ServerIcon,
  PaintBrushIcon,
  Bars3Icon
} from '@heroicons/react/24/outline'

export default function Servizi() {
  const [selectedService, setSelectedService] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Servizi dettagliati con PREZZI REALISTICI
  const servizi = [
    {
      id: 1,
      titolo: 'Sviluppo Web Full-Stack',
      descrizione: 'Creo applicazioni web complete e moderne utilizzando le ultime tecnologie',
      icona: <CodeBracketIcon className="w-8 h-8" />,
      colore: 'blue',
      prezzo: {
        starter: 250,
        professional: 450,
        enterprise: 900
      },
      caratteristiche: [
        'Sviluppo frontend con React/Next.js',
        'Backend API con Node.js',
        'Database design e implementazione',
        'Autenticazione e autorizzazione',
        'Integrazione servizi esterni',
        'Deploy su cloud (Vercel/Netlify)'
      ],
      tecnologie: ['Next.js', 'React', 'Node.js', 'MongoDB', 'PostgreSQL', 'Supabase'],
      tempiConsegna: '7-30 giorni',
      ideale: 'Startup, PMI, progetti personali che necessitano di una presenza web professionale'
    },
    {
      id: 2,
      titolo: 'E-Commerce & Marketplace',
      descrizione: 'Soluzioni complete per vendere online con sistemi di pagamento integrati',
      icona: <CurrencyEuroIcon className="w-8 h-8" />,
      colore: 'purple',
      prezzo: {
        starter: 300,
        professional: 800,
        enterprise: 1400
      },
      caratteristiche: [
        'Catalogo prodotti dinamico',
        'Carrello e checkout ottimizzato',
        'Integrazione Stripe/PayPal',
        'Gestione ordini e inventario',
        'Area cliente personalizzata',
        'Sistema di recensioni'
      ],
      tecnologie: ['Next.js', 'Stripe', 'PayPal', 'Supabase', 'Tailwind CSS'],
      tempiConsegna: '14-45 giorni',
      ideale: 'Negozi online, artigiani, brand che vogliono vendere direttamente'
    },
    {
      id: 3,
      titolo: 'Progressive Web App (PWA)',
      descrizione: 'App web che funzionano come app native su tutti i dispositivi',
      icona: <DevicePhoneMobileIcon className="w-8 h-8" />,
      colore: 'gradient',
      prezzo: {
        starter: 500,
        professional: 1000,
        enterprise: 2000
      },
      caratteristiche: [
        'Funziona offline',
        'Installabile su dispositivi',
        'Notifiche push',
        'Performance ottimizzate',
        'Sincronizzazione background',
        'Aggiornamenti automatici'
      ],
      tecnologie: ['Next.js', 'Service Workers', 'Web Push API', 'IndexedDB'],
      tempiConsegna: '10-30 giorni',
      ideale: 'Aziende che vogliono raggiungere utenti mobile senza sviluppare app native'
    },
    {
      id: 4,
      titolo: 'Accessibilità Web (WCAG)',
      descrizione: 'Rendo il tuo sito accessibile a tutti seguendo gli standard internazionali',
      icona: <ShieldCheckIcon className="w-8 h-8" />,
      colore: 'blue',
      prezzo: {
        starter: 65,
        professional: 250,
        enterprise: 500
      },
      caratteristiche: [
        'Audit accessibilità completo',
        'Conformità WCAG 2.1 AA',
        'Testing con screen reader',
        'Navigazione da tastiera',
        'Contrasti e leggibilità',
        'Report dettagliato'
      ],
      tecnologie: ['WCAG', 'ARIA', 'Screen Readers', 'Axe DevTools'],
      tempiConsegna: '3-5 giorni',
      ideale: 'Enti pubblici, musei, università, aziende che vogliono essere inclusive'
    },
    {
      id: 5,
      titolo: 'SEO & Performance',
      descrizione: 'Ottimizzazione per motori di ricerca e velocità di caricamento',
      icona: <MagnifyingGlassIcon className="w-8 h-8" />,
      colore: 'purple',
      prezzo: {
        starter: 100,
        professional: 300,
        enterprise: 550
      },
      caratteristiche: [
        'Analisi SEO tecnico',
        'Ottimizzazione Core Web Vitals',
        'Schema markup strutturato',
        'Ottimizzazione immagini',
        'Lazy loading',
        'Report performance mensili'
      ],
      tecnologie: ['Google Search Console', 'Lighthouse', 'GTmetrix', 'Schema.org'],
      tempiConsegna: '2-3 giorni',
      ideale: 'Siti esistenti che vogliono migliorare visibilità e performance'
    },
    {
      id: 6,
      titolo: 'UI/UX Design',
      descrizione: 'Progettazione interfacce moderne e user experience ottimale',
      icona: <PaintBrushIcon className="w-8 h-8" />,
      colore: 'gradient',
      prezzo: {
        starter: 200,
        professional: 320,
        enterprise: 500
      },
      caratteristiche: [
        'Wireframe e mockup',
        'Design system completo',
        'Prototipo interattivo',
        'User journey mapping',
        'A/B testing design',
        'Design responsive'
      ],
      tecnologie: ['Figma', 'Adobe XD', 'Tailwind CSS', 'Framer Motion'],
      tempiConsegna: '5-10 giorni',
      ideale: 'Startup, redesign di siti esistenti, nuovi progetti'
    }
  ]

  // Pacchetti
  const pacchetti = [
    {
      nome: 'Starter',
      descrizione: 'Perfetto per iniziare',
      colore: 'blue',
      include: [
        'Sviluppo base',
        'Design responsive',
        'SEO base',
        '3 revisioni',
        'Consegna rapida'
      ]
    },
    {
      nome: 'Professional',
      descrizione: 'La scelta più popolare',
      colore: 'purple',
      include: [
        'Tutto di Starter',
        'Funzionalità avanzate',
        'Integrazione API',
        '5 revisioni',
        'Supporto 30 giorni',
        'Formazione base'
      ],
      popolare: true
    },
    {
      nome: 'Enterprise',
      descrizione: 'Soluzioni complete',
      colore: 'gradient',
      include: [
        'Tutto di Professional',
        'Personalizzazione totale',
        'Scalabilità garantita',
        'Revisioni illimitate',
        'Supporto 90 giorni',
        'Formazione completa',
        'Manutenzione inclusa'
      ]
    }
  ]

  // FAQ
  const faq = [
    {
      domanda: 'Come funziona il processo di sviluppo?',
      risposta: 'Il processo si divide in 5 fasi: 1) Analisi requisiti, 2) Design e prototipo, 3) Sviluppo, 4) Testing, 5) Deploy e formazione.'
    },
    {
      domanda: 'Quali metodi di pagamento accetti?',
      risposta: 'Accetto pagamenti tramite bonifico bancario, PayPal e carte di credito. Possibilità di pagamento 50% anticipo e 50% a consegna per progetti oltre €500.'
    },
    {
      domanda: 'Offri supporto post-lancio?',
      risposta: 'Sì, tutti i pacchetti includono supporto gratuito (30-90 giorni). Dopo offro piani di manutenzione mensili a partire da €50/mese.'
    },
    {
      domanda: 'Perché i tuoi prezzi sono così competitivi?',
      risposta: 'Offro qualità da agenzia a prezzi da freelancer. Non ho i costi di una grande agenzia, quindi posso offrire prezzi migliori mantenendo alta la qualità.'
    },
    {
      domanda: 'Quanto tempo ci vuole per un sito?',
      risposta: 'Un sito base richiede 7-14 giorni. Progetti più complessi come e-commerce possono richiedere 30-45 giorni. Ti terrò sempre aggiornato sui progressi.'
    }
  ]

  return (
    <>
      {/* Navbar Principale */}
      <Navbar />

      {/* Breadcrumb */}
      <div className="pt-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/" className="flex items-center text-gray-600 hover:text-blue-600 transition">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                Home
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-semibold">Servizi</span>
            </nav>

            <Link
              href="/#contatti"
              className="hidden md:flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition shadow-lg"
            >
              <span>Richiedi Preventivo</span>
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              I Miei <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Servizi</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluzioni web professionali a prezzi competitivi.
              Qualità da agenzia, prezzi da freelancer.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid - MIGLIORATO CON PREZZI PIÙ VISIBILI */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servizi.map((servizio) => (
              <div
                key={servizio.id}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-2xl hover:border-blue-500 transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedService(servizio)}
              >
                <div className={`w-14 h-14 ${
                  servizio.colore === 'blue'
                    ? 'bg-gradient-to-br from-blue-500 to-blue-600'
                    : servizio.colore === 'purple'
                    ? 'bg-gradient-to-br from-purple-500 to-purple-600'
                    : 'bg-gradient-to-r from-blue-500 to-purple-600'
                } rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {servizio.icona}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">{servizio.titolo}</h3>
                <p className="text-gray-600 mb-4">{servizio.descrizione}</p>

                {/* PREZZO PIÙ VISIBILE */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 mb-4">
                  <div className="flex items-baseline justify-center">
                    <span className="text-sm text-gray-600 mr-2">Da</span>
                    <span className="text-3xl font-bold text-blue-600">€{servizio.prezzo.starter}</span>
                  </div>
                  <p className="text-xs text-center text-gray-500 mt-1">Pacchetto Starter</p>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <ClockIcon className="w-4 h-4 mr-1" />
                    {servizio.tempiConsegna}
                  </div>
                </div>

                <button className="w-full text-blue-600 hover:text-white hover:bg-blue-600 border-2 border-blue-600 py-2 px-4 rounded-lg font-semibold inline-flex items-center justify-center transition-all duration-300">
                  Scopri di più
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center">
                  <div className={`w-14 h-14 ${
                    selectedService.colore === 'blue'
                      ? 'bg-gradient-to-br from-blue-500 to-blue-600'
                      : selectedService.colore === 'purple'
                      ? 'bg-gradient-to-br from-purple-500 to-purple-600'
                      : 'bg-gradient-to-r from-blue-500 to-purple-600'
                  } rounded-xl flex items-center justify-center mr-4 text-white`}>
                    {selectedService.icona}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{selectedService.titolo}</h2>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <p className="text-gray-600 mb-6">{selectedService.descrizione}</p>

              {/* Pricing */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-4">Prezzi Trasparenti</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center bg-white rounded-lg p-4">
                    <p className="text-3xl font-bold text-blue-500">€{selectedService.prezzo.starter}</p>
                    <p className="text-sm text-gray-600 mt-1">Starter</p>
                  </div>
                  <div className="text-center bg-white rounded-lg p-4 ring-2 ring-purple-500">
                    <p className="text-3xl font-bold text-purple-600">€{selectedService.prezzo.professional}</p>
                    <p className="text-sm text-gray-600 mt-1">Professional</p>
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full mt-1 inline-block">Popolare</span>
                  </div>
                  <div className="text-center bg-white rounded-lg p-4">
                    <p className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                      €{selectedService.prezzo.enterprise}+
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Enterprise</p>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-4">Cosa include</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {selectedService.caratteristiche.map((caratteristica, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{caratteristica}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-4">Tecnologie utilizzate</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedService.tecnologie.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Ideal for */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">Ideale per</h3>
                <p className="text-gray-600">{selectedService.ideale}</p>
              </div>

              {/* CTA */}
              <div className="flex gap-4">
                <Link
                  href="/#contatti"
                  className="flex-1 text-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:opacity-90 transition"
                  onClick={() => setSelectedService(null)}
                >
                  Richiedi Preventivo Gratuito
                </Link>
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
                >
                  Chiudi
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Packages Section - COLORI CORRETTI */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Scegli il Tuo <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Pacchetto</span>
            </h2>
            <p className="text-lg text-gray-600">
              Soluzioni flessibili per ogni budget e necessità
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pacchetti.map((pacchetto, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                  pacchetto.popolare ? 'ring-2 ring-purple-500 transform scale-105' : ''
                }`}
              >
                {pacchetto.popolare && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Più Popolare
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pacchetto.nome}</h3>
                  <p className="text-gray-600">{pacchetto.descrizione}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pacchetto.include.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/#contatti"
                  className={`block text-center px-6 py-3 rounded-lg font-semibold transition ${
                    pacchetto.popolare
                      ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:opacity-90'
                      : 'border-2 border-blue-500 text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  Inizia con {pacchetto.nome}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - COLORI CORRETTI */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Il Mio <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Processo</span>
            </h2>
            <p className="text-lg text-gray-600">
              Un approccio strutturato per garantire risultati eccellenti
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              { fase: '1', nome: 'Analisi', desc: 'Comprendo le tue esigenze e obiettivi', icona: <MagnifyingGlassIcon className="w-6 h-6" /> },
              { fase: '2', nome: 'Design', desc: 'Creo mockup e prototipi interattivi', icona: <PaintBrushIcon className="w-6 h-6" /> },
              { fase: '3', nome: 'Sviluppo', desc: 'Codifico con tecnologie moderne', icona: <CodeBracketIcon className="w-6 h-6" /> },
              { fase: '4', nome: 'Testing', desc: 'Test completi su tutti i dispositivi', icona: <ShieldCheckIcon className="w-6 h-6" /> },
              { fase: '5', nome: 'Deploy', desc: 'Lancio e formazione', icona: <RocketLaunchIcon className="w-6 h-6" /> }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {step.icona}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Fase {step.fase}: {step.nome}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why These Prices Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Perché Questi <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Prezzi?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-3">💰 Risparmio Garantito</h3>
              <p className="text-gray-600">
                Le agenzie chiedono €3000-10000 per gli stessi servizi.
                Con me risparmi fino al 70% mantenendo la stessa qualità.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-3">🚀 ROI Veloce</h3>
              <p className="text-gray-600">
                Un sito professionale si ripaga in 2-3 mesi portando nuovi clienti.
                È un investimento, non un costo.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-3">🏆 Qualità Premium</h3>
              <p className="text-gray-600">
                Uso le stesse tecnologie di Netflix e Airbnb (Next.js, React).
                Il tuo sito sarà veloce, moderno e scalabile.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-3">📞 Contatto Diretto</h3>
              <p className="text-gray-600">
                Parli direttamente con me, non con commerciali.
                Risposte rapide e modifiche immediate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Domande <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Frequenti</span>
            </h2>
          </div>

          <div className="space-y-6">
            {faq.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-semibold text-gray-900 mb-2">{item.domanda}</h3>
                <p className="text-gray-600">{item.risposta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section con WhatsApp */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto a Iniziare il Tuo Progetto?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Preventivo gratuito in 24 ore. Nessun impegno.
            </p>
          </div>

          {/* WhatsApp CTA Principale */}
          <div className="mb-8">
            <a
              href="https://wa.me/393508887554?text=Ciao%20Greg%2C%20ho%20visto%20i%20tuoi%20servizi%20e%20vorrei%20un%20preventivo%20per%20"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white hover:bg-gray-50 rounded-2xl p-8 shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center justify-center mb-4">
                <svg className="w-12 h-12 mr-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <div className="text-left">
                  <p className="text-2xl font-bold text-gray-900">Scrivimi su WhatsApp</p>
                  <p className="text-gray-600">Il modo più veloce per un preventivo</p>
                </div>
              </div>
              <p className="text-center text-gray-700 font-medium">
                Risposta garantita in 2 ore →
              </p>
            </a>
          </div>

          {/* Opzioni Alternative */}
          <div className="text-center mb-6">
            <p className="text-white/70 text-sm uppercase tracking-wider">Oppure</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contatti"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition inline-flex items-center justify-center"
            >
              Compila il Form
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition inline-flex items-center justify-center"
            >
              Vedi Portfolio
              <SparklesIcon className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}