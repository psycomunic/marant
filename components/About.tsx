
import React from 'react';
import { ShieldCheck, Target, ChevronRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-24 items-center">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 glass p-4 rounded-[3rem]">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1000" 
                alt="Engenharia de Ponta" 
                className="w-full h-[600px] object-cover rounded-[2.5rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-[2.5rem]"></div>
            </div>
            {/* Decoration Glass Circle */}
            <div className="absolute -top-10 -left-10 w-40 h-40 glass rounded-full blur-xl opacity-50"></div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="flex items-center gap-3 text-blue-500 font-bold tracking-[0.4em] uppercase text-xs mb-6">
              <div className="w-10 h-[2px] bg-blue-500"></div> NOSSA ESSÊNCIA
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-10 leading-tight tracking-tighter">
              A fusão entre <span className="text-blue-500 italic">solidez</span> e <span className="underline decoration-blue-600 underline-offset-8">precisão.</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-400 leading-relaxed mb-12">
              <p>
                A <strong>Marant Construtora e Metalúrgica</strong> representa a evolução do mercado da construção civil. Nascemos da visão de integrar processos para entregar resultados onde outros veem obstáculos.
              </p>
              <p>
                Com sede em Santa Catarina, transcendemos fronteiras para levar excelência em obras industriais, comerciais e infraestrutura técnica em todo o Sul e Sudeste do Brasil.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="glass p-8 rounded-3xl hover:bg-white/5 transition-colors group">
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
                  <Target size={28} />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Missão de Impacto</h4>
                <p className="text-sm text-gray-400">Transformar investimentos em marcos arquitetônicos com eficácia absoluta.</p>
              </div>
              <div className="glass p-8 rounded-3xl hover:bg-white/5 transition-colors group">
                <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-indigo-600/20 group-hover:scale-110 transition-transform">
                  <ShieldCheck size={28} />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Visão de Futuro</h4>
                <p className="text-sm text-gray-400">Ser a marca sinônimo de confiança e inovação em engenharia pesada no Brasil.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
