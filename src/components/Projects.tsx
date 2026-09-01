import ProjectCard from "./ProjectCard";
import imgportafolio from "../assets/proyectos/portafolio.png";
import imgbodega from "../assets/proyectos/bodega.png";
import imgmonitoreo from "../assets/proyectos/monitoreo.png";

function Projects() {
    const proyectos = [
        {
            id: 1,
            nombre: "Portafolio Personal",
            descripcion: "Desarrollado con Html, Css y JavaScript.",
            imagen: imgportafolio,
            github: " https://xio4vi.github.io/portafoliox/",
            demo: "", // opcional, borra esta línea si no tienes demo en vivo
        },
        {
            id: 2,
            nombre: "Catalogo para Bodega Carmencita",
            descripcion: "Catalogo de los productos con los que cuenta la bodega y una forma de hacer los pedidos de forma rapida y eficiente.",
            imagen: imgbodega,
            github: "https://xio4vi.github.io/Bodega_carmencita/",
            demo: "",
        },
        {
            id: 3,
            nombre: "Sistema de monitoreo",
            descripcion: "Control y monitoreo en tiempo real de los procesos.",
            imagen: imgmonitoreo,
            github: " https://xio4vi.github.io/pipeline/",
            demo: "",
        },
    ];

    return (
        <section id="projects" className="container py-5">
            <h2 className="text-center mb-5">Proyectos</h2>
            <div className="row">
                {proyectos.map((proyecto) => (
                    <ProjectCard
                        key={proyecto.id}
                        nombre={proyecto.nombre}
                        descripcion={proyecto.descripcion}
                        imagen={proyecto.imagen}
                        github={proyecto.github}
                        demo={proyecto.demo}
                    />
                ))}
            </div>
        </section>
    );
}

export default Projects;