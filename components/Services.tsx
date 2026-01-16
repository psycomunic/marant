
import React from 'react';
import { Factory, Building2, Zap, Construction, Users, Leaf, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Indústrias de Elite",
      description: "Plantas fabris completas com foco em eficiência de fluxo e estrutural.",
      icon: <Factory size={32} />,
      color: "from-blue-600 to-blue-400"
    },
    {
      title: "Centros Comerciais",
      description: "Espaços que vendem. Design moderno aliado à funcionalidade comercial.",
      icon: <Building2 size={32} />,
      color: "from-indigo-600 to-indigo-400"
    },
    {
      title: "Metalurgia Pesada",
      description: "O coração da nossa precisão. Estruturas metálicas de altíssima resistência.",
      icon: <Zap size={32} />,
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "Ambientes Corporativos",
      description: "Escritórios que inspiram criatividade e produtividade extrema.",
      icon: <Users size={32} />,
      color: "from-purple-600 to-indigo-400"
    },
    {
      title: "Infraestrutura Técnica",
      description: "Suporte para missões críticas e sistemas industriais complexos.",
      icon: <Construction size={32} />,
      color: "from-slate-600 to-slate-400"
    },
    {
      title: "Eco-Engenharia",
      description: "Construções sustentáveis que respeitam o planeta e reduzem custos.",
      icon: <Leaf size={32} />,
      color: "from-emerald-600 to-teal-400"
    }
  ];

  return (
    <section id="servicos" className="py-32 bg-[#050505] relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-blue-500 font-black tracking-[0.5em] uppercase text-xs mb-4">Portfólio de Soluções</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-tight">
            Engenharia que <span className="text-glow text-blue-400">desafia os limites.</span>
          </h3>
          <p className="text-xl text-gray-400 font-medium">
            Domínio técnico completo, da fundação à última viga metálica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              <div className="glass p-10 rounded-[2.5rem] h-full flex flex-col transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] border-white/5">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-8 shadow-xl`}>
                  {service.icon}
                </div>
                <h4 className="text-2xl font-black text-white mb-4 group-hover:text-blue-400 transition-colors tracking-tight">{service.title}</h4>
                <p className="text-gray-400 leading-relaxed mb-10 font-medium">{service.description}</p>
                <div className="mt-auto flex items-center gap-3 text-xs font-black tracking-widest text-blue-500 group-hover:gap-5 transition-all uppercase">
                  EXPLORAR SERVIÇO <ArrowRight size={18} />
                </div>
              </div>
              {/* Decorative Glow */}
              <div className="absolute -z-10 inset-0 bg-blue-600/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
