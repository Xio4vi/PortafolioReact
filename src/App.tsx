import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Cotizador from "./components/Cotizador";
import FormularioServicios from "./components/FormularioServicios";
import Registroclientes from "./components/Registroclientes";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import './App.css';

function App() {
  return <>
    <Toaster />
    <Header />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Cotizador />
    <FormularioServicios />
    <Registroclientes />
    <Contact />
    <Footer />
    </>
  ;
}

export default App;