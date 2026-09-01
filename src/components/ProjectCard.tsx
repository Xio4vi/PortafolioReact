interface ProjectProps {
    nombre: string;
    descripcion: string;
    imagen: string;
    github: string;
    demo?: string;
}

function ProjectCard({ nombre, descripcion, imagen, github, demo }: ProjectProps) {
    return (
        <div className="col-md-4 mb-4">
            <div className="card shadow h-100">
                <img src={imagen} alt={nombre} className="project-cover" />
                <div className="card-body">
                    <h4>{nombre}</h4>
                    <p>{descripcion}</p>
                    <div className="d-flex gap-2">
                        <a href={github} target="_blank" rel="noreferrer" className="btn btn-primary">
                            Ver Proyecto
                        </a>
                        {demo && (
                            <a href={demo} target="_blank" rel="noreferrer" className="btn btn-outline-light">
                                Ver demo
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;