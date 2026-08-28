import SkillCard from "./SkillCard";

function Skills() {
    const habilidades = [
        "React",
        "TypeScript",
        "JavaScript",
        "HTML5 & CSS3",
        "Bootstrap",
        "PHP",
        "MySQL",
        "Git & GitHub",
    ];

    return (
        <section id="Skills" className="container py-5">
            <h2 className="text-center mb-5">Habilidades</h2>
            <div className="row">
                {habilidades.map((habilidad) => (
                    <SkillCard key={habilidad} nombre={habilidad} />
                ))}
            </div>
        </section>
    );
}

export default Skills;