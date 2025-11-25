import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Privacy Policy
        </h1>
        
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p className="text-sm text-gray-500">
            Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              1. Titolare del Trattamento
            </h2>
            <p>
              Il Titolare del trattamento dei dati personali è:
            </p>
            <ul className="list-none ml-0 mt-2">
              <li><strong>Gregorio Mangione</strong></li>
              <li>Via Trieste 19, 35010 Cadoneghe (PD)</li>
              <li>Email: <a href="mailto:assistenza.greg4web@gmail.com" className="text-blue-600 hover:underline">assistenza.greg4web@gmail.com</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              2. Tipologie di Dati Raccolti
            </h2>
            <p>
              I dati personali raccolti attraverso questo sito web e i canali di comunicazione associati (Facebook, Instagram, Messenger, WhatsApp) includono:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Nome e cognome</li>
              <li>Indirizzo email</li>
              <li>Numero di telefono</li>
              <li>Informazioni fornite volontariamente tramite form di contatto o messaggi</li>
              <li>Dati di navigazione (indirizzo IP, browser, sistema operativo)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              3. Finalità del Trattamento
            </h2>
            <p>
              I dati personali sono trattati per le seguenti finalità:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li><strong>Risposta alle richieste:</strong> gestione delle richieste di preventivo e informazioni sui servizi offerti</li>
              <li><strong>Comunicazioni commerciali:</strong> invio di informazioni su servizi, offerte e novità (solo previo consenso esplicito)</li>
              <li><strong>Analisi del sito:</strong> monitoraggio delle performance del sito web tramite Google Analytics</li>
              <li><strong>Adempimenti legali:</strong> rispetto degli obblighi di legge in materia fiscale e contabile</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              4. Base Giuridica del Trattamento
            </h2>
            <p>
              Il trattamento dei dati si basa su:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li><strong>Consenso dell'interessato</strong> (art. 6, par. 1, lett. a) GDPR) per l'invio di comunicazioni commerciali</li>
              <li><strong>Esecuzione di misure precontrattuali</strong> (art. 6, par. 1, lett. b) GDPR) per rispondere a richieste di preventivo</li>
              <li><strong>Interesse legittimo</strong> (art. 6, par. 1, lett. f) GDPR) per analisi statistiche e miglioramento dei servizi</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              5. Modalità di Trattamento
            </h2>
            <p>
              I dati personali sono trattati con strumenti informatici e telematici, con logiche strettamente correlate alle finalità indicate e con l'adozione di misure di sicurezza idonee a garantire la riservatezza e prevenire accessi non autorizzati.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              6. Periodo di Conservazione
            </h2>
            <p>
              I dati personali sono conservati per il tempo strettamente necessario alle finalità per cui sono stati raccolti:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li><strong>Richieste di preventivo:</strong> fino a 24 mesi dalla richiesta o fino alla conclusione del contratto</li>
              <li><strong>Comunicazioni commerciali:</strong> fino alla revoca del consenso</li>
              <li><strong>Dati di navigazione:</strong> massimo 26 mesi (Google Analytics)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              7. Comunicazione e Diffusione dei Dati
            </h2>
            <p>
              I dati personali non sono comunicati a terzi, salvo nei seguenti casi:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Obbligo di legge</li>
              <li>Fornitori di servizi tecnici (hosting, email marketing) che agiscono come responsabili del trattamento</li>
            </ul>
            <p className="mt-4">
              I dati non sono mai diffusi o venduti a terze parti per finalità commerciali.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              8. Cookie e Tecnologie di Tracciamento
            </h2>
            <p>
              Questo sito utilizza:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li><strong>Google Analytics:</strong> per analizzare il traffico del sito. I dati sono raccolti in forma anonimizzata.</li>
              <li><strong>Cookie tecnici:</strong> necessari per il corretto funzionamento del sito</li>
            </ul>
            <p className="mt-4">
              Per maggiori informazioni sulla gestione dei cookie, consulta le impostazioni del tuo browser.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              9. Diritti dell'Interessato
            </h2>
            <p>
              In qualità di interessato, hai il diritto di:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li><strong>Accesso:</strong> ottenere conferma dell'esistenza dei tuoi dati e riceverne copia</li>
              <li><strong>Rettifica:</strong> correggere dati inesatti o incomplete</li>
              <li><strong>Cancellazione:</strong> richiedere la cancellazione dei dati (diritto all'oblio)</li>
              <li><strong>Limitazione:</strong> limitare il trattamento in casi specifici</li>
              <li><strong>Portabilità:</strong> ricevere i dati in formato strutturato</li>
              <li><strong>Opposizione:</strong> opporti al trattamento per motivi legittimi</li>
              <li><strong>Revoca del consenso:</strong> revocare il consenso in qualsiasi momento</li>
            </ul>
            <p className="mt-4">
              Per esercitare i tuoi diritti, contattaci a:{' '}
              <a href="mailto:assistenza.greg4web@gmail.com" className="text-blue-600 hover:underline">
                assistenza.greg4web@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              10. Reclamo all'Autorità di Controllo
            </h2>
            <p>
              Hai il diritto di proporre reclamo all'Autorità Garante per la Protezione dei Dati Personali se ritieni che il trattamento dei tuoi dati violi il GDPR.
            </p>
            <p className="mt-2">
              <strong>Garante per la protezione dei dati personali</strong><br />
              Piazza Venezia, 11 - 00187 Roma<br />
              Tel: +39 06 696771<br />
              Email: <a href="mailto:garante@gpdp.it" className="text-blue-600 hover:underline">garante@gpdp.it</a><br />
              Web: <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.garanteprivacy.it</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              11. Modifiche alla Privacy Policy
            </h2>
            <p>
              Il Titolare si riserva il diritto di modificare questa Privacy Policy in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con indicazione della data di aggiornamento.
            </p>
          </section>

          <section className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Per qualsiasi domanda o richiesta riguardante questa Privacy Policy, contatta:{' '}
              <a href="mailto:assistenza.greg4web@gmail.com" className="text-blue-600 hover:underline">
                assistenza.greg4web@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}