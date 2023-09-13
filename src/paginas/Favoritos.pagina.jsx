import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import React, { useState, useEffect } from "react";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 *
 * Uso:
 * ``` <PaginaFavoritos /> ```
 *
 * @returns la pagina de favoritos
 */
const PaginaFavoritos = () => {
  const [listaFavoritos, setListaFavoritos] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favoritos")) || [];
    setListaFavoritos(data);
  }, []);
  const recargarComponente = (event) => {
    if (event) {
      const data = JSON.parse(localStorage.getItem("favoritos")) || [];
      setListaFavoritos(data);
    }
  };

  return (
    <div className="container">
      <div className="actions">
        <h3>Personajes Favoritos</h3>
        <button className="danger">Test Button</button>
      </div>
      <GrillaPersonajes
        personajes={listaFavoritos}
        recargarComponente={recargarComponente}
      />
    </div>
  );
};

export default PaginaFavoritos;
