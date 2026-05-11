import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { User, Mail, Lock, Heart, Film, Music, Activity } from "lucide-react";
import { auth, db } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, collection, addDoc } from "firebase/firestore";

const schema = z.object({
  nome: z.string().min(3, "Como podemos te chamar?"),
  email: z.string().email("Email inválido"),
  senha: z.string().min(6, "Mínimo 6 caracteres"),
  objetivoPrincipal: z.string().min(1, "Escolha seu objetivo"),
  condicaoPrevia: z.string().min(1, "Selecione uma opção"),
  generoMusical: z.string().min(1, "Qual som te acalma?"),
  generoFilme: z.string().min(1, "Qual estilo de filme você prefere?"),
  atividadeRelaxante: z.string().min(1, "O que mais te ajuda a relaxar?"),
});

export default function Cadastro() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.senha);
      const user = userCredential.user;

      await setDoc(doc(db, "usuarios", user.uid), {
        idUsuario: user.uid,
        nome: data.nome,
        email: data.email,
        tipoPerfil: "comum",
        moedas: 0,
        nivel: 1,
        xp: 0,
        dataCadastro: new Date()
      });

      const respostasMap = {
        0: data.objetivoPrincipal,
        1: data.condicaoPrevia,
        2: data.generoMusical,
        3: data.generoFilme,
        4: data.atividadeRelaxante
      };

      await addDoc(collection(db, "usuarios", user.uid, "respostasFormulario"), {
        idFormulario: "questionarioInicial",
        dataPreenchimento: new Date(),
        respostas: respostasMap
      });

      navigate("/humor");
    } catch (error) {
      alert("Erro ao criar conta: " + error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-peach-100 via-white to-peach-300 p-6 md:p-10">
      <motion.form
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl w-full max-w-2xl space-y-6 border border-white"
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold text-peach-500">MindQuest</h1>
          <p className="text-gray-500 text-sm mt-1">Vamos personalizar sua jornada de cura ✨</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="md:col-span-2">
            <label className="text-xs font-bold text-gray-400 ml-2 uppercase tracking-widest">Informações de Acesso</label>
            <div className="mt-2 relative">
              <User className="absolute left-3 top-3.5 size-5 text-gray-400" />
              <input placeholder="Nome completo" {...register("nome")} className="w-full pl-11 p-3 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-peach-400 outline-none" />
            </div>
            {errors.nome && <p className="text-red-400 text-xs mt-1 ml-2">{errors.nome.message}</p>}
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-3.5 size-5 text-gray-400" />
            <input placeholder="Email" {...register("email")} className="w-full pl-11 p-3 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-peach-400 outline-none" />
            {errors.email && <p className="text-red-400 text-xs mt-1 ml-2">{errors.email.message}</p>}
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-3.5 size-5 text-gray-400" />
            <input type="password" placeholder="Senha" {...register("senha")} className="w-full pl-11 p-3 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-peach-400 outline-none" />
            {errors.senha && <p className="text-red-400 text-xs mt-1 ml-2">{errors.senha.message}</p>}
          </div>

          <div className="md:col-span-2 pt-4 border-t border-gray-100">
            <label className="text-xs font-bold ml-2 uppercase tracking-widest text-peach-500">Para suas Recomendações</label>
          </div>

          <div className="relative">
            <Heart className="absolute left-3 top-3.5 size-5 text-gray-400 pointer-events-none" />
            <select {...register("objetivoPrincipal")} className="w-full pl-11 p-3 bg-gray-50 border-none rounded-2xl text-gray-500 focus:ring-2 focus:ring-peach-400 appearance-none">
              <option value="">Qual seu foco hoje?</option>
              <option value="ansiedade">Reduzir Ansiedade</option>
              <option value="foco">Melhorar Foco/TDAH</option>
              <option value="sono">Dormir Melhor</option>
              <option value="autoestima">Trabalhar Autoestima</option>
            </select>
            {errors.objetivoPrincipal && <p className="text-red-400 text-xs mt-1 ml-2">{errors.objetivoPrincipal.message}</p>}
          </div>

          <div className="relative">
            <Activity className="absolute left-3 top-3.5 size-5 text-gray-400 pointer-events-none" />
            <select {...register("condicaoPrevia")} className="w-full pl-11 p-3 bg-gray-50 border-none rounded-2xl text-gray-500 focus:ring-2 focus:ring-peach-400 appearance-none">
              <option value="">Histórico de saúde mental?</option>
              <option value="nao">Nunca tive diagnóstico</option>
              <option value="sim_tratamento">Sim, em tratamento</option>
              <option value="sim_sem_tratamento">Sim, mas sem acompanhamento</option>
              <option value="prefiro_nao_dizer">Prefiro não dizer</option>
            </select>
            {errors.condicaoPrevia && <p className="text-red-400 text-xs mt-1 ml-2">{errors.condicaoPrevia.message}</p>}
          </div>

          <div className="relative">
            <Music className="absolute left-3 top-3.5 size-5 text-gray-400 pointer-events-none" />
            <select {...register("generoMusical")} className="w-full pl-11 p-3 bg-gray-50 border-none rounded-2xl text-gray-500 focus:ring-2 focus:ring-peach-400 appearance-none">
              <option value="">Estilo de Música</option>
              <option value="lofi">Lofi / Relaxante</option>
              <option value="instrumental">Instrumental / Clássica</option>
              <option value="pop">Pop / Vibrante</option>
              <option value="natureza">Sons da Natureza</option>
            </select>
          </div>

          <div className="relative">
            <Film className="absolute left-3 top-3.5 size-5 text-gray-400 pointer-events-none" />
            <select {...register("generoFilme")} className="w-full pl-11 p-3 bg-gray-50 border-none rounded-2xl text-gray-500 focus:ring-2 focus:ring-peach-400 appearance-none">
              <option value="">Tipo de Filme</option>
              <option value="confort">Comfort Movie (Leve)</option>
              <option value="motivacional">Motivacional</option>
              <option value="animacao">Animação/Fantasia</option>
              <option value="documentario">Documentários</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <select {...register("atividadeRelaxante")} className="w-full p-3 bg-gray-50 border-none rounded-2xl text-gray-500 focus:ring-2 focus:ring-peach-400">
              <option value="">O que mais te ajuda a relaxar?</option>
              <option value="meditacao">Meditação / Respiração</option>
              <option value="leitura">Ler um Livro</option>
              <option value="exercicio">Exercícios Físicos</option>
              <option value="arte">Pintar / Criar algo</option>
              <option value="jogar">Jogar Videogames</option>
            </select>
          </div>
        </div>

        <button type="submit" className="w-full bg-peach-500 text-white p-4 rounded-2xl font-bold hover:bg-peach-400 shadow-lg shadow-peach-300 transition-all transform active:scale-95 mt-4">
          Finalizar Cadastro e Ver Perfil ✨
        </button>
      </motion.form>
    </div>
  );
}