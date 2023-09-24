import "./tarjeta-episodio.css";
import { Episodio } from "../../interface/tarjeta-episodios.interface";

/**
 * Tarjeta para cada episodio dentro de la vista de personaje.
 *
 * Deberás agregar las propiedades necesarias para mostrar los datos de los episodios
 *
 *
 * @returns un JSX element
 */

const TarjetaEpisodio = ({
  nombre,
  numeroDeEpisodio,
  fechaDeLanzamiento,
}: Episodio) => {
  const fechaString = fechaDeLanzamiento.toLocaleDateString();
  return (
    <div className="tarjeta-episodio">
      <h4>{nombre}</h4>
      <div>
        <span>{numeroDeEpisodio}</span>
        <span>Lanzado el: {fechaString}</span>
      </div>
    </div>
  );
};

export default TarjetaEpisodio;
