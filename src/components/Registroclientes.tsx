import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface Cliente {
  nombre: string;
  apellido: string;
  correo: string;
  telefono: string;
  empresa: string;
}

function RegistroClientes() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Cliente>({
    mode: "onChange",
  });

    const onSubmit = async (data: Cliente) => {
    try {
      const respuesta = await fetch(
        "https://formsubmit.co/ajax/vixiomara906@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            _subject: "Nuevo registro de cliente",
            ...data,
          }),
        }
      );

      if (!respuesta.ok) throw new Error("Error al enviar");

      toast.success("Cliente registrado correctamente");
      reset();
    } catch (error) {
      toast.error("No se pudo registrar. Intenta de nuevo.");
    }
  };

  return (
    <section id="Registro" className="registro-clientes">
      <div className="container">
        <div className="text-center mb-5">
          <span className="registro-etiqueta">REGISTRO</span>
          <h2 className="fw-bold mt-2">Registra tus datos</h2>
          <p className="text-muted">
            Completa el formulario para solicitar información sobre nuestros servicios.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="registro-card">
              <form onSubmit={handleSubmit(onSubmit)}>

                {/* NOMBRE */}
                <div className="mb-3">
                  <label className="form-label">Nombre</label>
                  <input
                    type="text"
                    placeholder="Nombre"
                    className={`form-control ${errors.nombre ? "input-error" : ""}`}
                    {...register("nombre", {
                      required: "El nombre es obligatorio",
                      minLength: {
                        value: 2,
                        message: "El nombre debe tener al menos 2 caracteres",
                      },
                    })}
                  />
                  {errors.nombre && (
                    <p className="error">{errors.nombre.message}</p>
                  )}
                </div>

                {/* APELLIDO */}
                <div className="mb-3">
                  <label className="form-label">Apellido</label>
                  <input
                    type="text"
                    placeholder="Apellido"
                    className={`form-control ${errors.apellido ? "input-error" : ""}`}
                    {...register("apellido", {
                      required: "El apellido es obligatorio",
                      minLength: {
                        value: 2,
                        message: "El apellido debe tener al menos 2 caracteres",
                      },
                    })}
                  />
                  {errors.apellido && (
                    <p className="error">{errors.apellido.message}</p>
                  )}
                </div>

                {/* CORREO */}
                <div className="mb-3">
                  <label className="form-label">Correo electrónico</label>
                  <input
                    type="email"
                    placeholder="Correo electrónico"
                    className={`form-control ${errors.correo ? "input-error" : ""}`}
                    {...register("correo", {
                      required: "El correo es obligatorio",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Ingrese un correo válido",
                      },
                    })}
                  />
                  {errors.correo && (
                    <p className="error">{errors.correo.message}</p>
                  )}
                </div>

                {/* TELÉFONO */}
                <div className="mb-3">
                  <label className="form-label">Teléfono</label>
                  <input
                    type="text"
                    placeholder="Teléfono"
                    maxLength={9}
                    className={`form-control ${errors.telefono ? "input-error" : ""}`}
                    {...register("telefono", {
                      required: "El teléfono es obligatorio",
                      pattern: {
                        value: /^[0-9]{9}$/,
                        message: "El teléfono debe tener 9 dígitos",
                      },
                    })}
                  />
                  {errors.telefono && (
                    <p className="error">{errors.telefono.message}</p>
                  )}
                </div>

                {/* EMPRESA (opcional) */}
                <div className="mb-4">
                  <label className="form-label">Empresa</label>
                  <input
                    type="text"
                    placeholder="Empresa"
                    className="form-control"
                    {...register("empresa")}
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Registrar cliente
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegistroClientes;