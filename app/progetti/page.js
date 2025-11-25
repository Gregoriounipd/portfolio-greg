'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import {
    ArrowRightIcon,
    ArrowTopRightOnSquareIcon,
    CheckCircleIcon,
    RocketLaunchIcon,
    GlobeAltIcon,
    CodeBracketIcon,
    SparklesIcon,
    DevicePhoneMobileIcon,
    ClockIcon,
    UserGroupIcon,
    ChartBarIcon,
    LightBulbIcon
} from '@heroicons/react/24/outline'

export default function Progetti() {
    const [activeProject, setActiveProject] = useState('adorievents')

    // Progetti principali
    const progetti = {
        adorievents: {
            nome: 'AdoriEvents',
            tagline: 'Piattaforma Completa per la Pianificazione di Eventi',
            url: 'https://adorievents.com',
            anno: '2024',
            categoria: 'Event Management',
            colore: 'blue',

            hero: {
                problema: 'Gli organizzatori di eventi avevano bisogno di una piattaforma moderna per gestire tutte le fasi dell\'organizzazione, dalla pianificazione alla promozione.',
                soluzione: 'Ho creato una piattaforma completa con design moderno, integrazione Google Forms, sistema di gestione eventi e SEO ottimizzato per massimizzare la visibilità online.'
            },

            tecnologie: [
                { nome: 'Next.js 14', desc: 'Framework React per performance ottimali' },
                { nome: 'React', desc: 'UI components modulari e riutilizzabili' },
                { nome: 'Tailwind CSS', desc: 'Design system responsive e personalizzabile' },
                { nome: 'Supabase', desc: 'Database e autenticazione backend' },
                { nome: 'Google Forms API', desc: 'Integrazione per raccolta contatti' },
                { nome: 'Vercel', desc: 'Deploy automatico e hosting performante' }
            ],

            caratteristiche: [
                {
                    titolo: 'Design Moderno e Professionale',
                    descrizione: 'Interfaccia elegante con gradients custom e animazioni fluide che rispecchiano il brand AdoriEvents',
                    icona: <SparklesIcon className="w-6 h-6" />
                },
                {
                    titolo: 'Gestione Eventi Completa',
                    descrizione: 'Sistema per creare, modificare e pubblicare eventi con tutte le informazioni necessarie: data, luogo, descrizione, immagini',
                    icona: <RocketLaunchIcon className="w-6 h-6" />
                },
                {
                    titolo: 'Integrazione Google Forms',
                    descrizione: 'Sistema di raccolta contatti integrato per permettere agli utenti di richiedere preventivi direttamente dal sito',
                    icona: <CodeBracketIcon className="w-6 h-6" />
                },
                {
                    titolo: 'SEO Ottimizzato',
                    descrizione: 'Metadata completi, sitemap dinamica, schema markup e ottimizzazione Core Web Vitals per massima visibilità su Google',
                    icona: <ChartBarIcon className="w-6 h-6" />
                },
                {
                    titolo: 'Responsive Design',
                    descrizione: 'Esperienza ottimale su tutti i dispositivi: desktop, tablet e smartphone con design mobile-first',
                    icona: <DevicePhoneMobileIcon className="w-6 h-6" />
                },
                {
                    titolo: 'Performance Eccellenti',
                    descrizione: 'Tempi di caricamento sotto i 2 secondi, lazy loading immagini, code splitting automatico',
                    icona: <ClockIcon className="w-6 h-6" />
                }
            ],

            risultati: [
                { metrica: '95+', label: 'Google Lighthouse Score', icona: '⚡' },
                { metrica: '<2s', label: 'Tempo Caricamento Medio', icona: '🚀' },
                { metrica: '100%', label: 'Mobile Responsive', icona: '📱' },
                { metrica: 'Top 10', label: 'Ranking Google per Keywords', icona: '🎯' }
            ],

            sfide: [
                {
                    sfida: 'Integrazione Google Forms senza compromettere UX',
                    soluzione: 'Ho implementato un sistema di embed intelligente con pre-compilazione dei campi e validazione lato client per un\'esperienza fluida.'
                },
                {
                    sfida: 'Performance con molte immagini di eventi',
                    soluzione: 'Utilizzo di Next.js Image component con lazy loading automatico, compressione WebP e CDN per caricamenti rapidissimi.'
                },
                {
                    sfida: 'SEO per una nuova piattaforma eventi',
                    soluzione: 'Implementazione completa di metadata dinamici, sitemap XML, schema markup per eventi e ottimizzazione contenuti per keywords strategiche.'
                }
            ],

            testimonial: {
                testo: 'Greg ha trasformato la nostra idea in una piattaforma professionale e moderna. Il sito è veloce, bello da vedere e ci sta portando nuovi clienti ogni settimana.',
                autore: 'Team AdoriEvents',
                ruolo: 'Founder'
            }
        },

        itinerariaccessibili: {
            nome: 'Itinerari Accessibili',
            tagline: 'Piattaforma Digitale Accessibile per i Musei Universitari',
            url: 'https://itinerariaccessibili.unipd.it',
            anno: '2024',
            categoria: 'Digital Accessibility',
            colore: 'purple',

            hero: {
                problema: 'I Musei dell\'Università di Padova necessitavano di una piattaforma digitale completamente accessibile per permettere a tutti i visitatori, incluse persone con disabilità, di esplorare i loro itinerari museali.',
                soluzione: 'Ho sviluppato una piattaforma conforme agli standard WCAG 2.1 AA con supporto multilingue, audioguide, video LIS (Lingua dei Segni Italiana) e materiali in CAA (Comunicazione Aumentativa Alternativa).'
            },

            tecnologie: [
                { nome: 'Next.js 14', desc: 'Server-side rendering per accessibilità ottimale' },
                { nome: 'React', desc: 'Componenti accessibili con ARIA labels' },
                { nome: 'Tailwind CSS', desc: 'Design system con contrasti WCAG conformi' },
                { nome: 'Supabase', desc: 'Database per contenuti multimediali accessibili' },
                { nome: 'next-i18next', desc: 'Internazionalizzazione IT/EN/ES' },
                { nome: 'Vercel', desc: 'Edge functions per performance globali' }
            ],

            caratteristiche: [
                {
                    titolo: 'Conformità WCAG 2.1 AA',
                    descrizione: 'Piena conformità agli standard internazionali di accessibilità web: contrasti ottimali, navigazione da tastiera, screen reader friendly',
                    icona: <CheckCircleIcon className="w-6 h-6" />
                },
                {
                    titolo: 'Supporto Multilingue',
                    descrizione: 'Contenuti disponibili in Italiano, Inglese e Spagnolo per raggiungere un pubblico internazionale',
                    icona: <GlobeAltIcon className="w-6 h-6" />
                },
                {
                    titolo: 'Audioguide Integrate',
                    descrizione: 'Sistema di audioguide per ogni opera e itinerario, accessibile tramite player custom con controlli semplificati',
                    icona: <SparklesIcon className="w-6 h-6" />
                },
                {
                    titolo: 'Video LIS',
                    descrizione: 'Video in Lingua dei Segni Italiana per rendere i contenuti accessibili alla comunità sorda',
                    icona: <UserGroupIcon className="w-6 h-6" />
                },
                {
                    titolo: 'Materiali CAA',
                    descrizione: 'Comunicazione Aumentativa Alternativa con simboli e immagini per persone con difficoltà comunicative',
                    icona: <LightBulbIcon className="w-6 h-6" />
                },
                {
                    titolo: 'Tour Virtuali',
                    descrizione: 'Esplorazione virtuale completa dei musei con immagini ad alta risoluzione e descrizioni dettagliate',
                    icona: <DevicePhoneMobileIcon className="w-6 h-6" />
                }
            ],

            risultati: [
                { metrica: 'WCAG 2.1 AA', label: 'Certificazione Accessibilità', icona: '♿' },
                { metrica: '3 Lingue', label: 'Supporto Multilingue', icona: '🌍' },
                { metrica: '100%', label: 'Accessibilità Screen Reader', icona: '🔊' },
                { metrica: '4.5+', label: 'Contrasto WCAG', icona: '👁️' }
            ],

            sfide: [
                {
                    sfida: 'Conformità WCAG 2.1 AA completa',
                    soluzione: 'Testing approfondito con screen reader (NVDA, JAWS), audit automatici con Axe DevTools, validazione manuale di ogni pagina e componente.'
                },
                {
                    sfida: 'Gestione contenuti multimediali accessibili',
                    soluzione: 'Sistema di gestione artefatti con trascrizioni complete per audioguide, sottotitoli per video LIS, alt text descrittivi per tutte le immagini.'
                },
                {
                    sfida: 'Performance con contenuti pesanti multilingue',
                    soluzione: 'Implementazione di lazy loading intelligente, caching multilingue, ottimizzazione bundle size con code splitting per lingua.'
                },
                {
                    sfida: 'Internazionalizzazione SEO-friendly',
                    soluzione: 'Hreflang tags corretti, sitemap multilingue, URL structure ottimizzata per ogni lingua (it/en/es).'
                }
            ],

            testimonial: {
                testo: 'Gregorio ha creato una piattaforma che rappresenta l\'eccellenza nell\'accessibilità digitale. Il suo lavoro permette a tutti, senza esclusioni, di esplorare le nostre collezioni museali.',
                autore: 'Università di Padova',
                ruolo: 'Centro di Ateneo per i Musei'
            },

            riconoscimenti: [
                'Presentato alla Associazione Nazionale Musei Scientifici 2025 ANMS',
                'Caso studio per l\'accessibilità digitale nei musei italiani',
                'Riconoscimento ufficiale con comunicato stampa dall\'Università di Padova'
            ]
        }
    }

    const currentProject = progetti[activeProject]

    return (
    <>
            {/* Navbar */}
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
                            <span className="text-gray-900 font-semibold">Progetti</span>
                        </nav>

                        <a
                            href="https://wa.me/393508887554?text=Ciao%20Greg%2C%20ho%20visto%20i%20tuoi%20progetti%20e%20vorrei%20parlare%20del%20mio"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition shadow-lg"
                        >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            Contattami
                        </a>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            I Miei <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Progetti</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Case study approfonditi dei progetti che ho realizzato, dalle sfide affrontate ai risultati ottenuti
                        </p>
                    </div>

                    {/* Project Selector */}
                    <div className="flex justify-center gap-4 mb-12">
                        <button
                            onClick={() => setActiveProject('adorievents')}
                            className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${activeProject === 'adorievents'
                                ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-xl scale-105'
                                : 'bg-white text-gray-700 hover:bg-gray-50 shadow-lg'
                                }`}
                        >
                            <div className="flex items-center">
                                <RocketLaunchIcon className="w-5 h-5 mr-2" />
                                AdoriEvents
                            </div>
                        </button>
                        <button
                            onClick={() => setActiveProject('itinerariaccessibili')}
                            className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${activeProject === 'itinerariaccessibili'
                                ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-xl scale-105'
                                : 'bg-white text-gray-700 hover:bg-gray-50 shadow-lg'
                                }`}
                        >
                            <div className="flex items-center">
                                <GlobeAltIcon className="w-5 h-5 mr-2" />
                                Itinerari Accessibili
                            </div>
                        </button>
                    </div>
                </div>
            </section>

            {/* Project Detail */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Project Header */}
                    <div className="mb-16">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                            <div>
                                <h2 className="text-4xl font-bold text-gray-900 mb-2">{currentProject.nome}</h2>
                                <p className="text-xl text-gray-600 mb-4">{currentProject.tagline}</p>
                                <div className="flex flex-wrap gap-3 mb-4">
                                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                                        {currentProject.anno}
                                    </span>
                                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                                        {currentProject.categoria}
                                    </span>
                                </div>
                            </div>
                            <a
                                href={currentProject.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center px-6 py-3 ${currentProject.colore === 'blue'
                                    ? 'bg-gradient-to-r from-blue-500 to-blue-600'
                                    : 'bg-gradient-to-r from-purple-500 to-purple-600'
                                    } text-white rounded-lg font-semibold hover:opacity-90 transition shadow-lg`}
                            >
                                Visita il Sito
                                <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-2" />
                            </a>
                        </div>

                        {/* Hero Problem/Solution */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-red-50 rounded-xl p-6">
                                <h3 className="font-bold text-red-900 mb-3 flex items-center">
                                    <span className="text-2xl mr-2">🎯</span>
                                    Il Problema
                                </h3>
                                <p className="text-gray-700">{currentProject.hero.problema}</p>
                            </div>
                            <div className="bg-green-50 rounded-xl p-6">
                                <h3 className="font-bold text-green-900 mb-3 flex items-center">
                                    <span className="text-2xl mr-2">✅</span>
                                    La Soluzione
                                </h3>
                                <p className="text-gray-700">{currentProject.hero.soluzione}</p>
                            </div>
                        </div>
                    </div>

                    {/* Placeholder per Screenshot */}
                    <div className="mb-16">
                                <Image
                                    src={activeProject === 'adorievents' ? '/images/adorievents-hero.jpg' : '/images/itinerariaccessibili.png'}
                                    alt={`Screenshot ${currentProject.nome}`}
                                    width={1200}
                                    height={800}
                                    className="rounded-2xl shadow-xl"
                                />
                            </div>

                            {/* Caratteristiche Principali */}
                            <div className="mb-16">
                                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                                    Caratteristiche <span className={`bg-gradient-to-r ${currentProject.colore === 'blue' ? 'from-blue-500 to-blue-600' : 'from-purple-500 to-purple-600'
                                        } bg-clip-text text-transparent`}>Principali</span>
                                </h3>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {currentProject.caratteristiche.map((feature, index) => (
                                        <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-blue-500 transition-all duration-300">
                                            <div className={`w-12 h-12 ${currentProject.colore === 'blue'
                                                ? 'bg-gradient-to-br from-blue-500 to-blue-600'
                                                : 'bg-gradient-to-br from-purple-500 to-purple-600'
                                                } rounded-lg flex items-center justify-center text-white mb-4`}>
                                                {feature.icona}
                                            </div>
                                            <h4 className="font-bold text-gray-900 mb-2">{feature.titolo}</h4>
                                            <p className="text-gray-600 text-sm">{feature.descrizione}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Tecnologie */}
                            <div className="mb-16">
                                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                                    Stack <span className={`bg-gradient-to-r ${currentProject.colore === 'blue' ? 'from-blue-500 to-blue-600' : 'from-purple-500 to-purple-600'
                                        } bg-clip-text text-transparent`}>Tecnologico</span>
                                </h3>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {currentProject.tecnologie.map((tech, index) => (
                                        <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition">
                                            <h4 className="font-bold text-gray-900 mb-2">{tech.nome}</h4>
                                            <p className="text-gray-600 text-sm">{tech.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Risultati */}
                            <div className="mb-16">
                                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                                    Risultati <span className={`bg-gradient-to-r ${currentProject.colore === 'blue' ? 'from-blue-500 to-blue-600' : 'from-purple-500 to-purple-600'
                                        } bg-clip-text text-transparent`}>Ottenuti</span>
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                    {currentProject.risultati.map((risultato, index) => (
                                        <div key={index} className={`bg-gradient-to-br ${currentProject.colore === 'blue' ? 'from-blue-50 to-blue-100' : 'from-purple-50 to-purple-100'
                                            } rounded-xl p-6 text-center`}>
                                            <div className="text-4xl mb-2">{risultato.icona}</div>
                                            <div className="text-3xl font-bold text-gray-900 mb-1">{risultato.metrica}</div>
                                            <div className="text-sm text-gray-600">{risultato.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Sfide e Soluzioni */}
                            <div className="mb-16">
                                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                                    Sfide e <span className={`bg-gradient-to-r ${currentProject.colore === 'blue' ? 'from-blue-500 to-blue-600' : 'from-purple-500 to-purple-600'
                                        } bg-clip-text text-transparent`}>Soluzioni</span>
                                </h3>
                                <div className="space-y-6">
                                    {currentProject.sfide.map((item, index) => (
                                        <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-xl transition">
                                            <div className="flex items-start mb-4">
                                                <span className="text-2xl mr-3">⚠️</span>
                                                <div className="flex-1">
                                                    <h4 className="font-bold text-gray-900 mb-2">Sfida {index + 1}</h4>
                                                    <p className="text-gray-700">{item.sfida}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start bg-green-50 rounded-lg p-4">
                                                <span className="text-2xl mr-3">💡</span>
                                                <div className="flex-1">
                                                    <h4 className="font-bold text-green-900 mb-2">Soluzione</h4>
                                                    <p className="text-gray-700">{item.soluzione}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Riconoscimenti (solo per Itinerari Accessibili) */}
                            {currentProject.riconoscimenti && (
                                <div className="mb-16">
                                    <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                                        Riconoscimenti <span className="bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">e Impatto</span>
                                    </h3>
                                    <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-8">
                                        <ul className="space-y-4">
                                            {currentProject.riconoscimenti.map((riconoscimento, index) => (
                                                <li key={index} className="flex items-start">
                                                    <span className="text-2xl mr-3">🏆</span>
                                                    <p className="text-gray-700 text-lg">{riconoscimento}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {/* Testimonial */}
                            <div className="mb-16">
                                <div className={`bg-gradient-to-br ${currentProject.colore === 'blue' ? 'from-blue-50 to-blue-100' : 'from-purple-50 to-purple-100'
                                    } rounded-2xl p-8 md:p-12`}>
                                    <div className="text-center mb-6">
                                        <span className="text-6xl">💬</span>
                                    </div>
                                    <blockquote className="text-xl md:text-2xl text-gray-800 text-center mb-6 font-medium italic">
                                        "{currentProject.testimonial.testo}"
                                    </blockquote>
                                    <div className="text-center">
                                        <p className="font-bold text-gray-900">{currentProject.testimonial.autore}</p>
                                        <p className="text-gray-600">{currentProject.testimonial.ruolo}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600">
                        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                    Vuoi un Progetto Simile?
                                </h2>
                                <p className="text-xl text-white/90 mb-8">
                                    Posso creare una soluzione su misura per le tue esigenze
                                </p>
                            </div>

                            {/* WhatsApp CTA */}
                            <div className="mb-8">
                                <a
                                    href="https://wa.me/393508887554?text=Ciao%20Greg%2C%20ho%20visto%20i%20tuoi%20progetti%20e%20vorrei%20realizzare%20qualcosa%20di%20simile"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block bg-white hover:bg-gray-50 rounded-2xl p-8 shadow-2xl transition-all duration-300 transform hover:scale-105"
                                >
                                    <div className="flex items-center justify-center mb-4">
                                        <svg className="w-12 h-12 mr-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                        </svg>
                                        <div className="text-left">
                                            <p className="text-2xl font-bold text-gray-900">Parliamone su WhatsApp</p>
                                            <p className="text-gray-600">Risposta in 2 ore garantita</p>
                                        </div>
                                    </div>
                                    <p className="text-center text-gray-700 font-medium">
                                        Clicca qui per iniziare →
                                    </p>
                                </a>
                            </div>

                            {/* Alternative Options */}
                            <div className="text-center mb-6">
                                <p className="text-white/70 text-sm uppercase tracking-wider">Oppure</p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/#contatti"
                                    className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition inline-flex items-center justify-center"
                                >
                                    Richiedi Preventivo
                                    <ArrowRightIcon className="w-5 h-5 ml-2" />
                                </Link>
                                <Link
                                    href="/servizi"
                                    className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition inline-flex items-center justify-center"
                                >
                                    Vedi Tutti i Servizi
                                    <SparklesIcon className="w-5 h-5 ml-2" />
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* Footer Note */}
                    <section className="py-8 bg-gray-50">
                        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                            <p className="text-gray-600">
                                💡 <strong>Nota:</strong> Ogni progetto è unico. I tempi e i costi variano in base alle specifiche esigenze.
                                Contattami per un preventivo personalizzato gratuito.
                            </p>
                        </div>
                    </section>
                </>
                )
}