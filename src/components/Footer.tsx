import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="font-display text-3xl font-bold mb-2">
                WAKE <span className="text-[#9CBE31]">&</span> MOVE
              </h2>
              <p className="text-gray-400 text-lg">
                Mais que um evento, uma comunidade saudável.
              </p>
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed">
              O Wake & Move nasceu para conectar pessoas apaixonadas por
              bem-estar, movimento e transformação pessoal. Junte-se à nossa
              comunidade e desperte seu melhor potencial.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("sobre")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-400 hover:text-[#9CBE31] transition-colors text-left"
                >
                  Sobre o Evento
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("programacao")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-400 hover:text-[#9CBE31] transition-colors text-left"
                >
                  Programação
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("registration")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-400 hover:text-[#9CBE31] transition-colors text-left"
                >
                  Inscrições
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("local")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-400 hover:text-[#9CBE31] transition-colors text-left"
                >
                  Informações do Evento
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-[#9CBE31]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:contato@wakemove.com.br"
                  className="text-gray-400 hover:text-[#9CBE31] transition-colors"
                >
                  contato@wakemove.com.br
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-[#9CBE31]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-400">Resende, RJ</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Wake & Move. Todos os direitos reservados.
            </p>

            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-[#9CBE31] transition-colors"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#9CBE31] transition-colors"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
