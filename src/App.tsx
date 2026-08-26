import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Cotizador from "./components/Cotizador";
import FormularioServicios from "./components/FormularioServicios";
import Footer from "./components/Footer";

import './App.css';

function App() {
  return <>
    <Header />
    <Hero />
    <About />
    <Projects />
    <Cotizador />
    <FormularioServicios />
    <Footer />
    </>
  ;
}

export default App;