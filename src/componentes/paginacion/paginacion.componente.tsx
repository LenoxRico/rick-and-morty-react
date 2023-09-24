import "./paginacion.css";
import { useAppDispatch, useAppSelector } from "../../store";

import { OBTENER_PERSONAJE } from "../../store/thunk";

/**
 * Componente que contiene los botones para paginar
 *
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 *
 *
 * @returns un JSX element
 */
const Paginacion = () => {
  const dispatch = useAppDispatch();
  const { nextPage, prevPage } = useAppSelector((state) => state.characters);
  const cambiarPagina = (page: string) => {
    dispatch(OBTENER_PERSONAJE(page));
  };
  return (
    <div className="paginacion">
      <button
        onClick={() => cambiarPagina(prevPage)}
        disabled={!prevPage}
        className={"primary"}
      >
        Anterior
      </button>
      <button
        onClick={() => cambiarPagina(nextPage)}
        disabled={!nextPage}
        className={"primary"}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Paginacion;
