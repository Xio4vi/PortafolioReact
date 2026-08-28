function Contact() {
    return (
        <section id="Contact" className="container py-5">
            <h2 className="text-center mb-4">Contacto</h2>
            <p className="text-center lead mb-4">
                ¿Tienes un proyecto en mente? Escríbeme y conversamos.
            </p>
            <div className="d-flex justify-content-center gap-4 flex-wrap">
                <a href="mailto:vixiomara906@gmail.com" className="btn btn-outline-primary">
                    ✉ Correo
                </a>
                <a href="https://wa.me/51933203806" target="_blank" rel="noreferrer" className="btn btn-outline-success">
                    📱 WhatsApp
                </a>
                <a href="https://linkedin.com/in/villarruel-virtual" target="_blank" rel="noreferrer" className="btn btn-outline-dark">
                    💼 LinkedIn
                </a>
            </div>
        </section>
    );
}

export default Contact;