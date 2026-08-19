interface ProjectProps{
    nombre: string;
    descripcion: string;
}

function ProjectCard({nombre, descripcion}:ProjectProps){
    return(
        <div className="col-md-4 mb-4">
            <div className="card shadow h-100">
                <div className="card-body">
                    <h4>{nombre}</h4>
                    <p>{descripcion}</p>
                    <button className="btn btn-primary">
                        ver proyecto
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;