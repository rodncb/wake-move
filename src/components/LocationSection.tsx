import React from 'react'

const LocationSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Um Local à Altura da Nossa <span className="text-[#9CBE31]">Energia</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            O Aeroporto de Resende oferece a estrutura perfeita para nosso evento: 
            amplo, seguro e com a energia única que só um local especial pode proporcionar.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Info */}
          <div>
            <div className="bg-gray-50 rounded-2xl p-8 mb-8">
              <h3 className="font-semibold text-2xl text-gray-900 mb-4">
                Por que o Aeroporto de Resende?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#9CBE31] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    <strong>Espaço Amplo:</strong> Área extensa para corridas e atividades ao ar livre
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#9CBE31] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    <strong>Segurança:</strong> Local controlado e seguro para todos os participantes
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#9CBE31] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    <strong>Infraestrutura:</strong> Instalações adequadas para receber 300+ pessoas
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#9CBE31] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    <strong>Exclusividade:</strong> Um local único que torna a experiência ainda mais especial
                  </span>
                </li>
              </ul>
            </div>

            {/* Address */}
            <div className="bg-[#9CBE31] bg-opacity-10 rounded-xl p-6">
              <h4 className="font-semibold text-lg text-gray-900 mb-3">Endereço</h4>
              <p className="text-gray-700 mb-2">Aeroporto de Resende</p>
              <p className="text-gray-700 mb-4">Resende, RJ</p>
              
              <div className="flex gap-4">
                <button className="bg-[#9CBE31] text-white px-4 py-2 rounded-lg hover:bg-[#7A9626] transition-colors">
                  Ver no Google Maps
                </button>
                <button className="border border-[#9CBE31] text-[#9CBE31] px-4 py-2 rounded-lg hover:bg-[#9CBE31] hover:text-white transition-colors">
                  Como Chegar
                </button>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="relative">
            <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#9CBE31] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-gray-600 text-lg">Mapa do Google Maps</p>
                <p className="text-gray-500">Aeroporto de Resende, RJ</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#FFD700] rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#9CBE31] rounded-full opacity-30"></div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-[#9CBE31] bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#9CBE31]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3a4 4 0 118 0v4m-4 6v6m0-6l-2-2m2 2l2-2" />
              </svg>
            </div>
            <h4 className="font-semibold text-lg text-gray-900 mb-2">Estacionamento</h4>
            <p className="text-gray-600">Amplo estacionamento gratuito para todos os participantes</p>
          </div>
          
          <div className="text-center">
            <div className="bg-[#9CBE31] bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#9CBE31]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-semibold text-lg text-gray-900 mb-2">Chegue Cedo</h4>
            <p className="text-gray-600">Recomendamos chegar 30 minutos antes para check-in</p>
          </div>
          
          <div className="text-center">
            <div className="bg-[#9CBE31] bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#9CBE31]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 className="font-semibold text-lg text-gray-900 mb-2">Segurança</h4>
            <p className="text-gray-600">Local controlado com equipe de segurança e primeiros socorros</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationSection
