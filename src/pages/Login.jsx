import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { LogIn } from "lucide-react";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const handleLogin = async () => {
    setErro(""); // Limpa erros anteriores
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      console.log("Login realizado com sucesso!");
      navigate("/humor"); // Direciona para o registro de humor
    } catch (error) {
      console.error("Erro ao entrar:", error.code);
      setErro("Email ou senha incorretos. Tente novamente.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex items-center justify-center p-6 text-gray-800">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-green-100/50 border border-white"
      >
        <div className="text-center mb-8">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <LogIn className="text-green-600 size-8" />
          </div>
          <h2 className="text-3xl font-bold">Bem-vindo</h2>
          <p className="text-gray-500">Sentimos sua falta!</p>
        </div>

        <div className="space-y-4">
          {/* Adicionamos o onChange para capturar os dados */}
          <input 
            type="email"
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-green-400" 
          />
          <input 
            type="password" 
            placeholder="Senha" 
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-green-400" 
          />

          {/* Mensagem de erro caso o login falhe */}
          {erro && <p className="text-red-500 text-xs text-center">{erro}</p>}

          <button 
            onClick={handleLogin} 
            className="w-full bg-green-500 text-white font-bold py-4 rounded-2xl shadow-lg hover:bg-green-600 transition-all active:scale-95"
          >
            Entrar no MindQuest
          </button>
        </div>
        
        <p className="text-center mt-6 text-sm text-gray-500">
          Não tem conta? <button onClick={() => navigate("/cadastro")} className="text-green-600 font-bold hover:underline">Cadastre-se</button>
        </p>
      </motion.div>
    </div>
  );
}