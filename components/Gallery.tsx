
import React, { useState } from 'react';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('Todas');

  const categories = ['Todas', 'Industriais', 'Comerciais'];
  
  const items = [
    { id: 1, cat: 'Comerciais', title: 'Edifício Corporativo Glass', img: '/projects/commercial-1.png' },
    { id: 2, cat: 'Industriais', title: 'Fundação Industrial', img: '/projects/industrial-1.jpg' },
    { id: 3, cat: 'Industriais', title: 'Estrutura de Cobertura', img: '/projects/industrial-2.jpg' },
    { id: 4, cat: 'Industriais', title: 'Base de Concreto Armado', img: '/projects/industrial-3.jpg' },
    { id: 5, cat: 'Industriais', title: 'Galpão Logístico', img: '/projects/industrial-4.jpg' },
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
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  filter === cat ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
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
