import { useState} from "react";

interface Servicio {
    nombre: string,
    precio: number,
}
const servicios:Servicio[]=[
    {
        nombre: "Landing Page",
        precio: 500
    },
    {
        nombre: "Crear una página web básica",
        precio: 900
    },
    {
        nombre: "Crear una tienda online",
        precio: 2000
    },
    {
        nombre: "Crear una aplicación móvil",
        precio: 1500
    },
    {
        nombre: "Sistema de Inventario",
        precio: 900
    },
    {
        nombre: "Automatización de Procesos",
        precio: 900
    },
    {
        nombre: "Mantenimiento Web",
        precio: 900
    },
    {
        nombre: "Integración de APIs",
        precio: 900
    },
    {
        nombre: "Página Web Corporativa",
        precio: 900
    },

    {
        nombre: "Formateo e Instalación",
        precio: 900
    },
    {
        nombre: "Seguridad Informática",
        precio: 900
    },
    {
        nombre: "Hosting y Dominios",
        precio: 900
    },
    {
        nombre: "Recuperación de Datos",
        precio: 900
    },
    {
        nombre: "Consultoría Tecnológica",
        precio: 900
    },
    {
        nombre: "Mantenimiento de PC",
        precio: 900
    },
    {
        nombre: "Auditoría básica de seguridad",
        precio: 900
    },
    {
        nombre: "Diseño de Logo",
        precio: 900
    },
    {
        nombre: "Diseño para Redes Sociales",
        precio: 900
    },
    {
        nombre: "Diseño de Catálogo",
        precio: 900
    },
    {
        nombre: "Diseño de Publicidad Digital",
        precio: 900
    },
]
function Cotizador(){
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [servicio, setServicio] = useState("Landing Page");
    const [paginas, setPaginas] = useState(1);

    const [diseno, setDiseno] = useState(false);
    const [formulario, setFormulario] = useState(false);
    const [whatsapp, setWhatsapp] = useState(false);
    const [hosting, setHosting] = useState(false);

    const [cotizacionGenerada, setCotizacionGenereda] = useState(false);

    const servicioSeleccionado = servicios.find(
        (item) => item.nombre === servicio
    );

    const precioBase = servicioSeleccionado?.precio ?? 0;
    const paginasAdicionales = paginas > 1 ? (paginas - 1) *50 : 0;
    const PrecioDiseno = diseno ? 300 : 0;
    const PrecioFormulario = formulario ? 100 : 0;
    const PrecioWhatsapp = whatsapp ? 150 : 0;
    const PrecioHosting = hosting ? 250 : 0;

    const total = 
    precioBase +
    paginasAdicionales +
    PrecioDiseno +
    PrecioFormulario +
    PrecioWhatsapp +
    PrecioHosting;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    if (!correo.trim()) {
  alert("Por favor, ingresa tu correo.");
  return;
}



    if (!nombre.trim()) {

      alert("Por favor, ingresa tu nombre.");

      return;

    }



    setCotizacionGenereda(true);

  };



  return (

    <section id="cotizador" className="cotizador-section py-5">

      <div className="container">



        {/* TÍTULO */}

        <div className="text-center mb-5">

          <span className="cotizador-etiqueta">

            COTIZACIÓN

          </span>



          <h2 className="fw-bold mt-2">

            Cotiza tu proyecto

          </h2>



          <p className="text-muted">

            Selecciona los servicios que necesitas y obtén

            un precio estimado al instante.

          </p>

        </div>



        <div className="row g-4">



          {/* FORMULARIO */}

          <div className="col-lg-7">

            <div className="card cotizador-card shadow-sm">

              <div className="card-body p-4">



                <h4 className="fw-bold mb-4">

                  Cuéntame sobre tu proyecto

                </h4>



                <form onSubmit={handleSubmit}>



                  {/* NOMBRE */}

                  <div className="mb-3">

                    <label className="form-label fw-semibold">

                      Tu nombre

                    </label>



                    <input

                      type="text"

                      className="form-control"

                      placeholder="Ej. Juan Pérez"

                      value={nombre}

                      onChange={(e) =>

                        setNombre(e.target.value)

                      }

                    />

                  </div>
                  {/* CORREO */}
<div className="mb-3">
  <label className="form-label fw-semibold">
    Tu correo
  </label>

  <input
    type="email"
    className="form-control"
    placeholder="Ej. correo@ejemplo.com"
    value={correo}
    onChange={(e) =>
      setCorreo(e.target.value)
    }
  />
</div>



                  {/* SERVICIO */}

                  <div className="mb-3">

                    <label className="form-label fw-semibold">

                      Tipo de proyecto

                    </label>



                    <select

                      className="form-select"

                      value={servicio}

                      onChange={(e) =>

                        setServicio(e.target.value)

                      }

                    >

                      {servicios.map((item) => (

                        <option

                          key={item.nombre}

                          value={item.nombre}

                        >

                          {item.nombre} - S/ {item.precio}

                        </option>

                      ))}

                    </select>

                  </div>



                  {/* PÁGINAS */}

                  <div className="mb-4">

                    <label className="form-label fw-semibold">

                      Número de páginas

                    </label>



                    <input

                      type="number"

                      className="form-control"

                      min="1"

                      max="20"

                      value={paginas}

                      onChange={(e) =>

                        setPaginas(Number(e.target.value))

                      }

                    />



                    <small className="text-muted">

                      Cada página adicional tiene un costo

                      de S/ 50.

                    </small>

                  </div>



                  {/* ADICIONALES */}

                  <h5 className="fw-bold mb-3">

                    Servicios adicionales

                  </h5>



                  <div className="form-check cotizador-option mb-3">

                    <input

                      className="form-check-input"

                      type="checkbox"

                      checked={diseno}

                      onChange={(e) =>

                        setDiseno(e.target.checked)

                      }

                      id="diseno"

                    />



                    <label

                      className="form-check-label"

                      htmlFor="diseno"

                    >

                      Diseño personalizado

                      <span> + S/ 300</span>

                    </label>

                  </div>
                  <div className="form-check cotizador-option mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={formulario}
                      onChange={(e) =>
                        setFormulario(e.target.checked)
                      }
                      id="formulario"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="formulario"
                    >
                      Formulario de contacto
                      <span> + S/ 100</span>
                    </label>
                  </div>
                  <div className="form-check cotizador-option mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={whatsapp}
                      onChange={(e) =>
                        setWhatsapp(e.target.checked)
                      }
                      id="whatsapp"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="whatsapp"
                    >
                      Integración con WhatsApp
                      <span> + S/ 150</span>
                    </label>
                  </div>
                  <div className="form-check cotizador-option mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={hosting}
                      onChange={(e) =>
                        setHosting(e.target.checked)
                      }
                      id="hosting"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="hosting"
                    >
                      Dominio y Hosting
                      <span> + S/ 250</span>
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary w-100 cotizador-button"
                  >
                    Generar cotización
                  </button>
                </form>
              </div>
            </div>
          </div>
          {/* RESUMEN */}
          <div className="col-lg-5">
            <div className="cotizador-resumen shadow-sm">
              <div className="text-center mb-4">
                <div className="cotizador-icon">
                </div>
                <h4 className="fw-bold mt-3">
                  Resumen
                </h4>
                <p className="text-muted">
                  Precio estimado de tu proyecto
                </p>
              </div>
              <div className="resumen-linea">
                <span>Proyecto</span>
                <strong>{servicio}</strong>
              </div>
              <div className="resumen-linea">
                <span>Precio base</span>
                <strong>
                  S/ {precioBase}
                </strong>
              </div>
              <div className="resumen-linea">
                <span>Páginas adicionales</span>
                <strong>
                  S/ {paginasAdicionales}
                </strong>
              </div>
              {diseno && (
                <div className="resumen-linea">
                  <span>Diseño personalizado</span>
                  <strong>S/ 300</strong>
                </div>
              )}
              {formulario && (
                <div className="resumen-linea">
                  <span>Formulario</span>
                  <strong>S/ 100</strong>
                </div>
              )}
              {whatsapp && (
                <div className="resumen-linea">
                  <span>WhatsApp</span>
                  <strong>S/ 150</strong>
                </div>
              )}
              {hosting && (
                <div className="resumen-linea">
                  <span>Hosting</span>
                  <strong>S/ 250</strong>
                </div>
              )}
              <hr />
              <div className="total-cotizacion">
                <span>Total estimado</span>
                <strong>
                  S/ {total.toLocaleString("es-PE")}
                </strong>
              </div>
             {cotizacionGenerada && (
  <div className="alert alert-success mt-4">
    <strong>¡Cotización generada!</strong>
    <br />
    Cliente: {nombre}
    <br />
    Correo: {correo}
    <br />
    Proyecto: {servicio}
    <br />
    Páginas: {paginas}
    <br />
    Servicios adicionales:
    <ul className="mb-0 mt-1">
      {diseno && <li>✓ Diseño personalizado</li>}
      {formulario && <li>✓ Formulario de contacto</li>}
      {whatsapp && <li>✓ Integración con WhatsApp</li>}
      {hosting && <li>✓ Dominio y Hosting</li>}
    </ul>
    Total estimado: S/{" "}
    {total.toLocaleString("es-PE")}
  </div>
)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Cotizador;