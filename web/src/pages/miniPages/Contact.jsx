import React from 'react';

export default function ContactForm() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 w-full max-w-4xl">
        
        {/* Section d'intro */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full mb-4">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contactez-Nous</h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Nous sommes là pour vous accompagner. Que vous ayez une question, un projet en tête ou besoin d'assistance, 
              notre équipe est prête à vous répondre dans les plus brefs délais.
            </p>
          </div>
        </div>

        {/* Inputs */}
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 w-full max-w-3xl mx-auto mb-8">
          <div className="flex flex-col space-y-6 sm:space-y-8 flex-1">
            <input 
              type="email" 
              placeholder="Votre Email" 
              className="px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg md:text-xl border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 w-full"
            />
            <input 
              type="text" 
              placeholder="Votre Nom" 
              className="px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg md:text-xl border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 w-full"
            />
          </div>

          <div className="flex-1">
            <textarea 
              placeholder="Votre message"
              className="w-full h-full min-h-[150px] sm:min-h-[180px] md:h-[200px] px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg md:text-xl border border-gray-300 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            />
          </div>
        </div>

        {/* Bouton */}
        <div className="w-full max-w-3xl mx-auto mb-12">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg sm:text-xl font-semibold py-4 sm:py-5 px-8 sm:px-10 rounded-2xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
            Envoyer le Message
          </button>
        </div>

        {/* Infos */}
        <div className="border-t border-gray-200 pt-10 sm:pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center">
            
            {/* localisation */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Notre Bureau</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Ambohimiandry<br />Antananarivo, Madagascar
              </p>
            </div>

            {/* téléphone */}
            <div className="flex flex-col items-center">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Téléphone</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                +261 37 74 596 41<br />
                Lun-Ven: 8h-16h
              </p>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                nerocode@gmail.com<br />
                Réponse sous 24h
              </p>
            </div>

          </div>

          {/* Message final */}
          <div className="mt-10 sm:mt-12 text-center">
            <div className="bg-blue-50 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                Nous avons hâte de vous entendre !
              </h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Votre message est important pour nous. Notre équipe dédiée s'engage à vous fournir 
                une réponse personnalisée et détaillée. Ensemble, donnons vie à vos projets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}