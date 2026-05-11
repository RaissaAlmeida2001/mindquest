import { motion } from "framer-motion";
<<<<<<< HEAD
import {
  ChevronLeft,
  ChevronRight,
  Calendar as CalendarIcon,
  ArrowLeft,
} from "lucide-react";
=======
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, ArrowLeft } from "lucide-react";
>>>>>>> 2fa68e32e27da4dc4d3bcfec5eff74c03b56d002
import { useNavigate } from "react-router-dom";

export default function Calendario() {
  const navigate = useNavigate();

  const humorHistorico = [
<<<<<<< HEAD
    { dia: 1, humor: "text-yellow-500", emoji: "😊" },
    { dia: 2, humor: "text-orange-400", emoji: "😁" },
    { dia: 3, humor: "text-sky-400", emoji: "😢" },
    { dia: 4, humor: "text-rose-400", emoji: "😡" },
    { dia: 5, humor: "text-gray-400", emoji: "😐" },
    { dia: 15, humor: "text-yellow-500", emoji: "😊" },
  ];

  const diasSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
  const diasDoMes = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-peach-100 via-white to-peach-300 p-6 antialiased text-gray-800">
      <motion.div
=======
    { dia: 1, humor: "text-green-500", emoji: "😊" },
    { dia: 2, humor: "text-yellow-500", emoji: "😁" },
    { dia: 3, humor: "text-blue-500", emoji: "😢" },
    { dia: 4, humor: "text-red-500", emoji: "😡" },
    { dia: 5, humor: "text-gray-400", emoji: "😐" },
    { dia: 15, humor: "text-green-500", emoji: "😊" }, // Exemplo de dia atual preenchido
  ];

  const diasSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
  
  const diasDoMes = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 p-6 antialiased text-gray-800">
      <motion.div 
>>>>>>> 2fa68e32e27da4dc4d3bcfec5eff74c03b56d002
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md mx-auto bg-white rounded-[2.5rem] shadow-2xl border border-white p-8"
      >
        <div className="flex items-center justify-between mb-8">
<<<<<<< HEAD
          <button
            onClick={() => navigate("/humor")}
            className="p-2 hover:bg-peach-100 rounded-full transition-colors"
          >
            <ArrowLeft className="size-6 text-peach-400" />
          </button>

          <div className="text-center">
            <h2 className="text-xl font-bold text-peach-500">
              Abril 2026
            </h2>
            <p className="text-xs text-peach-400 font-semibold uppercase tracking-widest">
              Seu Histórico
            </p>
          </div>

          <div className="flex gap-1">
            <button className="p-2 text-peach-200 cursor-not-allowed">
              <ChevronLeft />
            </button>

            <button className="p-2 text-peach-400 hover:text-peach-500 transition-colors">
              <ChevronRight />
            </button>
=======
          <button onClick={() => navigate("/humor")} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <ArrowLeft className="size-6 text-gray-400" />
          </button>
          <div className="text-center">
            <h2 className="text-xl font-bold text-gray-800">Abril 2026</h2>
            <p className="text-xs text-green-600 font-semibold uppercase tracking-widest">Seu Histórico</p>
          </div>
          <div className="flex gap-1">
            <button className="p-2 text-gray-300 cursor-not-allowed"><ChevronLeft /></button>
            <button className="p-2 text-gray-400 hover:text-green-500"><ChevronRight /></button>
>>>>>>> 2fa68e32e27da4dc4d3bcfec5eff74c03b56d002
          </div>
        </div>

        <div className="grid grid-cols-7 gap-2 mb-8">
<<<<<<< HEAD
          {diasSemana.map((dia) => (
            <div
              key={dia}
              className="text-center text-[10px] font-bold text-peach-300 uppercase italic"
            >
=======
          {diasSemana.map(dia => (
            <div key={dia} className="text-center text-[10px] font-bold text-gray-300 uppercase italic">
>>>>>>> 2fa68e32e27da4dc4d3bcfec5eff74c03b56d002
              {dia}
            </div>
          ))}

<<<<<<< HEAD
          {diasDoMes.map((dia) => {
            const registro = humorHistorico.find((h) => h.dia === dia);

            return (
              <motion.div
                whileHover={{ scale: 1.08 }}
                key={dia}
                className={`aspect-square flex flex-col items-center justify-center rounded-2xl text-sm font-medium transition-all
                ${
                  registro
                    ? "bg-peach-100 border border-peach-200 shadow-sm"
                    : "bg-peach-50 text-peach-200 opacity-60"
                }`}
              >
                <span className="text-[10px] mb-1">
                  {dia}
                </span>

                {registro && (
                  <span className={`text-xl ${registro.humor}`}>
                    {registro.emoji}
                  </span>
                )}
=======
          {diasDoMes.map(dia => {
            const registro = humorHistorico.find(h => h.dia === dia);
            return (
              <motion.div
                whileHover={{ scale: 1.1 }}
                key={dia}
                className={`aspect-square flex flex-col items-center justify-center rounded-2xl text-sm font-medium transition-all
                  ${registro ? 'bg-green-50 border border-green-100 shadow-sm' : 'bg-gray-50 text-gray-400 opacity-40'}
                `}
              >
                <span className="text-[10px] mb-1">{dia}</span>
                {registro && <span className={`text-xl ${registro.humor}`}>{registro.emoji}</span>}
>>>>>>> 2fa68e32e27da4dc4d3bcfec5eff74c03b56d002
              </motion.div>
            );
          })}
        </div>

<<<<<<< HEAD
        <div className="bg-peach-500 p-6 rounded-3xl text-white shadow-xl shadow-peach-300">
          <div className="flex items-center gap-3 mb-2">
            <CalendarIcon className="size-5 opacity-80" />
            <h3 className="font-bold">
              Resumo do Mês
            </h3>
          </div>

          <p className="text-sm opacity-90 leading-relaxed">
            Você teve 15 dias{" "}
            <span className="font-bold">
              Felizes
            </span>{" "}
            este mês! Notamos que sua raiva diminuiu após começar as
            meditações de Lofi. Continue assim!
=======
        <div className="bg-green-600 p-6 rounded-3xl text-white shadow-lg shadow-green-200">
          <div className="flex items-center gap-3 mb-2">
            <CalendarIcon className="size-5 opacity-80" />
            <h3 className="font-bold">Resumo do Mês</h3>
          </div>
          <p className="text-sm opacity-90 leading-relaxed">
            Você teve 15 dias <span className="font-bold">Felizes</span> este mês! Notamos que sua raiva diminuiu após começar as meditações de Lofi. Continue assim!
>>>>>>> 2fa68e32e27da4dc4d3bcfec5eff74c03b56d002
          </p>
        </div>
      </motion.div>
    </div>
  );
}