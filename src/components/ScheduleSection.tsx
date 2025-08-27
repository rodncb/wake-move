import React from 'react'

const ScheduleSection = () => {
  const schedule = [
    {
      time: "7:00",
      activity: "Chegada e Check-in",
      description: "Recepção dos participantes e retirada de kits"
    },
    {
      time: "7:30", 
      activity: "Aquecimento",
      description: "Preparação corporal para as atividades"
    },
    {
      time: "8:00",
      activity: "Corrida",
      description: "Opções de 4km e 8km para todos os níveis"
    },
    {
      time: "9:00",
      activity: "Yoga",
      description: "Prática de relaxamento e conexão"
    },
    {
      time: "9:45",
      activity: "Palestras",
      description: "Bate-papo com profissionais de saúde"
    },
    {
      time: "10:30",
      activity: "Café da Manhã",
      description: "Confraternização e networking"
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nossa <span className="text-[#9CBE31]">Programação</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Um dia completo de atividades cuidadosamente planejadas para despertar 
            o melhor em você.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {schedule.map((item, index) => (
            <div key={index} className="flex items-start gap-8 mb-8 last:mb-0">
              {/* Time */}
              <div className="flex-shrink-0">
                <div className="bg-[#9CBE31] text-white font-bold text-lg px-4 py-2 rounded-lg min-w-[80px] text-center">
                  {item.time}
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-grow">
                <div className="bg-gray-50 rounded-xl p-6 relative">
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                    {item.activity}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
                
                {/* Connector line */}
                {index < schedule.length - 1 && (
                  <div className="w-px h-8 bg-gray-200 ml-6 mt-4"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Box */}
        <div className="max-w-2xl mx-auto mt-16">
          <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-2xl p-8 text-center">
            <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">
              Café da Manhã Artesã
            </h3>
            <p className="text-gray-800 text-lg">
              Termine o evento com um delicioso café da manhã pós-corrida, 
              momento perfeito para celebrar suas conquistas e fazer novos amigos!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ScheduleSection
