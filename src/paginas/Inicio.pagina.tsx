import { useEffect, useState } from "react";
import Paginacion from "../componentes/paginacion/paginacion.componente";
import Filtros from "../componentes/personajes/filtros.componente";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { useAppDispatch, useAppSelector } from "../store";
import { OBTENER_PERSONAJE } from "../store/thunk";
/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 *
 * Uso:
 * ``` <PaginaInicio/> ```
 *
 * @returns la pagina de inicio
 */
const PaginaInicio = () => {
  const dispatch = useAppDispatch();
  const { allCharacters, urlBase } = useAppSelector(
    (state) => state.characters
  );
  const [name, setName] = useState<string | null>("");
  const limpiarFiltro = () => {
    setName(null);
  };
  useEffect(() => {
    dispatch(OBTENER_PERSONAJE(urlBase));
  }, []);

  return (
    <div className="container">
      <div className="actions">
        <h3>Catálogo de Personajes</h3>
        <button onClick={limpiarFiltro} className="danger">
          Limpiar Filtro
        </button>
      </div>
      <Filtros name={name} setName={setName} urlBase={urlBase} />
      <Paginacion />
      <GrillaPersonajes initialCharacters={allCharacters} />
      <Paginacion />
    </div>
  );
};

export default PaginaInicio;
