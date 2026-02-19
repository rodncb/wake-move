import React from "react";
import { Calendar, Clock, MapPin } from "lucide-react";

const HeroSection = () => {
  const whatsappUrl =
    "https://wa.me/5524999303748?text=Ol%C3%A1!%20Quero%20me%20inscrever%20no%20Wake%20%26%20Move%20Ver%C3%A3o!";

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Vídeo de Fundo - Desktop */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="hidden md:block absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/media/Siteloop_primavera_v01.mp4" type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>

      {/* Vídeo de Fundo - Mobile */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="md:hidden absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/media/VideoWakeMobile.mp4" type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>

      {/* Overlay escuro para melhor legibilidade */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-20">
        {/* Conteúdo centralizado: cards + botão */}
        <div className="flex flex-col items-center justify-center min-h-screen gap-6">
          {/* Event Info - Cards */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 max-w-3xl mx-auto">
            {/* Card Data */}
            <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-3 flex items-center w-full sm:w-[200px] h-[60px]">
              <div className="bg-[#9CBE31] p-1.5 rounded-full mr-2 flex-shrink-0">
                <Calendar className="w-4 h-4 text-white" />
              </div>
              <div className="flex-grow text-center">
                <p className="text-xs text-gray-500 mb-0.5">Data</p>
                <p className="font-bold text-gray-900 text-sm">15/03/2026</p>
              </div>
            </div>

            {/* Card Horário */}
            <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-3 flex items-center w-full sm:w-[200px] h-[60px]">
              <div className="bg-[#9CBE31] p-1.5 rounded-full mr-2 flex-shrink-0">
                <Clock className="w-4 h-4 text-white" />
              </div>
              <div className="flex-grow text-center">
                <p className="text-xs text-gray-500 mb-0.5">Horário</p>
                <p className="font-bold text-gray-900 text-sm">7am</p>
              </div>
            </div>

            {/* Card Local */}
            <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-3 flex items-center w-full sm:w-[200px] h-[60px]">
              <div className="bg-[#9CBE31] p-1.5 rounded-full mr-2 flex-shrink-0">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <div className="flex-grow text-center">
                <p className="text-xs text-gray-500 mb-0.5">Local</p>
                <p className="font-bold text-gray-900 text-xs whitespace-nowrap">
                  Artesã Pães e Cafés
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button - WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-12 py-3 sm:py-4 inline-block w-full max-w-xs sm:max-w-none sm:w-auto text-center"
          >
            QUERO VIVER ESSA EXPERIÊNCIA
          </a>
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
