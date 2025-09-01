import React from "react";
import { Organizer } from "../types";

const OrganizersSection = () => {
  const organizers: Organizer[] = [
    {
      name: "Yume Matsumura",
      socialLinks: {
        instagram: "@yume",
      },
    },
    {
      name: "Marco Antônio Fernandes",
      socialLinks: {
        instagram: "@marco",
      },
    },
    {
      name: "Daniel Calazans",
      socialLinks: {
        instagram: "@daniel",
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
            Conheça quem está por trás do Wake & Move e trouxe essa iniciativa
            transformadora para Resende e região.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {organizers.map((organizer, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
            >
              {/* Photo placeholder */}
              <div className="w-32 h-32 bg-gradient-to-br from-[#9CBE31] to-[#7A9626] rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">
                  {organizer.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>

              <h3 className="font-semibold text-xl text-gray-900 mb-4">
                {organizer.name}
              </h3>

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
