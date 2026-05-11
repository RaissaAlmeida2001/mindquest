import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Smile, Frown, Meh, Angry, Laugh, ArrowRight, MessageCircle, HelpCircle, Tag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { auth, db } from "../firebaseConfig";
import { collection, doc, setDoc } from "firebase/firestore";

export default function Humor() {
  const navigate = useNavigate();
  const [selectedMood, setSelectedMood] = useState(null);
  const [note, setNote] = useState("");
  const [selectedFactors, setSelectedFactors] = useState([]); // Array para múltiplos fatores

  const moods = [
    { emoji: "😡", label: "Raiva", color: "text-red-500", question: "O que te tirou do sério hoje?" },
    { emoji: "😢", label: "Triste", color: "text-blue-500", question: "Sinto muito... quer contar o que houve?" },
    { emoji: "😐", label: "Neutro", color: "text-gray-400", question: "Um dia comum? O que aconteceu?" },
    { emoji: "😊", label: "Feliz", color: "text-green-500", question: "Que bom! O que trouxe esse sorriso?" },
    { emoji: "😁", label: "Radiante", color: "text-yellow-500", question: "Incrível! Qual a melhor notícia?" },
  ];

  // Seus fatores vindos da coleção/planejamento
  const fatores = ["Família", "Trabalho", "Saúde", "Relacionamento", "Estudos", "Finanças", "Lazer", "Sono"];

  const toggleFactor = (factor) => {
    setSelectedFactors(prev => 
      prev.includes(factor) ? prev.filter(f => f !== factor) : [...prev, factor]
    );
  };

  const handleSave = async () => {
    if (selectedMood === null) return;
    try {
      const user = auth.currentUser;
      if (!user) return alert("Usuário não logado!");
      
      // Referência de documento vazia para gerar o ID antes de salvar
      const humorRef = doc(collection(db, "usuarios", user.uid, "registrosHumor"));
      const novoId = humorRef.id; // ID gerado automaticamente pelo Firebase

      // Simulação de API de clima
      const climaMap = {
        condicao: "Chuvoso",
        temperatura: 22 
      };

      await setDoc(humorRef, {
        idHumor: novoId,
        humor: moods[selectedMood].label,
        nota: note,
        fatores: selectedFactors, // Salva o array de coisas que impactaram
        data: new Date(),
        clima: climaMap,
        data: new Date() 
      });

      console.log("Humor salvo com ID interno:", novoId);
      navigate("/calendario");
    } catch (error) {
      console.error("Erro ao salvar humor:", error);
    }
  };

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
          <p className="text-gray-500 mt-2 text-lg">Como você está agora?</p>
        </div>

        {/* Seleção de Emoji */}
        <div className="grid grid-cols-5 gap-3 mb-8">
          {moods.map((mood, index) => (
            <button 
              key={index} 
              onClick={() => setSelectedMood(index)} 
              className={`flex flex-col items-center gap-2 p-3 rounded-3xl border-2 transition-all ${selectedMood === index ? `bg-green-50 border-green-300 scale-110 shadow-lg ${mood.color}` : "bg-gray-50 border-transparent opacity-60"}`}
            >
              <span className="text-4xl md:text-5xl">{mood.emoji}</span>
              <span className="text-[10px] font-bold uppercase tracking-tighter">{mood.label}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {currentMood && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6"> 

              {/* Pergunta Dinâmica e Texto */}
              <div className="flex items-center gap-2 text-green-700 font-semibold bg-green-50 p-4 rounded-2xl border border-green-100">
                <MessageCircle className="size-5" />
                <p className="text-sm">{currentMood.question}</p>
              </div>

              <textarea 
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Quer detalhar mais algum ponto?"
                className="w-full h-32 p-5 bg-gray-50 border-none rounded-3xl focus:ring-2 focus:ring-green-300 transition-all resize-none shadow-inner"
              />

              {/* Área de Fatores de Impacto */}
              <div className="space-y-3">
                <label className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase ml-2">
                  <Tag className="size-3" /> O que impactou seu dia?
                </label>
                <div className="flex flex-wrap gap-2">
                  {fatores.map(fator => (
                    <button
                      key={fator}
                      onClick={() => toggleFactor(fator)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${selectedFactors.includes(fator) ? "bg-green-500 text-white border-green-500 shadow-md" : "bg-gray-50 text-gray-500 border-gray-100 hover:border-green-200"}`}
                    >
                      {fator}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button 
          disabled={selectedMood === null} 
          onClick={handleSave}
          className="w-full mt-8 bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-green-200 transition-all flex items-center justify-center gap-2 disabled:opacity-30 disabled:grayscale active:scale-95"
        >
          Concluir Check-in <ArrowRight className="size-5" />
        </button>
      </motion.div>
    </div>
  );
}