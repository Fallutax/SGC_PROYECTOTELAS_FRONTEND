import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TasksPage } from "./pages/TasksPage";
import { TaskFormPage } from "./pages/TaskFormPage";
import { Navigation } from "./components/Navigation";
import { Toaster } from "react-hot-toast";
import { AdmMenu } from "./pages/AdmMenu";
import { VenMenu } from "./pages/VenMenu";
import { Navbar } from "./components/navbar";
import {Footer} from "./components/footer";
import { RegistroRetazos } from "./pages/RegistroRetazos";





function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/tasks" />} />
        <Route path="/adm-menu" element={<AdmMenu />} />
        <Route path="/ven-menu" element={<VenMenu />} />
        <Route path="/registro-retazos" element={<RegistroRetazos />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/tasks-create" element={<TaskFormPage />} />
        <Route path="/tasks/:id" element={<TaskFormPage />} />
      </Routes>
      <Toaster />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
