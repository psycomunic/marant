
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div className="flex items-center gap-2">
            <img
              src="/logo-marant.png"
              alt="Marant Construtora"
              className="h-10 w-auto object-contain brightness-0"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            <a href="#home" className="text-gray-500 hover:text-blue-600 transition-colors text-sm font-medium">Home</a>
            <a href="#sobre" className="text-gray-500 hover:text-blue-600 transition-colors text-sm font-medium">Quem Somos</a>
            <a href="#servicos" className="text-gray-500 hover:text-blue-600 transition-colors text-sm font-medium">Serviços</a>
            <a href="#sustentabilidade" className="text-gray-500 hover:text-blue-600 transition-colors text-sm font-medium">Sustentabilidade</a>
            <a href="#contato" className="text-gray-500 hover:text-blue-600 transition-colors text-sm font-medium">Contato</a>
          </div>

          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} Marant Construtora e Metalúrgica. Todos os direitos reservados.
          </p>
        </div>

        <div className="pt-8 border-t border-gray-100 text-center">
          <p className="text-[10px] text-gray-400 uppercase tracking-widest">
            Atuando com excelência em PR, SP, SC e RS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
