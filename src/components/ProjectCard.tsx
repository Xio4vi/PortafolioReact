interface ProjectProps{
    nombre: string;
    descripcion: string;
    link?: string;
}

function ProjectCard({nombre, descripcion, link}:ProjectProps){
    return(
        <div className="col-md-4 mb-4">
            <div className="card shadow h-100">
                <div className="card-body">
                    <h4>{nombre}</h4>
                    <p>{descripcion}</p>
                    <a href={link ?? "#"} target="_blank" rel="noreferrer" className="btn btn-primary">
                        ver proyecto
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;