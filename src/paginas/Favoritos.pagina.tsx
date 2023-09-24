import { useEffect } from "react";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { useAppDispatch, useAppSelector } from "../store";
import { LIMPIAR_FAVORITOS } from "../store/slice";
import { OBTENER_PERSONAJE } from "../store/thunk";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 *
 * Uso:
 * ``` <PaginaFavoritos /> ```
 *
 * @returns la pagina de favoritos
 */
const PaginaFavoritos = () => {
  const dispatch = useAppDispatch();
  const { listFavoritos, urlBase } = useAppSelector(
    (state) => state.characters
  );

  const borrarFavorito = () => {
    dispatch(LIMPIAR_FAVORITOS());
  };
  useEffect(() => {
    dispatch(OBTENER_PERSONAJE(urlBase));
  }, []);

  return (
    <div className="container">
      <div className="actions">
        <h3>Personajes Favoritos</h3>
        <button onClick={borrarFavorito} className="danger">
          Limpiar Favoritos
        </button>
      </div>
      <GrillaPersonajes initialCharacters={listFavoritos} />
    </div>
  );
};

export default PaginaFavoritos;
