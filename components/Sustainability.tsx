
import React from 'react';
import { Leaf, Trees, Droplets, Recycle, ArrowRight, Zap } from 'lucide-react';

const Sustainability: React.FC = () => {
  return (
    <section id="sustentabilidade" className="py-32 bg-black overflow-hidden relative">
      {/* Background Glows */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-600/10 blur-[150px] rounded-full"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="glass-dark rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-24 border-emerald-500/10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-emerald-400 text-[10px] md:text-xs font-black tracking-widest mb-8 md:mb-10">
              <Leaf size={16} /> COMPROMISSO MARANT
            </div>
            <h3 className="text-5xl md:text-7xl font-black text-white mb-10 leading-[0.9] tracking-tighter">
              A cada obra, <br />
              <span className="text-emerald-500">um novo pulmão.</span>
            </h3>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed font-medium">
              Não construímos apenas concreto; regeneramos o meio ambiente através do projeto <strong>"Nas Nossas Mãos"</strong>.
            </p>

            <div className="space-y-6 mb-12">
              <div className="glass p-8 rounded-3xl border-emerald-500/20 hover:bg-emerald-500/5 transition-colors">
                <h4 className="text-2xl font-black text-emerald-400 mb-4 flex items-center gap-4">
                  <Trees /> Plantio Nativo
                </h4>
                <p className="text-gray-400 font-medium">
                  Destinamos parte de cada lucro para o reflorestamento de áreas sugeridas pelo próprio cliente. Sua obra deixa um legado verde.
                </p>
              </div>
            </div>

            <button className="bg-emerald-600 text-white px-10 py-5 rounded-2xl font-black hover:bg-emerald-500 transition-all shadow-[0_20px_40px_rgba(16,185,129,0.2)] flex items-center gap-4">
              CONHEÇA O PROJETO <ArrowRight size={20} />
            </button>
          </div>

          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-6 relative">
              {[
                { icon: <Recycle />, label: "Resíduo Zero", color: "text-emerald-400" },
                { icon: <Droplets />, label: "Água Consciente", color: "text-blue-400" },
                { icon: <Zap />, label: "Energia Solar", color: "text-yellow-400" },
                { icon: <Leaf />, label: "Baixo Carbono", color: "text-emerald-500" }
              ].map((item, idx) => (
                <div key={idx} className={`glass p-10 rounded-[2.5rem] flex flex-col items-center text-center gap-6 ${idx % 2 !== 0 ? 'mt-12' : ''} hover:scale-105 transition-transform duration-500 border-white/10 shadow-2xl`}>
                  <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center ${item.color}`}>
                    {React.cloneElement(item.icon as React.ReactElement, { size: 32 })}
                  </div>
                  <span className="font-black text-white text-sm uppercase tracking-widest">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
