export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900 flex flex-col items-center justify-center">
      {/* Navbar */}
      <nav className="fixed top-0 w-full flex justify-center gap-8 py-4 bg-white/70 backdrop-blur-md shadow-sm z-50">
        <a href="#home" className="hover:text-blue-500 font-medium">Home</a>
        <a href="#projects" className="hover:text-blue-500 font-medium">Progetti</a>
        <a href="#contact" className="hover:text-blue-500 font-medium">Contatti</a>
      </nav>

      {/* Hero Section */}
      <section id="home" className="text-center mt-24 px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Ciao, sono <span className="text-blue-600">Gregorio</span> 👋
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Studente di Diritto e Tecnologia all'Università di Padova.  
          Mi occupo di accessibilità web e sviluppo di esperienze digitali inclusive.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="mt-32 w-full max-w-5xl px-6">
        <h2 className="text-3xl font-semibold mb-10 text-center">Progetti</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Itinerari Accessibili */}
          <a
            href="https://itinerariaccessibili.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl shadow-lg bg-white hover:scale-105 transition-transform"
          >
            <h3 className="font-semibold text-xl mb-2">Itinerari Accessibili</h3>
            <p className="text-gray-600 text-sm mb-3">
              Sito accessibile sviluppato per il Museo Poleni, con mappe interattive e audiodescrizioni per persone cieche.
            </p>
            <span className="text-blue-500 text-sm font-medium">→ itinerariaccessibili.com</span>
          </a>

          {/* Adori Events */}
          <a
            href="https://adorievents.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl shadow-lg bg-white hover:scale-105 transition-transform"
          >
            <h3 className="font-semibold text-xl mb-2">Adori Events</h3>
            <p className="text-gray-600 text-sm mb-3">
              Piattaforma moderna per la gestione di eventi e matrimoni. Design elegante e UX intuitiva.
            </p>
            <span className="text-blue-500 text-sm font-medium">→ adorievents.com</span>
          </a>

          {/* HydraJoy */}
          <div className="p-6 rounded-2xl shadow-lg bg-white hover:scale-105 transition-transform">
            <h3 className="font-semibold text-xl mb-2">HydraJoy</h3>
            <p className="text-gray-600 text-sm">
              Shopify store dedicato al benessere e all’idratazione, con design minimal e user-friendly.
            </p>
          </div>

          {/* Portfolio */}
          <div className="p-6 rounded-2xl shadow-lg bg-white hover:scale-105 transition-transform">
            <h3 className="font-semibold text-xl mb-2">Portfolio</h3>
            <p className="text-gray-600 text-sm">
              Questo sito personale, realizzato con Next.js, Tailwind e deploy su Vercel.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mt-32 mb-24 text-center px-4">
        <h2 className="text-3xl font-semibold mb-4">Contattami</h2>
        <p className="text-gray-600 text-lg">gregorio.mangione@example.com</p>
      </section>
    </main>
  );
}
