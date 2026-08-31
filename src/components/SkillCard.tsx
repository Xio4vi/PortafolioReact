interface SkillProps {
    nombre: string;
}

function SkillCard({ nombre }: SkillProps) {
    return (
        <div className="col-6 col-md-3 mb-4">
            <div className="skill-pill">
                <span className="skill-pill__dot"></span>
                <span>{nombre}</span>
            </div>
        </div>
    );
}

export default SkillCard;