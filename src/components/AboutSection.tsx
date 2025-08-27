import React from 'react'

const AboutSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Mais que um evento, uma <span className="text-[#9CBE31]">comunidade</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                O Wake & Move nasceu do propósito dos seus idealizadores, Yume Matsumura, 
                Marco Antônio Fernandes e Daniel Calazans, que uniram forças para criar 
                muito mais do que um evento: <strong>uma comunidade saudável</strong>, voltada à 
                promoção de hábitos que transformam vidas.
              </p>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Nossa missão é estimular uma vida equilibrada e ativa, conectando pessoas 
                que compartilham a paixão pelo bem-estar, movimento e crescimento pessoal.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Cada edição é cuidadosamente planejada para oferecer uma experiência única, 
                onde o exercício físico se encontra com o desenvolvimento mental e espiritual.
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-[#9CBE31] to-[#7A9626] rounded-2xl p-8 text-white">
                <h3 className="font-display text-2xl mb-4">Nossa Visão</h3>
                <p className="text-lg opacity-90">
                  Criar uma comunidade onde cada pessoa se sinta motivada a despertar 
                  seu melhor potencial através do movimento, conexão e bem-estar.
                </p>
              </div>
              
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#FFD700] rounded-full opacity-20"></div>
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#9CBE31] rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
