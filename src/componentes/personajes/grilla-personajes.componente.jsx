import "./grilla-personajes.css";
import TarjetaPersonaje from "./tarjeta-personaje.componente";

/**
 * Grilla de personajes para la pagina de inicio
 *
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 *
 *
 * @returns un JSX element
 */
const GrillaPersonajes = (props) => {
  const recargarComponente = (event) => {
    props.recargarComponente(event);
  };
  return (
    <div className="grilla-personajes">
      {props?.personajes?.map((personaje) => {
        return (
          <TarjetaPersonaje
            key={personaje?.id}
            personaje={personaje}
            recargarComponente={recargarComponente}
          />
        );
      })}
    </div>
  );
};

export default GrillaPersonajes;
