
import React from 'react';
import { Mail, Phone, MapPin, Send, Instagram, MessageCircle, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[180px] rounded-full -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto glass rounded-[4rem] overflow-hidden flex flex-col lg:flex-row border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.8)]">
          
          <div className="lg:w-[40%] bg-gradient-to-br from-blue-900/40 to-black p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8">
               <ArrowUpRight size={80} className="text-white/10" />
            </div>
            
            <h3 className="text-5xl font-black text-white mb-10 leading-tight">Vamos <br /><span className="text-blue-500">edificar</span> seu <br />sucesso?</h3>
            
            <div className="space-y-10 mb-20 relative z-10">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-1">Telefone</p>
                  <p className="text-white font-bold text-lg">(47) 99640-9909</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-1">E-mail</p>
                  <p className="text-white font-bold text-lg">contato@marant.com.br</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mr-4">Social:</span>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-blue-600 transition-all"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-blue-600 transition-all"><MessageCircle size={18} /></a>
            </div>
          </div>

          <div className="lg:w-[60%] p-12 md:p-20 bg-black/40 backdrop-blur-3xl">
            <h4 className="text-2xl font-black text-white mb-12 flex items-center gap-4">
               SOLICITE UM ESTUDO DE VIABILIDADE <div className="h-[2px] flex-grow bg-blue-600/30"></div>
            </h4>
            
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <input type="text" className="w-full px-0 py-4 bg-transparent border-b border-white/20 text-white focus:outline-none focus:border-blue-500 transition-all placeholder:text-gray-600 font-bold" placeholder="NOME COMPLETO" />
                </div>
                <div className="space-y-2">
                  <input type="email" className="w-full px-0 py-4 bg-transparent border-b border-white/20 text-white focus:outline-none focus:border-blue-500 transition-all placeholder:text-gray-600 font-bold" placeholder="E-MAIL CORPORATIVO" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <input type="tel" className="w-full px-0 py-4 bg-transparent border-b border-white/20 text-white focus:outline-none focus:border-blue-500 transition-all placeholder:text-gray-600 font-bold" placeholder="WHATSAPP / CELULAR" />
                </div>
                <div className="space-y-2">
                  <select className="w-full px-0 py-4 bg-transparent border-b border-white/20 text-white focus:outline-none focus:border-blue-500 transition-all font-bold appearance-none cursor-pointer">
                    <option className="bg-black">TIPO DE PROJETO</option>
                    <option className="bg-black">INDUSTRIAL</option>
                    <option className="bg-black">COMERCIAL</option>
                    <option className="bg-black">METALÚRGICA</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <textarea rows={3} className="w-full px-0 py-4 bg-transparent border-b border-white/20 text-white focus:outline-none focus:border-blue-500 transition-all placeholder:text-gray-600 font-bold" placeholder="BREVE DESCRIÇÃO DA DEMANDA"></textarea>
              </div>

              <button className="w-full bg-blue-600 text-white font-black py-6 rounded-2xl hover:bg-blue-500 transition-all shadow-[0_20px_40px_rgba(37,99,235,0.3)] flex items-center justify-center gap-4 uppercase tracking-widest text-sm hover:-translate-y-1 active:translate-y-0">
                ENVIAR MENSAGEM <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
