import BotonFavorito from "../botones/boton-favorito.componente";
import "./tarjeta-personaje.css";

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes.
 *
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 *
 *
 * @returns un JSX element
 */
const TarjetaPersonaje = (props) => {
  const { personaje } = props;
  const recargarComponente = (event) => {
    props.recargarComponente(event);
  };
  return (
    <div className="tarjeta-personaje">
      <img src={personaje?.image} alt={personaje?.name} />
      <div className="tarjeta-personaje-body">
        <span>{personaje?.name}</span>
        <BotonFavorito
          esFavorito={personaje?.esFavorito}
          onClick={personaje}
          recargarComponente={recargarComponente}
        />
      </div>
    </div>
  );
};

export default TarjetaPersonaje;
