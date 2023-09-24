import { useEffect, useRef } from "react";
import { useAppDispatch } from "../../store";
import { OBTENER_PERSONAJE, OBTENER_PERSONAJE_NOMBRE } from "../../store/thunk";
import "./filtros.css";
import { Filtro } from "../../interface/personajes.interface";

const Filtros = ({ name, buscarNombre, urlPrincipal }: Filtro) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();

  const deleteFilter = () => {
    if (!ref.current) return;
    ref.current.value = "";
    dispatch(OBTENER_PERSONAJE(urlPrincipal));
  };

  const filterByName = () => {
    if (!ref.current) return;
    buscarNombre(ref.current.value);
    if (name?.trim === null) {
      ref.current.value = "";
      return;
    }
    dispatch(OBTENER_PERSONAJE_NOMBRE({ name }));
  };

  useEffect(() => {
    if (name === null) {
      deleteFilter();
    }
  }, [name]);

  return (
    <div className="filtros">
      <label htmlFor="nombre">Filtrar por nombre:</label>
      <input
        type="text"
        ref={ref}
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="nombre"
        onChange={filterByName}
      />
    </div>
  );
};

export default Filtros;
