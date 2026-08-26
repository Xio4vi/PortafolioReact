import { useForm } from "react-hook-form";

import toast from "react-hot-toast";



interface FormularioData {

  nombre: string;

  correo: string;

  telefono: string;

  servicio: string;

  mensaje: string;

}



function FormularioServicios() {

  const {

    register,

    handleSubmit,

    reset,

    formState: { errors },

  } = useForm<FormularioData>({

    mode: "onChange",

  });



  const onSubmit = (data: FormularioData) => {

    console.log("Datos enviados:", data);



    toast.success("¡Solicitud enviada correctamente!");



    reset();

  };



  return (

    <section id="solicitar" className="formulario-servicios">

      <div className="container">



        {/* TÍTULO */}

        <div className="section-title">

          <span className="formulario-etiqueta">

            SOLICITA TU PROYECTO

          </span>



          <h2>¿Tienes un proyecto en mente?</h2>



          <p>

            Cuéntame sobre tu proyecto y revisaremos juntos

            la mejor solución para tus necesidades.

          </p>

        </div>



        <div className="row g-5 align-items-center">



          {/* INFORMACIÓN */}

          <div className="col-lg-5">



            <h3>Hablemos de tu proyecto</h3>



            <p>

              Completa el formulario y envíame los detalles

              de lo que necesitas. La información nos permitirá

              conocer mejor tu proyecto.

            </p>



            <div className="formulario-beneficios">



              <div className="beneficio">

                <span>✓</span>

                <p>Desarrollo de páginas web</p>

              </div>



              <div className="beneficio">

                <span>✓</span>

                <p>Sistemas empresariales</p>

              </div>



              <div className="beneficio">

                <span>✓</span>

                <p>Diseño de interfaces</p>

              </div>



              <div className="beneficio">

                <span>✓</span>

                <p>Mantenimiento y soporte</p>

              </div>



            </div>



          </div>



          {/* FORMULARIO */}

          <div className="col-lg-7">



            <div className="formulario-card">



              <form onSubmit={handleSubmit(onSubmit)}>



                {/* NOMBRE */}

                <div className="mb-3">



                  <label className="form-label">

                    Nombre completo

                  </label>



                  <input

                    type="text"

                    className={`form-control ${

                      errors.nombre ? "input-error" : ""

                    }`}

                    placeholder="Ej. Juan Pérez"

                    {...register("nombre", {

                      required: "El nombre es obligatorio",

                      minLength: {

                        value: 3,

                        message:

                          "El nombre debe tener al menos 3 caracteres",

                      },

                    })}

                  />



                  {errors.nombre && (

                    <span className="error">

                      {errors.nombre.message}

                    </span>

                  )}



                </div>





                {/* CORREO */}

                <div className="mb-3">



                  <label className="form-label">

                    Correo electrónico

                  </label>



                  <input

                    type="email"

                    className={`form-control ${

                      errors.correo ? "input-error" : ""

                    }`}

                    placeholder="Ej. correo@gmail.com"

                    {...register("correo", {

                      required: "El correo es obligatorio",

                      pattern: {

                        value:

                          /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

                        message:

                          "Ingrese un correo electrónico válido",

                      },

                    })}

                  />



                  {errors.correo && (

                    <span className="error">

                      {errors.correo.message}

                    </span>

                  )}



                </div>





                {/* TELÉFONO */}

                <div className="mb-3">



                  <label className="form-label">

                    Teléfono

                  </label>



                  <input

                    type="text"

                    maxLength={9}

                    className={`form-control ${

                      errors.telefono ? "input-error" : ""

                    }`}

                    placeholder="Ej. 987654321"

                    {...register("telefono", {

                      required: "El teléfono es obligatorio",

                      pattern: {

                        value: /^[0-9]{9}$/,

                        message:

                          "El teléfono debe tener 9 dígitos",

                      },

                    })}

                  />



                  {errors.telefono && (

                    <span className="error">

                      {errors.telefono.message}

                    </span>

                  )}



                </div>





                {/* SERVICIO */}

                <div className="mb-3">



                  <label className="form-label">

                    Servicio solicitado

                  </label>



                  <select

                    className={`form-select ${

                      errors.servicio ? "input-error" : ""

                    }`}

                    {...register("servicio", {

                      required: "Seleccione un servicio",

                    })}

                  >



                    <option value="">

                      Seleccione un servicio

                    </option>



                    <option value="Desarrollo Web">

                      Desarrollo Web

                    </option>



                    <option value="Sistema Empresarial">

                      Sistema Empresarial

                    </option>



                    <option value="Diseño UI/UX">

                      Diseño UI/UX

                    </option>



                    <option value="Mantenimiento Web">

                      Mantenimiento Web

                    </option>



                  </select>



                  {errors.servicio && (

                    <span className="error">

                      {errors.servicio.message}

                    </span>

                  )}



                </div>





                {/* MENSAJE */}

                <div className="mb-4">



                  <label className="form-label">

                    Descripción del proyecto

                  </label>



                  <textarea

                    className={`form-control ${

                      errors.mensaje ? "input-error" : ""

                    }`}

                    rows={5}

                    placeholder="Cuéntame qué necesitas para tu proyecto..."

                    {...register("mensaje", {

                      required:

                        "La descripción es obligatoria",

                      minLength: {

                        value: 10,

                        message:

                          "Describe tu proyecto con al menos 10 caracteres",

                      },

                    })}

                  />



                  {errors.mensaje && (

                    <span className="error">

                      {errors.mensaje.message}

                    </span>

                  )}



                </div>





                {/* BOTÓN */}

                <button

                  type="submit"

                  className="btn btn-primary w-100 formulario-button"

                >

                  Enviar solicitud

                </button>



              </form>



            </div>



          </div>



        </div>



      </div>

    </section>

  );

}



export default FormularioServicios;