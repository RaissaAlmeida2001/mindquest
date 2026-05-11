import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, MessageCircle, Tag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { auth, db } from "../firebaseConfig";
import { collection, doc, setDoc } from "firebase/firestore";

export default function Humor() {
  const navigate = useNavigate();
  const [selectedMood, setSelectedMood] = useState(null);
  const [note, setNote] = useState("");
  const [selectedFactors, setSelectedFactors] = useState([]);

  const moods = [
    {
      emoji: "😡",
      label: "Raiva",
      color: "text-rose-400",
      question: "O que te tirou do sério hoje?",
    },
    {
      emoji: "😢",
      label: "Triste",
      color: "text-sky-400",
      question: "Sinto muito... quer contar o que houve?",
    },
    {
      emoji: "😐",
      label: "Neutro",
      color: "text-gray-400",
      question: "Um dia comum? O que aconteceu?",
    },
    {
      emoji: "😊",
      label: "Feliz",
      color: "text-peach-500",
      question: "Que bom! O que trouxe esse sorriso?",
    },
    {
      emoji: "😁",
      label: "Radiante",
      color: "text-yellow-500",
      question: "Incrível! Qual a melhor notícia?",
    },
  ];

  const fatores = [
    "Família",
    "Trabalho",
    "Saúde",
    "Relacionamento",
    "Estudos",
    "Finanças",
    "Lazer",
    "Sono",
  ];

  const toggleFactor = (factor) => {
    setSelectedFactors((prev) =>
      prev.includes(factor)
        ? prev.filter((f) => f !== factor)
        : [...prev, factor]
    );
  };

  const handleSave = async () => {
    if (selectedMood === null) return;

    try {
      const user = auth.currentUser;

      if (!user) return alert("Usuário não logado!");

      const humorRef = doc(
        collection(db, "usuarios", user.uid, "registrosHumor")
      );

      const novoId = humorRef.id;

      const climaMap = {
        condicao: "Chuvoso",
        temperatura: 22,
      };

      await setDoc(humorRef, {
        idHumor: novoId,
        humor: moods[selectedMood].label,
        nota: note,
        fatores: selectedFactors,
        data: new Date(),
        clima: climaMap,
      });

      navigate("/calendario");
    } catch (error) {
      console.error("Erro ao salvar humor:", error);
    }
  };

  const currentMood =
    selectedMood !== null ? moods[selectedMood] : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-peach-100 via-white to-peach-300 flex items-center justify-center p-6 antialiased text-gray-800">
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-xl bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-peach-300/40 border border-white"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-peach-500 tracking-tight">
            Check-in do Sentir
          </h2>

          <p className="text-gray-500 mt-2 text-lg">
            Como você está agora?
          </p>
        </div>

        <div className="grid grid-cols-5 gap-3 mb-8">
          {moods.map((mood, index) => (
            <button
              key={index}
              onClick={() => setSelectedMood(index)}
              className={`flex flex-col items-center gap-2 p-3 rounded-3xl border-2 transition-all duration-200
              ${
                selectedMood === index
                  ? `bg-peach-100 border-peach-200 scale-110 shadow-lg ${mood.color}`
                  : "bg-peach-50 border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <span className="text-4xl md:text-5xl">
                {mood.emoji}
              </span>

              <span className="text-[10px] font-bold uppercase tracking-tighter">
                {mood.label}
              </span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {currentMood && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-2 text-peach-500 font-semibold bg-peach-100 p-4 rounded-2xl border border-peach-200">
                <MessageCircle className="size-5" />

                <p className="text-sm">
                  {currentMood.question}
                </p>
              </div>

              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Quer detalhar mais algum ponto?"
                className="w-full h-32 p-5 bg-peach-50 border-none rounded-3xl focus:ring-2 focus:ring-peach-400 transition-all resize-none shadow-inner outline-none"
              />

              <div className="space-y-3">
                <label className="flex items-center gap-2 text-xs font-bold text-peach-400 uppercase ml-2 tracking-widest">
                  <Tag className="size-3" />
                  O que impactou seu dia?
                </label>

                <div className="flex flex-wrap gap-2">
                  {fatores.map((fator) => (
                    <button
                      key={fator}
                      onClick={() => toggleFactor(fator)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all border
                      ${
                        selectedFactors.includes(fator)
                          ? "bg-peach-500 text-white border-peach-500 shadow-md"
                          : "bg-peach-50 text-gray-500 border-peach-100 hover:border-peach-300"
                      }`}
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
          className="w-full mt-8 bg-peach-500 hover:bg-peach-400 text-white font-bold py-4 rounded-2xl shadow-lg shadow-peach-300 transition-all flex items-center justify-center gap-2 disabled:opacity-30 disabled:grayscale active:scale-95"
        >
          Concluir Check-in
          <ArrowRight className="size-5" />
        </button>
      </motion.div>
    </div>
  );
}