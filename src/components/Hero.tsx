function Hero() {
    return(
        <section id="Inicio"
            className="container text-center py-5">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm7XbC34r4AHX0fh4QAkGWCD1X-8f0snzUpBuetFKIMI7laGmfoBe23y_X&s=10"
                className="rounded-circle mb-4" alt="Foto"></img>
                <h1 className="display-4 fw-bold">
                    Hola, Soy Xiomara Villarruel
                </h1>
                <h3 className="text-primary">
                    Desarrolladora Web
                </h3>
                <p className="lead mt-3">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <button className="btn btn-primary me-3">
                    Ver Proyectos
                </button>
                <button className="btn btn-outline-dark">
                    Descargar CV
                </button>
            </section> 
    );
}
export default Hero;