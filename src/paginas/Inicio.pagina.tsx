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
  const { respuestaPersonajes, urlPrincipal } = useAppSelector(
    (state) => state.characters
  );
  const [name, buscarNombre] = useState<string | null>("");
  const limpiarFiltro = () => {
    buscarNombre(null);
  };
  useEffect(() => {
    dispatch(OBTENER_PERSONAJE(urlPrincipal));
  }, []);

  return (
    <div className="container">
      <div className="actions">
        <h3>Catálogo de Personajes</h3>
        <button onClick={limpiarFiltro} className="danger">
          Limpiar Filtro
        </button>
      </div>
      <Filtros
        name={name}
        buscarNombre={buscarNombre}
        urlPrincipal={urlPrincipal}
      />
      <Paginacion />
      <GrillaPersonajes respuestaPersonajes={respuestaPersonajes} />
      <Paginacion />
    </div>
  );
};

export default PaginaInicio;
