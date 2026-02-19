import React from "react";
import { Organizer } from "../types";

const OrganizersSection = () => {
  const organizers: Organizer[] = [
    {
      name: "Yume Matsumura",
      description:
        "Apaixonada por esportes, empreendedora e chef da Padaria Artesã, especializada em fermentação natural e viennoiserie.",
      photo: "/media/Yume.jpeg",
      socialLinks: {
        instagram: "@yume.matsumura",
      },
    },
    {
      name: "Marco Antônio Fernandes",
      description:
        "Fundador da Iron House e da Metodologia Base Forte, apaixonado por esporte, inspira equilíbrio e estilo de vida ativo.",
      photo: "/media/Marco.png",
      socialLinks: {
        instagram: "@marcovfernandes",
      },
    },
    {
      name: "Daniel Calazans",
      description:
        "Engenheiro, visionário em experiências coletivas, saúde e comunidade.",
      photo: "/media/Daniel.png",
      socialLinks: {
        instagram: "@calazans_daniel",
      },
    },
    {
      name: "Tales Rocha",
      description:
        "Empreendedor criativo com background em fotografia, audiovisual e marketing, trabalha há anos construindo posicionamento e resultados para marcas na região. É fundador da Roki Media e atua na interseção entre criatividade e tecnologia, sempre com foco em experiência, narrativa e impacto.",
      photo: "/media/Tales.jpg",
      socialLinks: {
        instagram: "@rochatales",
      },
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-[#9CBE31]">Idealizadores</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quatro apaixonados por saúde, movimento e bem-estar uniram forças
            para transformar manhãs comuns em experiências únicas em Resende e
            região.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {organizers.map((organizer, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
            >
              {/* Profile Photo */}
              <div className="w-32 h-32 mx-auto mb-6">
                {organizer.photo ? (
                  <img
                    src={organizer.photo}
                    alt={organizer.name}
                    className="w-full h-full object-cover object-center rounded-full shadow-lg"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#9CBE31] to-[#7A9626] rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {organizer.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                )}
              </div>

              <h3 className="font-semibold text-xl text-gray-900 mb-2">
                {organizer.name}
              </h3>

              {organizer.description && (
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {organizer.description}
                </p>
              )}

              {organizer.socialLinks?.instagram && (
                <a
                  href={`https://instagram.com/${organizer.socialLinks.instagram.replace(
                    "@",
                    ""
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#9CBE31] hover:text-[#7A9626] transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  {organizer.socialLinks.instagram}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganizersSection;
