import ProjectCard from "./ProjectCard";

function Projects(){
    const proyectos = [
        {
            id: 1,
            nombre: "Sistema de Inventario",
            descripcion: "Sistema desarrollado con PHP y MySQL."
        },
        {
            id: 2,
            nombre: "Sistema de Ventas",
            descripcion: "Aplicación para controlar ventas."
        },
    ];
    return(
        <section id="projects"
        className="container py-5">
            <h2 className="text-center mb-5">
                Proyectos
            </h2>
            <div className="row">
            {proyectos.map((proyecto)=>(
                <ProjectCard
                    key={proyecto.id}
                    nombre={proyecto.nombre}
                    descripcion={proyecto.descripcion}
                />
            ))}
            </div>
        </section>
    );
}

export default Projects;