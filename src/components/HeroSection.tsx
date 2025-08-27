import React from 'react'
import { Calendar, Clock, MapPin } from 'lucide-react'

const HeroSection = () => {
  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-12 sm:py-20">
          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            {/* Logo MAIOR no mobile */}
            <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-900 mb-4 leading-tight">
              WAKE
              <br />
              <span className="text-[#9CBE31]">&</span> MOVE
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-3xl font-semibold text-gray-700 mb-6">
              PRIMAVERA
            </h2>
            <p className="text-xl sm:text-xl text-gray-600 mb-8 max-w-lg">
              A energia da primavera em movimento. Corrida, yoga e bem-estar.
            </p>
            
            {/* Event Info - Boxes MENORES no mobile */}
            <div className="grid grid-cols-1 gap-3 mb-10 max-w-xs mx-auto lg:max-w-none lg:grid-cols-3 lg:gap-6">
              <div className="bg-white rounded-lg shadow-md p-4 h-16 lg:h-28 lg:p-6 flex items-center">
                <div className="bg-[#9CBE31] p-2 lg:p-3 rounded-full flex-shrink-0 mr-3">
                  {/* Ícones MENORES no mobile */}
                  <Calendar className="w-4 h-4 lg:w-6 lg:h-6 text-white" />
                </div>
                <div className="flex-grow text-left">
                  {/* Texto COMPACTO no mobile */}
                  <p className="text-xs lg:text-sm text-gray-500 mb-1">Data</p>
                  <p className="font-semibold text-gray-900 text-sm lg:text-base">26/10/25</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-4 h-16 lg:h-28 lg:p-6 flex items-center">
                <div className="bg-[#9CBE31] p-2 lg:p-3 rounded-full flex-shrink-0 mr-3">
                  <Clock className="w-4 h-4 lg:w-6 lg:h-6 text-white" />
                </div>
                <div className="flex-grow text-left">
                  <p className="text-xs lg:text-sm text-gray-500 mb-1">Horário</p>
                  <p className="font-semibold text-gray-900 text-sm lg:text-base">7h</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-4 h-16 lg:h-28 lg:p-6 flex items-center">
                <div className="bg-[#9CBE31] p-2 lg:p-3 rounded-full flex-shrink-0 mr-3">
                  <MapPin className="w-4 h-4 lg:w-6 lg:h-6 text-white" />
                </div>
                <div className="flex-grow text-left">
                  <p className="text-xs lg:text-sm text-gray-500 mb-1">Local</p>
                  <p className="font-semibold text-gray-900 text-sm lg:text-base leading-tight">Resende</p>
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <button 
              onClick={scrollToRegistration}
              className="btn-primary text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 inline-block"
            >
              GARANTIR MINHA VAGA
            </button>
          </div>
          
          {/* Image/Visual */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 mx-auto max-w-md">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-[#9CBE31] to-[#7A9626] rounded-full flex items-center justify-center mb-6">
                  <div className="text-white text-4xl font-bold">W&M</div>
                </div>
                <h3 className="font-display text-2xl text-gray-900 mb-2">EDIÇÃO PRIMAVERA</h3>
                <p className="text-gray-600">Mais de 300 participantes esperados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#9CBE31] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#9CBE31] rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
