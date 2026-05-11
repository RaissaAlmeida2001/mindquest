import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Humor from "./pages/Humor";
import Calendario from "./pages/Calendario"; // 1. Certifique-se de importar aqui!
import Menu from "./pages/Menu"


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
      </Routes>
    </Router>
  );
}

export default App;