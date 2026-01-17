
import React, { useState } from 'react';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('Todas');

  const categories = ['Todas', 'Industriais', 'Comerciais'];

  const items = [
    { id: 1, cat: 'Comerciais', title: 'Edifício Corporativo Glass', img: '/projects/commercial-1.png' },
    { id: 201, cat: 'Comerciais', title: 'Montagem Estrutural com Guindaste', img: '/projects/comm-crane-structure.jpg' },
    { id: 202, cat: 'Comerciais', title: 'Cercamento Metálico Modulado', img: '/projects/comm-steel-barriers.jpg' },
    { id: 203, cat: 'Comerciais', title: 'Complexo Logístico Aéreo', img: '/projects/comm-warehouse-aerial.jpg' },
    { id: 204, cat: 'Comerciais', title: 'Galpão Industrial de Grande Porte', img: '/projects/comm-metal-hangar.jpg' },
    { id: 205, cat: 'Comerciais', title: 'Fechamento de Área Técnica', img: '/projects/comm-blue-fencing.jpg' },
    { id: 206, cat: 'Comerciais', title: 'Interiores Corporativos', img: '/projects/comm-office-interior-wood.png' },
    { id: 207, cat: 'Comerciais', title: 'Fachada Glazing Diurna', img: '/projects/comm-glass-building-day.png' },
    { id: 208, cat: 'Comerciais', title: 'Design de Interiores Moderno', img: '/projects/comm-office-interior-green.png' },
    { id: 209, cat: 'Comerciais', title: 'Fachada Glazing Noturna', img: '/projects/comm-glass-building-night.jpg' },
    { id: 210, cat: 'Comerciais', title: 'Estrutura Interna de Cobertura', img: '/projects/comm-roof-structure-interior.jpg' },
    { id: 101, cat: 'Industriais', title: 'Estrutura Interna de Concreto', img: '/projects/ind-structure-internal.png' },
    { id: 102, cat: 'Industriais', title: 'Execução de Pilares', img: '/projects/ind-columns.jpg' },
    { id: 103, cat: 'Industriais', title: 'Fundação Circular Armada', img: '/projects/ind-foundation-round.jpg' },
    { id: 104, cat: 'Industriais', title: 'Armação de Base Retangular', img: '/projects/ind-foundation-rect.jpg' },
    { id: 105, cat: 'Industriais', title: 'Concretagem com Bomba', img: '/projects/ind-concrete-pour.jpg' },
    { id: 106, cat: 'Industriais', title: 'Base de Bloco Armado', img: '/projects/ind-foundation-base.jpg' },
    { id: 107, cat: 'Industriais', title: 'Execução de Estrutura Aérea', img: '/projects/ind-construction-workers.jpg' },
    { id: 108, cat: 'Industriais', title: 'Vista Aérea do Canteiro', img: '/projects/ind-aerial-site.jpg' },
  ];

  const filtered = filter === 'Todas' ? items : items.filter(i => i.cat === filter);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div>
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Portfólio</h2>
            <h3 className="text-4xl font-extrabold text-gray-900 leading-tight">Nossos Projetos em <span className="text-blue-600">Destaque.</span></h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${filter === cat ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(item => (
            <div key={item.id} className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-blue-400 text-sm font-bold mb-2">{item.cat}</span>
                <h4 className="text-white text-2xl font-bold">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
