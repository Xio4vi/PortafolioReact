function Contact() {
    return (
        <section id="Contact" className="container py-5">
            <h2 className="text-center mb-4">Contacto</h2>
            <p className="text-center lead mb-4">
                ¿Tienes un proyecto en mente? Escríbeme y conversamos.
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
                <a                
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=vixiomara906@gmail.com&su=Contacto%20desde%20tu%20portafolio"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link"
                >
                    <span className="contact-link__icon">✉</span>
                    Correo
                </a>
                <a href="https://wa.me/51933203806" target="_blank" rel="noreferrer" className="contact-link">
                    <span className="contact-link__icon">📱</span>
                    WhatsApp
                </a>
                <a
    href="https://www.linkedin.com/in/villarruel-virtual
Nombre de la URL personalizada
"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-link"
>
    <span className="contact-link__icon">💼</span>
    LinkedIn
</a>

            </div>
        </section>
    );
}

export default Contact;