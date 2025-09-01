import React, { useState } from "react";
import { RegistrationData } from "../types";

const RegistrationSection = () => {
  const [formData, setFormData] = useState<RegistrationData>({
    name: "",
    email: "",
    cpf: "",
    phone: "",
    distance: "4km",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui será implementada a integração com Mercado Pago
    console.log("Dados de inscrição:", formData);
    alert("Em breve você será redirecionado para o pagamento!");
  };

  return (
    <section
      id="registration"
      className="section-padding bg-gradient-to-br from-[#9CBE31] to-[#7A9626]"
    >
      <div className="container mx-auto px-6">
        <div className="text-center text-white mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
            Faça sua <span className="text-[#FFD700]">Inscrição</span>
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Garante sua vaga no Wake & Move Primavera e viva uma experiência
            transformadora de movimento e bem-estar.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Package Info */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="font-display text-2xl font-bold text-gray-900 mb-6">
              Kit Completo - Lote 1
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#9CBE31] rounded-full"></div>
                <span className="text-gray-700">
                  Inscrição na corrida (4km ou 8km)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#9CBE31] rounded-full"></div>
                <span className="text-gray-700">Aula de Yoga</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#9CBE31] rounded-full"></div>
                <span className="text-gray-700">Acesso às palestras</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#9CBE31] rounded-full"></div>
                <span className="text-gray-700">Café da manhã Artesã</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-gray-900">
                  R$ 89,00
                </span>
                <span className="text-sm text-gray-500">ou 3x sem juros</span>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9CBE31] focus:border-transparent"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9CBE31] focus:border-transparent"
                  placeholder="seu@email.com"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="cpf"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    CPF *
                  </label>
                  <input
                    type="text"
                    id="cpf"
                    name="cpf"
                    required
                    value={formData.cpf}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9CBE31] focus:border-transparent"
                    placeholder="000.000.000-00"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9CBE31] focus:border-transparent"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="distance"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Distância da Corrida *
                </label>
                <select
                  id="distance"
                  name="distance"
                  required
                  value={formData.distance}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9CBE31] focus:border-transparent"
                >
                  <option value="4km">4 km - Iniciante</option>
                  <option value="8km">8 km - Intermediário</option>
                </select>
              </div>

              <button type="submit" className="w-full btn-primary py-4 text-lg">
                FINALIZAR INSCRIÇÃO
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-500">
              <p>Pagamento 100% seguro via Mercado Pago</p>
              <p className="mt-1">PIX • Cartão de Crédito • Boleto</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
