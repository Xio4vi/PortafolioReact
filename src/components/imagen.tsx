import foto from "../assets/foto.jpg";

function Imagen() {
  return (
    <div>
      <img
        src={foto}
        alt="Mi imagen"
        width="300"
      />

      <h2>Mi primera imagen en React</h2>

      <p>
        Este componente muestra una imagen almacenada en la carpeta assets.
      </p>
    </div>
  );
}

export default Imagen;