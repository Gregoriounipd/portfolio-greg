'use client'

import { useState } from 'react'
import Link from 'next/link'
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
  PaintBrushIcon
} from '@heroicons/react/24/outline'

export default function Servizi() {
  const [selectedService, setSelectedService] = useState(null)

  // Servizi dettagliati con PREZZI REALISTICI
  const servizi = [
    {
      id: 1,
      titolo: 'Sviluppo Web Full-Stack',
      descrizione: 'Creo applicazioni web complete e moderne utilizzando le ultime tecnologie',
      icona: <CodeBracketIcon className="w-8 h-8" />,
      colore: 'amber',
      prezzo: {
        starter: 300,
        professional: 800,
        enterprise: 1500
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
      colore: 'blue',
      prezzo: {
        starter: 500,
        professional: 1200,
        enterprise: 2500
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
        starter: 400,
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
        starter: 250,
        professional: 500,
        enterprise: 900
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
      tempiConsegna: '3-14 giorni',
      ideale: 'Enti pubblici, musei, università, aziende che vogliono essere inclusive'
    },
    {
      id: 5,
      titolo: 'SEO & Performance',
      descrizione: 'Ottimizzazione per motori di ricerca e velocità di caricamento',
      icona: <MagnifyingGlassIcon className="w-8 h-8" />,
      colore: 'amber',
      prezzo: {
        starter: 200,
        professional: 400,
        enterprise: 700
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
      tempiConsegna: '3-7 giorni',
      ideale: 'Siti esistenti che vogliono migliorare visibilità e performance'
    },
    {
      id: 6,
      titolo: 'UI/UX Design',
      descrizione: 'Progettazione interfacce moderne e user experience ottimale',
      icona: <PaintBrushIcon className="w-8 h-8" />,
      colore: 'gradient',
      prezzo: {
        starter: 350,
        professional: 700,
        enterprise: 1200
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
      tempiConsegna: '5-15 giorni',
      ideale: 'Startup, redesign di siti esistenti, nuovi progetti'
    }
  ]

  // Pacchetti
  const pacchetti = [
    {
      nome: 'Starter',
      descrizione: 'Perfetto per iniziare',
      colore: 'amber',
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
      colore: 'blue',
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
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900">
                <ArrowLeftIcon className="w-5 h-5 mr-2" />
                Home
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-semibold">Servizi</span>
            </div>
            <Link 
              href="/#contatti"
              className="px-4 py-2 bg-gradient-to-r from-brand-amber-600 to-brand-blue-800 text-white rounded-lg hover:opacity-90 transition"
            >
              Contattami
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              I Miei <span className="bg-gradient-to-r from-brand-amber-700 to-brand-blue-800 bg-clip-text text-transparent">Servizi</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluzioni web professionali a prezzi competitivi. 
              Qualità da agenzia, prezzi da freelancer.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servizi.map((servizio) => (
              <div 
                key={servizio.id}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedService(servizio)}
              >
                <div className={`w-14 h-14 ${
                  servizio.colore === 'amber' 
                    ? 'bg-gradient-to-br from-amber-500 to-amber-600'
                    : servizio.colore === 'blue'
                    ? 'bg-gradient-to-br from-blue-700 to-blue-800'
                    : 'bg-gradient-to-r from-brand-amber-600 to-brand-blue-800'
                } rounded-xl flex items-center justify-center mb-4 text-white`}>
                  {servizio.icona}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{servizio.titolo}</h3>
                <p className="text-gray-600 mb-4">{servizio.descrizione}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <ClockIcon className="w-4 h-4 mr-1" />
                    {servizio.tempiConsegna}
                  </div>
                  <div className="text-sm font-semibold text-brand-amber-600">
                    Da €{servizio.prezzo.starter}
                  </div>
                </div>
                
                <button className="text-brand-blue-600 hover:text-brand-blue-700 font-semibold inline-flex items-center">
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
                    selectedService.colore === 'amber' 
                      ? 'bg-gradient-to-br from-amber-500 to-amber-600'
                      : selectedService.colore === 'blue'
                      ? 'bg-gradient-to-br from-blue-700 to-blue-800'
                      : 'bg-gradient-to-r from-brand-amber-600 to-brand-blue-800'
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
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-4">Prezzi Trasparenti</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-brand-amber-600">€{selectedService.prezzo.starter}</p>
                    <p className="text-sm text-gray-600">Starter</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-brand-blue-800">€{selectedService.prezzo.professional}</p>
                    <p className="text-sm text-gray-600">Professional</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold bg-gradient-to-r from-brand-amber-700 to-brand-blue-800 bg-clip-text text-transparent">
                      €{selectedService.prezzo.enterprise}+
                    </p>
                    <p className="text-sm text-gray-600">Enterprise</p>
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
                  className="flex-1 text-center px-6 py-3 bg-gradient-to-r from-brand-amber-600 to-brand-blue-800 text-white rounded-lg font-semibold hover:opacity-90 transition"
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

      {/* Packages Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Scegli il Tuo <span className="bg-gradient-to-r from-brand-amber-700 to-brand-blue-800 bg-clip-text text-transparent">Pacchetto</span>
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
                  pacchetto.popolare ? 'ring-2 ring-brand-blue-600 transform scale-105' : ''
                }`}
              >
                {pacchetto.popolare && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-brand-amber-600 to-brand-blue-800 text-white px-4 py-1 rounded-full text-sm font-semibold">
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
                      ? 'bg-gradient-to-r from-brand-amber-600 to-brand-blue-800 text-white hover:opacity-90'
                      : 'border-2 border-gray-300 text-gray-700 hover:border-brand-amber-600'
                  }`}
                >
                  Inizia con {pacchetto.nome}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Il Mio <span className="bg-gradient-to-r from-brand-amber-700 to-brand-blue-800 bg-clip-text text-transparent">Processo</span>
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
                <div className="w-16 h-16 bg-gradient-to-r from-brand-amber-600 to-brand-blue-800 rounded-full flex items-center justify-center text-white mx-auto mb-4">
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
      <section className="py-16 bg-gradient-to-br from-amber-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Perché Questi <span className="bg-gradient-to-r from-brand-amber-700 to-brand-blue-800 bg-clip-text text-transparent">Prezzi?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">💰 Risparmio Garantito</h3>
              <p className="text-gray-600">
                Le agenzie chiedono €3000-10000 per gli stessi servizi. 
                Con me risparmi fino al 70% mantenendo la stessa qualità.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">🚀 ROI Veloce</h3>
              <p className="text-gray-600">
                Un sito professionale si ripaga in 2-3 mesi portando nuovi clienti. 
                È un investimento, non un costo.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">🏆 Qualità Premium</h3>
              <p className="text-gray-600">
                Uso le stesse tecnologie di Netflix e Airbnb (Next.js, React). 
                Il tuo sito sarà veloce, moderno e scalabile.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6">
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
              Domande <span className="bg-gradient-to-r from-brand-amber-700 to-brand-blue-800 bg-clip-text text-transparent">Frequenti</span>
            </h2>
          </div>

          <div className="space-y-6">
            {faq.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{item.domanda}</h3>
                <p className="text-gray-600">{item.risposta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-amber-600 to-brand-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto a Iniziare il Tuo Progetto?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Preventivo gratuito in 24 ore. Nessun impegno.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/#contatti"
              className="px-8 py-4 bg-white text-brand-blue-800 rounded-lg font-semibold hover:bg-gray-100 transition inline-flex items-center justify-center"
            >
              Richiedi Preventivo
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