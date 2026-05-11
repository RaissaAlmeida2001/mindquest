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
    setErro("");

    try {
      await signInWithEmailAndPassword(auth, email, senha);

      console.log("Login realizado com sucesso!");

      navigate("/humor");
    } catch (error) {
      console.error("Erro ao entrar:", error.code);

      setErro("Email ou senha incorretos. Tente novamente.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-peach-100 via-white to-peach-300 flex items-center justify-center p-6 text-gray-800 antialiased">
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-peach-300/40 border border-white"
      >
        <div className="text-center mb-8">
          
          <div className="bg-peach-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
            <LogIn className="text-peach-500 size-8" />
          </div>

          <h2 className="text-3xl font-bold text-peach-500">
            Bem-vindo
          </h2>

          <p className="text-gray-500 mt-1">
            Sentimos sua falta!
          </p>
        </div>

        <div className="space-y-4">
          
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 bg-peach-50 border-none rounded-2xl focus:ring-2 focus:ring-peach-400 outline-none transition-all"
          />

          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="w-full p-4 bg-peach-50 border-none rounded-2xl focus:ring-2 focus:ring-peach-400 outline-none transition-all"
          />

          {erro && (
            <p className="text-rose-400 text-xs text-center font-medium">
              {erro}
            </p>
          )}

          <button
            onClick={handleLogin}
            className="w-full bg-peach-500 hover:bg-peach-400 text-white font-bold py-4 rounded-2xl shadow-lg shadow-peach-300 transition-all active:scale-95"
          >
            Entrar no MindQuest
          </button>
        </div>

        <p className="text-center mt-6 text-sm text-gray-500">
          Não tem conta?{" "}
          
          <button
            onClick={() => navigate("/cadastro")}
            className="text-peach-500 font-bold hover:underline"
          >
            Cadastre-se
          </button>
        </p>
      </motion.div>
    </div>
  );
}