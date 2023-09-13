import Filtros from "../componentes/personajes/filtros.componente";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import Paginacion from "../componentes/paginacion/paginacion.componente";
import React, { useState, useEffect } from "react";

/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 *
 * Uso:
 * ``` <PaginaInicio /> ```
 *
 * @returns la pagina de inicio
 */
const PaginaInicio = () => {
  const [personajes, setPersonajes] = useState({ info: "", results: [] });
  const [dataFiltrada, setDataFiltrada] = useState([]);
  useEffect(() => {
    peticionBack("https://rickandmortyapi.com/api/character/?count=9&pages=1");
  }, []);
  const peticionBack = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPersonajes(data);
        const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
        const revisarDatos = data.results.map((item) => {
          favoritos.map((favorito) => {
            if (item.id === favorito.id) {
              item.esFavorito = favorito.esFavorito;
            }
            return favorito;
          });
          return item;
        });
        setDataFiltrada(revisarDatos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const cambiarPagina = (url) => {
    peticionBack(url);
  };
  const handleCallback = (event) => {
    const data = personajes.results.filter((personaje) =>
      personaje.name.toLowerCase().includes(event.toLowerCase())
    );
    setDataFiltrada(data);
  };

  const recargarComponente = (event) => {
    if (event) {
      console.log("recargar");
    }
  };

  return (
    <div className="container">
      <div className="actions">
        <h3>Catálogo de Personajes</h3>
        <button className="danger">Test Button</button>
      </div>
      <Filtros handleCallback={handleCallback} />
      <Paginacion pagina={personajes} cambiarPagina={cambiarPagina} />
      <GrillaPersonajes
        personajes={dataFiltrada}
        recargarComponente={recargarComponente}
      />
      <Paginacion pagina={personajes} cambiarPagina={cambiarPagina} />
    </div>
  );
};

export default PaginaInicio;
