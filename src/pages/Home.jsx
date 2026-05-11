import { useNavigate } from "react-router-dom";
import { Sparkles, HeartHandshake, Zap } from "lucide-react";
import { motion } from "framer-motion";
// 👇 Importando o componente novo do cérebro
import AnimatedBrainLogo from "../components/AnimatedBrainLogo"; 

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex flex-col items-center justify-between p-6 md:p-10 text-gray-800 antialiased">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-16 text-center space-y-3"
      >
        <div className="flex justify-center items-center gap-2 mb-2">
          {/* Mantendo o ícone pequeno no título se quiser, ou pode tirar */}
          <Sparkles className="text-green-500 size-8" />
          <h1 className="text-5xl font-extrabold text-green-700 tracking-tight">
            MindQuest
          </h1>
        </div>
        <p className="text-lg md:text-xl text-gray-600 max-w-lg mx-auto">
          Sua jornada para o bem-estar começa aqui. Um espaço seguro para cultivar equilíbrio e paz interior.
        </p>
      </motion.div>

      {/* --- AQUI ESTÁ O CÉREBRO QUE MEXE! --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <AnimatedBrainLogo />
      </motion.div>

      {/* Seção Central de Recursos */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl my-10 md:my-14"
      >
        <div className="bg-white p-6 rounded-[2rem] shadow-xl shadow-green-100/50 flex items-center gap-4 border border-white">
          <HeartHandshake className="text-green-400 size-10 flex-shrink-0" />
          <p className="text-sm text-gray-600">Acompanhamento diário do seu humor e sentimentos.</p>
        </div>
        <div className="bg-white p-6 rounded-[2rem] shadow-xl shadow-green-100/50 flex items-center gap-4 border border-white">
          <Zap className="text-green-400 size-10 flex-shrink-0" />
          <p className="text-sm text-gray-600">Recomendações personalizadas baseadas no seu perfil.</p>
        </div>
      </motion.div>

      {/* Botões de Ação */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="w-full max-w-md space-y-4 mb-10"
      >
        <button
          onClick={() => navigate("/cadastro")}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-green-200 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2"
        >
          {/* Ícone pequeno no botão para dar charme */}
          <Sparkles className="size-5" />
          Criar Minha Conta Grátis
        </button>

        <button
          onClick={() => navigate("/login")}
          className="w-full border-2 border-green-300 text-green-600 font-bold py-4 rounded-2xl bg-white hover:bg-green-50 transition-all active:scale-95"
        >
          Já tenho conta, fazer Login
        </button>
      </motion.div>

    </div>
  );
}