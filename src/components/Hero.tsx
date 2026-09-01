import xio from "../assets/xio.png";

function Hero() {
    return (
        <section id="Inicio" className="hero-pro">
            <div className="container">
                <div className="hero-pro__grid">

                    {/* FOTO */}
                    <div className="hero-pro__media">
                        <div className="hero-pro__glow"></div>
                        <div className="hero-pro__frame">
                            <img
                                src={xio}
                                alt="Xiomara Villarruel"
                                className="hero-pro__img"
                            />
                        </div>
                    </div>

                    {/* TEXTO */}
                    <div className="hero-pro__content">
                        <span className="hero-pro__badge">
                            DESARROLLADORA WEB
                        </span>

                        <h1 className="hero-pro__title">
                            Hola, soy <span>Xiomara Villarruel</span>
                        </h1>

                        <p className="hero-pro__subtitle">
                            Construyo experiencias web modernas, rápidas y
                            funcionales, desde el diseño hasta la implementación.
                        </p>

                        <div className="hero-pro__actions">
                            <a href="#Projects" className="hero-pro__btn-primary">
                                Ver Proyectos
                            </a>
                         <a
    href={`${import.meta.env.BASE_URL}CV_Xiomara.pdf`}
    download="CV_Xiomara.pdf"
    className="hero-pro__btn-secondary"
>
    Descargar CV
</a>
                        </div>

                        <div className="hero-pro__stats">
                            <div className="hero-pro__stat">
                                <strong>+20</strong>
                                <span>Servicios ofrecidos</span>
                            </div>
                            <div className="hero-pro__stat">
                                <strong>100%</strong>
                                <span>Enfoque a resultados</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
export default Hero;