import { Routes, Route } from "react-router-dom";
import { Home, Cadastro, Login, CadastroEmpresa, Projeto } from "./pages";
import { NovoProjeto } from "./pages/NovoProjeto";
import { Dashboard } from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cadastroEmpresa" element={<CadastroEmpresa />} />
        <Route path="/login" element={<Login />} />
        <Route path="/projeto" element={<Projeto />} />
        <Route path="/novoprojeto" element={<NovoProjeto />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App