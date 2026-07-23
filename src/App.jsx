import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Humor from "./pages/Humor";
import Calendario from "./pages/Calendario"; // 1. Certifique-se de importar aqui!
import Menu from "./pages/Menu"
import Senha from "./pages/Senha"
import CadastroPsicologo from "./pages/Cadastro-Psicologo";
import MenuPsicologo from "./pages/Menu-Psicologo";
import Formulario from "./pages/Formulario"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/humor" element={<Humor />} />
        <Route path="/calendario" element={<Calendario />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/senha" element={<Senha />}/>
        <Route path="/cadastropsicologo" element={<CadastroPsicologo />}/>
        <Route path="/menupsicologo" element={<MenuPsicologo />}/>
        <Route path="/formulario" element={<Formulario />}/>
        

      </Routes>
    </Router>
  );
}

export default App;