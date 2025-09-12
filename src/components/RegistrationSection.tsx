import React, { useState } from "react";
import { RegistrationData } from "../types";

const RegistrationSection = () => {
  const [formData, setFormData] = useState<RegistrationData>({
    name: "",
    email: "",
    cpf: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Preparar dados para envio
      const registrationData = {
        ...formData,
        event: "Wake & Move Primavera 2025",
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        referrer: document.referrer,
        sessionId: Date.now().toString(),
      };

      // Salvar dados no banco via API
      try {
        const response = await fetch("/api/analytics.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(registrationData),
        });

        if (response.ok) {
          console.log("Dados salvos no banco com sucesso!");
        } else {
          console.warn(
            "Erro ao salvar no banco, usando localStorage como backup"
          );
        }
      } catch (apiError) {
        console.warn("API indisponível, salvando apenas no localStorage");
      }

      // Salvar no localStorage como backup
      localStorage.setItem(
        "wakeMoveRegistration",
        JSON.stringify(registrationData)
      );

      // Mostrar modal de confirmação
      setShowModal(true);

      // Limpar formulário
      setFormData({
        name: "",
        email: "",
        cpf: "",
        phone: "",
      });

      // Após 2 segundos, abrir Mercado Pago e fechar modal
      setTimeout(() => {
        setShowModal(false);
        window.open(
          "https://www.mercadopago.com.br/checkout/v1/payment/redirect/f0f21c9e-f3fa-4a33-8964-500e0d90c869/payment-option-form/?source=link&preference-id=148685969-e56f399f-d64e-49d5-bc74-43d272009574&router-request-id=904b1fe3-d1c6-4bad-9e70-940297e501d6&p=87e33a942928355a104d6378761d1c94",
          "_blank"
        );
      }, 2000);
    } catch (error) {
      console.error("Erro ao processar inscrição:", error);
      alert("Erro ao processar inscrição. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
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
              Kit Completo Wake & Move
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
              <div className="text-center">
                <span className="text-3xl font-bold text-gray-900">
                  R$ 197,00
                </span>
                <p className="text-sm text-gray-500 mt-2">
                  Valor único da inscrição
                </p>
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

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "PROCESSANDO..." : "FINALIZAR INSCRIÇÃO"}
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-500">
              <p>Pagamento 100% seguro via Mercado Pago</p>
              <p className="mt-1">PIX • Cartão de Crédito • Boleto</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Confirmação */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl transform animate-pulse">
            <div className="mb-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Obrigado! ✨
              </h3>
              <p className="text-gray-600">
                Seus dados foram salvos com sucesso!
                <br />
                Você será redirecionado para o pagamento...
              </p>
            </div>
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#9CBE31]"></div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default RegistrationSection;
