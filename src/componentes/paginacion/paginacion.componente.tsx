import "./paginacion.css";
import { useAppDispatch, useAppSelector } from "../../store";

import { GET_CHARACTERS } from "../../store/character/thunk";

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
  const handelPage = (page: string) => {
    dispatch(GET_CHARACTERS(page));
  };
  return (
    <div className="paginacion">
      <button
        onClick={() => handelPage(prevPage)}
        disabled={!prevPage}
        className={"primary"}
      >
        Anterior
      </button>
      <button
        onClick={() => handelPage(nextPage)}
        disabled={!nextPage}
        className={"primary"}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Paginacion;
