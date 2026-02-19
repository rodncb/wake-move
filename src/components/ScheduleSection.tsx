import React from "react";

interface ScheduleItem {
  time: string;
  activity: string;
  description: string;
  instagramLinks?: Array<{
    name: string;
    url: string;
  }>;
}

const ScheduleSection = () => {
  const schedule: ScheduleItem[] = [
    {
      time: "7:00",
      activity: "Chegada & Check-in",
      description: "Recepção calorosa.",
    },
    {
      time: "7:30",
      activity: "Aquecimento",
      description: "Prepare corpo e mente para um dia de movimento.",
    },
    {
      time: "8:00",
      activity: "Corrida",
      description:
        "Opções de 5km ou 10km para todos os níveis. Sua superação, no seu ritmo.",
    },
    {
      time: "9:30",
      activity: "Ativações e networking",
      description:
        "Conecte-se com especialistas em saúde e bem-estar.",
    },
    {
      time: "10:00",
      activity: "Café da Manhã Artesã e DJ",
      description:
        "Um momento delicioso para celebrar conquistas, relaxar e confraternizar.",
      instagramLinks: [
        {
          name: "@artesapanificacao",
          url: "https://www.instagram.com/artesapanificacao",
        },
      ],
    },
  ];

  return (
    <section id="programacao" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Sua manhã com energia e{" "}
            <span className="text-[#9CBE31]">conexão</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada detalhe é planejado para despertar sua vitalidade e criar
            experiências únicas.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {schedule.map((item: ScheduleItem, index: number) => (
            <div key={index} className="flex items-start gap-8 mb-8 last:mb-0">
              <div className="flex-shrink-0">
                <div className="bg-[#9CBE31] text-white font-bold text-lg px-4 py-2 rounded-lg min-w-[80px] text-center">
                  {item.time}
                </div>
              </div>

              <div className="flex-grow">
                <div className="bg-gray-50 rounded-xl p-6 relative">
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                    {item.activity}
                  </h3>
                  <p className="text-gray-600 mb-3">{item.description}</p>
                  {item.instagramLinks && (
                    <div className="flex flex-wrap gap-3">
                      {item.instagramLinks.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-[#9CBE31] hover:text-[#7A9626] transition-colors text-sm font-medium"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                          {link.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {index < schedule.length - 1 && (
                  <div className="w-px h-8 bg-gray-200 ml-6 mt-4"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto mt-16">
          <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-2xl p-8 text-center">
            <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">
              Café da Manhã Artesã
            </h3>
            <p className="text-gray-800 text-lg">
              Termine o evento com um delicioso café da manhã pós-corrida,
              momento perfeito para celebrar suas conquistas e fazer novos
              amigos!
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-500 italic">
            *A programação pode ser alterada sem aviso prévio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
