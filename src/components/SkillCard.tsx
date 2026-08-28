interface SkillProps {
    nombre: string;
}

function SkillCard({ nombre }: SkillProps) {
    return (
        <div className="col-6 col-md-3 mb-4">
            <div className="card shadow-sm text-center h-100 py-3">
                <div className="card-body">
                    <h6 className="fw-bold mb-0">{nombre}</h6>
                </div>
            </div>
        </div>
    );
}

export default SkillCard;