import React from 'react'
import { Users, MapPin, Trophy } from 'lucide-react'

const SpringEditionSection = () => {
  const features = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Local Exclusivo",
      description: "Estrutura ampla e segura no Aeroporto de Resende para uma experiência única."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Comunidade Ampliada", 
      description: "Expectativa de mais de 300 participantes para uma experiência incrível."
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Sucesso Comprovado",
      description: "Nossa primeira edição reuniu mais de 100 pessoas e foi um sucesso total."
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            O que esperar da <span className="text-[#9CBE31]">Edição Primavera</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma experiência transformadora que combina movimento, bem-estar e conexão 
            em um ambiente único e inspirador.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[#9CBE31] bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <div className="text-[#9CBE31]">
                  {feature.icon}
                </div>
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-[#9CBE31] to-[#7A9626] rounded-2xl p-12 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">300+</div>
              <div className="text-lg opacity-90">Participantes Esperados</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-lg opacity-90">Energia e Diversão</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1</div>
              <div className="text-lg opacity-90">Experiência Única</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpringEditionSection
