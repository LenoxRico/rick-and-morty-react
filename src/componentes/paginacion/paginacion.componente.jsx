import "./paginacion.css";

/**
 * Componente que contiene los botones para paginar
 *
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 *
 *
 * @returns un JSX element
 */
const Paginacion = (props) => {
  const cambiarPagina = (esSiguiente) => {
    const anteriorSiguiente = esSiguiente
      ? props?.pagina?.info?.next
      : props?.pagina?.info?.prev;
    props.cambiarPagina(anteriorSiguiente);
  };
  return (
    <div className="paginacion">
      <button
        disabled={!props?.pagina?.info?.prev}
        className={"primary"}
        onClick={() => cambiarPagina(false)}
      >
        Anterior
      </button>
      <button
        disabled={!props?.pagina?.info?.next}
        className={"primary"}
        onClick={() => cambiarPagina(true)}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Paginacion;
