
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Differentiators: React.FC = () => {
  const diffs = [
    "Experiência comprovada em projetos de diferentes portes",
    "Parcerias estratégicas com renomados escritórios",
    "Equipe altamente qualificada em constante capacitação",
    "Gestão de obras eficiente e cumprimento de prazos",
    "Atendimento próximo e personalizado",
    "Compromisso real com a sustentabilidade",
    "Foco absoluto em segurança do trabalho",
    "Inovação tecnológica e ferramentas digitais",
    "Credibilidade consolidada e transparência"
  ];

  return (
    <section id="diferenciais" className="py-24 bg-gray-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
        {/* Abstract M shape decoration */}
        <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current">
          <path d="M10,90 L50,10 L90,90 L75,90 L50,40 L25,90 Z" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-4">Por que a Marant?</h2>
            <h3 className="text-4xl font-extrabold mb-8 leading-tight">O Diferencial que sua Obra <br /><span className="text-blue-500">Realmente Precisa.</span></h3>
            
            <div className="grid sm:grid-cols-1 gap-y-4">
              {diffs.map((diff, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="text-lg text-gray-300 group-hover:text-white transition-colors">{diff}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm">
              <p className="text-xl font-medium italic text-gray-400">
                "Mais do que construir, entregamos tranquilidade, segurança e resultados eficazes."
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <div className="rounded-lg overflow-hidden h-64">
                <img src="https://images.unsplash.com/photo-1590644365607-1c5a519a9a37?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Obra" />
              </div>
              <div className="rounded-lg overflow-hidden h-80">
                <img src="https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Estrutura" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden h-80">
                <img src="https://images.unsplash.com/photo-1541976590-71394168159b?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Metallurgia" />
              </div>
              <div className="rounded-lg overflow-hidden h-64">
                <img src="https://images.unsplash.com/photo-1517245315167-bf17d23f7366?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Tech" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
