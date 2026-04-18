import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Smile, Frown, Meh, Angry, Laugh, ArrowRight, MessageCircle, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Humor() {
  const navigate = useNavigate();
  const [selectedMood, setSelectedMood] = useState(null);
  const [note, setNote] = useState("");

  const moods = [
    { emoji: "😡", label: "Raiva", icon: Angry, color: "text-red-500", question: "O que te tirou do sério hoje?", placeholder: "Pode desabafar, ninguém vai ler..." },
    { emoji: "😢", label: "Triste", icon: Frown, color: "text-blue-500", question: "Sinto muito... quer contar o que aconteceu?", placeholder: "Descrever sua dor ajuda a aliviá-la." },
    { emoji: "😐", label: "Neutro", icon: Meh, color: "text-gray-400", question: "Um dia calmo? O que houve de comum?", placeholder: "Como foi sua rotina?" },
    { emoji: "😊", label: "Feliz", icon: Smile, color: "text-green-500", question: "Que bom! O que trouxe esse sorriso?", placeholder: "Anote para lembrar desse momento depois." },
    { emoji: "😁", label: "Radiante", icon: Laugh, color: "text-yellow-500", question: "Incrível! Qual a melhor notícia do dia?", placeholder: "Espalhe essa energia positiva!" },
  ];

  const currentMood = selectedMood !== null ? moods[selectedMood] : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex items-center justify-center p-6 antialiased text-gray-800">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-xl bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-green-100/50 border border-white"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Check-in do Sentir</h2>
          <p className="text-gray-500 mt-2 text-lg">Pare um pouco e escute seu coração...</p>
        </div>

        <div className="grid grid-cols-5 gap-3 mb-8">
          {moods.map((mood, index) => {
            const isSelected = selectedMood === index;
            return (
              <button 
                key={index} 
                onClick={() => setSelectedMood(index)} 
                className={`flex flex-col items-center gap-2 p-3 rounded-3xl border-2 transition-all duration-300 ${isSelected ? `bg-green-50 border-green-300 scale-110 shadow-lg ${mood.color}` : "bg-gray-50 border-transparent opacity-60 hover:opacity-100"}`}
              >
                <span className="text-4xl md:text-5xl">{mood.emoji}</span>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-tighter">{mood.label}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {currentMood ? (
            <motion.div
              key={selectedMood}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2 text-green-700 font-semibold bg-green-50 p-4 rounded-2xl border border-green-100">
                <MessageCircle className="size-5" />
                <p className="text-sm md:text-base">{currentMood.question}</p>
              </div>

              <textarea 
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder={currentMood.placeholder}
                className="w-full h-36 p-5 bg-gray-50 border-none rounded-3xl focus:ring-2 focus:ring-green-300 transition-all resize-none shadow-inner"
              />

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-50 p-4 rounded-2xl flex flex-col gap-1 border border-gray-100">
                  <span className="text-[10px] font-bold text-gray-400 uppercase">Intensidade</span>
                  <input type="range" min="1" max="10" className="accent-green-500 cursor-pointer" />
                </div>
                <div className="bg-gray-50 p-4 rounded-2xl flex flex-col gap-1 border border-gray-100">
                  <span className="text-[10px] font-bold text-gray-400 uppercase">Sente no corpo?</span>
                  <select className="bg-transparent text-xs font-medium outline-none text-gray-600">
                    <option>Não</option>
                    <option>Peito apertado</option>
                    <option>Nó na garganta</option>
                    <option>Tensão nos ombros</option>
                    <option>Frio na barriga</option>
                  </select>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="h-40 flex items-center justify-center border-2 border-dashed border-gray-100 rounded-3xl">
              <p className="text-gray-300 flex items-center gap-2 italic">
                <HelpCircle className="size-5" /> Selecione um humor para falar mais
              </p>
            </div>
          )}
        </AnimatePresence>

        <button 
          disabled={selectedMood === null} 
          onClick={() => navigate("/calendario")} 
          className="w-full mt-8 bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-green-200 transition-all flex items-center justify-center gap-2 disabled:opacity-30 disabled:grayscale active:scale-95"
        >
          Concluir Check-in <ArrowRight className="size-5" />
        </button>
      </motion.div>
    </div>
  );
}