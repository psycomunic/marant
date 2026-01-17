
import React from 'react';
import { ArrowRight, Play, Star } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background Abstract Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/20 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-600/10 blur-[120px] rounded-full"></div>
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2000"
          alt="Industrial Background"
          className="w-full h-full object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-3/5 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-blue-400 text-[10px] md:text-xs font-bold tracking-widest mb-6 md:mb-8 animate-bounce">
            <Star size={14} fill="currentColor" /> EXCELÊNCIA DESDE 2019
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-8xl font-black text-white leading-[0.9] mb-6 md:mb-8 tracking-tighter break-words">
            PROJETAMOS O <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 text-glow">EXTRAORDINÁRIO.</span>
          </h1>
          <p className="text-base md:text-xl text-gray-400 mb-8 md:mb-12 max-w-xl leading-relaxed font-medium">
            Integramos construção civil e metalurgia de alta precisão para criar estruturas que definem o futuro de indústrias e negócios.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center lg:justify-start">
            <button
              onClick={onCtaClick}
              className="bg-blue-600 text-white px-8 md:px-10 py-4 md:py-5 font-black flex items-center justify-center gap-3 hover:bg-blue-500 transition-all rounded-2xl shadow-[0_20px_40px_rgba(37,99,235,0.3)] hover:-translate-y-1 text-sm md:text-base"
            >
              INICIAR PROJETO <ArrowRight size={20} />
            </button>
            <button className="glass text-white px-8 md:px-10 py-4 md:py-5 font-black flex items-center justify-center gap-3 hover:bg-white/10 transition-all rounded-2xl text-sm md:text-base">
              <Play size={20} fill="white" /> VER PORTFÓLIO
            </button>
          </div>
        </div>

        {/* Floating Glass Cards */}
        <div className="lg:w-2/5 relative flex justify-center mt-10 lg:mt-0">
          <div className="relative w-full max-w-xs md:max-w-md aspect-square">
            {/* Main Image in Glass Frame */}
            <div className="absolute inset-0 glass p-3 rounded-[32px] md:rounded-[40px] rotate-3 hover:rotate-0 transition-transform duration-700">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800"
                alt="Main Project"
                className="w-full h-full object-cover rounded-[24px] md:rounded-[32px]"
              />
            </div>

            {/* Stats Card 1 */}
            <div className="absolute -top-6 -right-2 md:-top-10 md:-right-6 glass p-4 md:p-6 rounded-2xl shadow-2xl animate-float">
              <p className="text-2xl md:text-4xl font-black text-blue-500">+250</p>
              <p className="text-[8px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest">Obras Entregues</p>
            </div>

            {/* Stats Card 2 */}
            <div className="absolute -bottom-4 -left-2 md:-bottom-6 md:-left-10 glass p-4 md:p-6 rounded-2xl shadow-2xl animate-float-delayed">
              <div className="flex -space-x-3 mb-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-gray-800 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="client" />
                  </div>
                ))}
              </div>
              <p className="text-xs font-bold text-white uppercase tracking-widest">Clientes Satisfeitos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
