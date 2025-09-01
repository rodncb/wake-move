import React from "react";
import { Calendar, Clock, MapPin } from "lucide-react";

const HeroSection = () => {
  const scrollToRegistration = () => {
    document
      .getElementById("registration")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex items-center justify-center min-h-screen py-12 sm:py-20">
          {/* Content Totalmente Centralizado */}
          <div className="w-full max-w-4xl text-center px-4 sm:px-6">
            {/* Logo Wake & Move - Responsivo para mobile/tablet */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-black mb-3 sm:mb-4 leading-tight">
              WAKE <span className="text-[#9CBE31]">&</span> MOVE
            </h1>
            {/* Edição Primavera - Otimizado para tablet/mobile */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 mb-4 sm:mb-6">
              EDIÇÃO PRIMAVERA
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto px-2">
              A energia da primavera em movimento. Corrida, yoga e bem-estar.
            </p>

            {/* Event Info - Cards Responsivos */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 max-w-3xl mx-auto">
              {/* Card Data - Otimizado mobile/tablet */}
              <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 flex items-center w-full sm:min-w-[200px] max-w-sm">
                <div className="bg-[#9CBE31] p-2 sm:p-3 rounded-full mr-3 sm:mr-4 flex-shrink-0">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="flex-grow">
                  <p className="text-xs sm:text-sm text-gray-500 mb-1">Data</p>
                  <p className="font-bold text-gray-900 text-base sm:text-lg">
                    26/10/25
                  </p>
                </div>
              </div>

              {/* Card Horário - Otimizado mobile/tablet */}
              <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 flex items-center w-full sm:min-w-[200px] max-w-sm">
                <div className="bg-[#9CBE31] p-2 sm:p-3 rounded-full mr-3 sm:mr-4 flex-shrink-0">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="flex-grow">
                  <p className="text-xs sm:text-sm text-gray-500 mb-1">
                    Horário
                  </p>
                  <p className="font-bold text-gray-900 text-base sm:text-lg">
                    7h
                  </p>
                </div>
              </div>

              {/* Card Local - Otimizado mobile/tablet */}
              <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 flex items-center w-full sm:min-w-[200px] max-w-sm">
                <div className="bg-[#9CBE31] p-2 sm:p-3 rounded-full mr-3 sm:mr-4 flex-shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="flex-grow">
                  <p className="text-xs sm:text-sm text-gray-500 mb-1">Local</p>
                  <p className="font-bold text-gray-900 text-base sm:text-lg">
                    Resende
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button - Responsivo mobile/tablet */}
            <button
              onClick={scrollToRegistration}
              className="btn-primary text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-12 py-3 sm:py-4 inline-block w-full max-w-xs sm:max-w-none sm:w-auto"
            >
              GARANTIR MINHA VAGA
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator - Hidden on mobile and tablet */}
      <div className="hidden lg:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#9CBE31] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#9CBE31] rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
