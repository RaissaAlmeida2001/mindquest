import { useState } from "react";
<<<<<<< HEAD
import {
  Sparkles,
  ChevronRight,
  Settings,
  Brain,
  Activity,
  TrendingUp,
  Heart,
  Clock,
=======
import { 
  Sparkles, ChevronRight, User, Settings, 
  Brain, Activity, TrendingUp, Heart, Clock
>>>>>>> 2fa68e32e27da4dc4d3bcfec5eff74c03b56d002
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LogoPrincipal = () => (
<<<<<<< HEAD
  <div className="bg-white p-1.5 rounded-xl border border-peach-100 shadow-sm flex items-center justify-center">
    <Brain className="text-peach-500" size={24} />
=======
  <div className="bg-white p-1.5 rounded-xl border border-slate-100 shadow-sm flex items-center justify-center">
    <Brain className="text-[#E97451]" size={24} />
>>>>>>> 2fa68e32e27da4dc4d3bcfec5eff74c03b56d002
  </div>
);

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(true);

<<<<<<< HEAD
=======
  // Dados zerados para o primeiro acesso
>>>>>>> 2fa68e32e27da4dc4d3bcfec5eff74c03b56d002
  const humorSemanalVazio = [
    { dia: "Seg", nivel: 0 },
    { dia: "Ter", nivel: 0 },
    { dia: "Qua", nivel: 0 },
    { dia: "Qui", nivel: 0 },
    { dia: "Sex", nivel: 0 },
    { dia: "Sab", nivel: 0 },
    { dia: "Dom", nivel: 0 },
  ];

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-peach-100 via-white to-peach-300 flex flex-col antialiased text-gray-800 font-sans overflow-x-hidden">

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/70 backdrop-blur-md px-6 py-4 flex justify-between items-center border-b border-peach-100">
        
        <div className="flex items-center gap-3">
          <LogoPrincipal />

          <div>
            <p className="text-[10px] uppercase tracking-widest text-peach-500 font-bold leading-none mb-1">
              MindQuest
            </p>
          </div>
        </div>

        <button className="bg-white p-2.5 rounded-2xl shadow-sm border border-peach-100 text-peach-400 hover:bg-peach-50 transition-all">
=======
    <div className="min-h-screen bg-[#FFFBF9] flex flex-col antialiased text-slate-800 font-sans overflow-x-hidden">
      
      {/* HEADER FIXO */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#FFFBF9]/80 backdrop-blur-md px-6 py-4 flex justify-between items-center border-b border-slate-100">
        <div className="flex items-center gap-3">
          <LogoPrincipal />
          <div>
            <p className="text-[10px] uppercase tracking-widest text-[#E97451] font-bold leading-none mb-1">MindQuest</p>
          </div>
        </div>
        <button className="bg-white p-2.5 rounded-2xl shadow-sm border border-slate-100 text-slate-400">
>>>>>>> 2fa68e32e27da4dc4d3bcfec5eff74c03b56d002
          <Settings size={20} />
        </button>
      </header>

<<<<<<< HEAD
      {/* DASHBOARD */}
      <main
        className={`pt-24 px-6 pb-10 space-y-8 transition-all duration-700 ${
          isModalOpen
            ? "blur-[1.5px] opacity-70 scale-[0.99]"
            : "blur-0"
        }`}
      >
        <div className="space-y-1">
          <p className="text-peach-500 font-bold text-[10px] uppercase tracking-widest">
            Primeiro acesso
          </p>

          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Sua Jornada Começa
          </h1>
        </div>

        {/* GRÁFICO */}
        <section className="bg-white p-6 rounded-[2.5rem] border border-white shadow-xl shadow-peach-100/50 space-y-6 text-center">
          
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-gray-800 flex items-center gap-2 text-sm">
              <TrendingUp
                size={16}
                className="text-peach-300"
              />
              Humor Semanal
            </h3>

            <span className="text-[10px] bg-peach-50 text-peach-400 px-2 py-1 rounded-full font-bold">
              Sem dados
            </span>
=======
      {/* DASHBOARD ZERADO */}
      <main className={`pt-24 px-6 pb-10 space-y-8 transition-all duration-700 ${isModalOpen ? 'blur-[1.5px] opacity-70 scale-[0.99]' : 'blur-0'}`}>
        
        <div className="space-y-1">
          <p className="text-[#E97451] font-bold text-[10px] uppercase tracking-widest">Primeiro acesso</p>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">Sua Jornada Começa</h1>
        </div>

        {/* GRÁFICO VAZIO */}
        <section className="bg-white p-6 rounded-[2.5rem] border border-white shadow-sm space-y-6 text-center">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-slate-800 flex items-center gap-2 text-sm">
              <TrendingUp size={16} className="text-slate-300" /> Humor Semanal
            </h3>
            <span className="text-[10px] bg-slate-50 text-slate-400 px-2 py-1 rounded-full font-bold">Sem dados</span>
>>>>>>> 2fa68e32e27da4dc4d3bcfec5eff74c03b56d002
          </div>

          <div className="flex items-end justify-between h-32 px-2">
            {humorSemanalVazio.map((item, i) => (
<<<<<<< HEAD
              <div
                key={i}
                className="flex flex-col items-center gap-2 w-full"
              >
                <div className="w-2.5 bg-peach-50 rounded-full relative flex items-end overflow-hidden h-24">
                  
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `0%` }}
                    className="w-full rounded-full bg-peach-400"
                  />
                </div>

                <span className="text-[10px] text-peach-300 font-bold">
                  {item.dia}
                </span>
              </div>
            ))}
          </div>

          <p className="text-[10px] text-gray-400 italic">
            Complete o formulário para iniciar o rastreamento
          </p>
        </section>

        {/* CARDS */}
        <div className="grid grid-cols-2 gap-4">
          
          <div className="bg-peach-100 p-5 rounded-[2rem] flex flex-col justify-between h-36 relative overflow-hidden shadow-md">
            
            <Activity
              className="text-peach-200 absolute -right-2 -top-2"
              size={60}
            />

            <p className="text-peach-400 text-[10px] font-bold uppercase tracking-wider">
              Foco Diário
            </p>

            <div>
              <p className="text-peach-300 text-3xl font-black">
                -- %
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-[2rem] border border-peach-100 shadow-md flex flex-col justify-between h-36">
            
            <div className="flex justify-between">
              <Clock className="text-peach-200" size={20} />

              <Heart className="text-peach-200" size={18} />
            </div>

            <div>
              <p className="text-peach-400 text-[10px] font-bold uppercase tracking-wider">
                Meditação
              </p>

              <p className="text-peach-300 text-3xl font-black">
                0m
              </p>
=======
              <div key={i} className="flex flex-col items-center gap-2 w-full">
                <div className="w-2.5 bg-slate-50 rounded-full relative flex items-end overflow-hidden h-24">
                  {/* Barra zerada (nível 0) */}
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `0%` }}
                    className="w-full rounded-full bg-[#F4A261]"
                  />
                </div>
                <span className="text-[10px] text-slate-300 font-bold">{item.dia}</span>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-slate-400 italic">Complete o formulário para iniciar o rastreamento</p>
        </section>

        {/* CARDS ZERADOS */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-100 p-5 rounded-[2rem] flex flex-col justify-between h-36 relative overflow-hidden">
            <Activity className="text-slate-200 absolute -right-2 -top-2" size={60} />
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Foco Diário</p>
            <div>
              <p className="text-slate-300 text-3xl font-black">-- %</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col justify-between h-36">
            <div className="flex justify-between">
              <Clock className="text-slate-200" size={20} />
              <Heart className="text-slate-200" size={18} />
            </div>
            <div>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Meditação</p>
              <p className="text-slate-300 text-3xl font-black">0m</p>
>>>>>>> 2fa68e32e27da4dc4d3bcfec5eff74c03b56d002
            </div>
          </div>
        </div>

<<<<<<< HEAD
        {/* LISTA */}
        <section className="space-y-4">
          
          <h3 className="text-xs font-bold text-peach-400 uppercase tracking-widest ml-2">
            Atividades Recentes
          </h3>

          <div className="bg-white rounded-[2rem] border border-dashed border-peach-200 p-8 text-center shadow-sm">
            <p className="text-gray-400 text-xs italic">
              Nenhuma atividade registrada ainda.
            </p>
=======
        {/* LISTA VAZIA */}
        <section className="space-y-4">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">Atividades Recentes</h3>
          <div className="bg-white rounded-[2rem] border border-dashed border-slate-200 p-8 text-center">
            <p className="text-slate-400 text-xs italic">Nenhuma atividade registrada ainda.</p>
>>>>>>> 2fa68e32e27da4dc4d3bcfec5eff74c03b56d002
          </div>
        </section>
      </main>

<<<<<<< HEAD
      {/* MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/10 backdrop-blur-[1.5px]"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="relative bg-white/95 w-full max-w-sm rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-10 border border-white text-center"
            >
              
              <div className="bg-peach-100 w-20 h-20 rounded-[2.2rem] flex items-center justify-center mx-auto mb-8 border border-peach-200 shadow-inner">
                <Sparkles
                  className="text-peach-500"
                  size={40}
                />
              </div>

              <h2 className="text-2xl font-black text-gray-900 mb-4 leading-tight">
                Personalize sua Jornada
              </h2>

              <p className="text-gray-500 text-sm leading-relaxed mb-10 px-2">
                Para que o MindQuest ofereça a melhor experiência,
                precisamos te conhecer um pouco melhor.
              </p>

              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full bg-peach-500 hover:bg-peach-400 text-white font-bold py-5 rounded-2xl shadow-xl shadow-peach-300 active:scale-95 transition-all flex items-center justify-center gap-2 group"
              >
                <span>VAMOS LÁ</span>

                <ChevronRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
=======
      {/* POP-UP */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/10 backdrop-blur-[1.5px]" 
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 30 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="relative bg-white/95 w-full max-w-sm rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-10 border border-white text-center"
            >
              <div className="bg-[#FFF1EB] w-20 h-20 rounded-[2.2rem] flex items-center justify-center mx-auto mb-8 border border-orange-100 shadow-inner">
                <Sparkles className="text-[#E97451]" size={40} />
              </div>
              <h2 className="text-2xl font-black text-slate-900 mb-4 leading-tight">Personalize sua Jornada</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-10 px-2">
                Para que o MindQuest ofereça a melhor experiência, precisamos te conhecer um pouco melhor.
              </p>
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="w-full bg-[#E97451] hover:bg-[#C06043] text-white font-bold py-5 rounded-2xl shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2 group"
              >
                <span>VAMOS LÁ</span>
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
>>>>>>> 2fa68e32e27da4dc4d3bcfec5eff74c03b56d002
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}