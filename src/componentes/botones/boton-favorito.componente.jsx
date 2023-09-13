import { useState } from "react";
import "./boton-favorito.css";
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 *
 * Deberás tipar las propiedades si usas este componente
 *
 *
 * @returns un JSX element
 */
const BotonFavorito = (props) => {
  const { esFavorito, onClick } = props;
  const [favorito, setFavorito] = useState(esFavorito);
  const src = favorito ? "/imagenes/star-filled.png" : "/imagenes/star.png";
  const agregarFavorito = (personaje) => {
    setFavorito(!favorito);
    const listaFavoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    if (!favorito) {
      personaje.esFavorito = true;
      const yaExiste = listaFavoritos.filter(
        (item) => item.id === personaje.id
      );
      if (!yaExiste.length) {
        listaFavoritos.push(personaje);
        localStorage.setItem("favoritos", JSON.stringify(listaFavoritos));
      }
    } else {
      const eliminarFavorito = listaFavoritos.filter(
        (item) => item.id !== personaje.id
      );
      personaje.esFavorito = false;
      localStorage.setItem("favoritos", JSON.stringify(eliminarFavorito));
      props.recargarComponente(true);
    }
  };
  return (
    <div className="boton-favorito" onClick={() => agregarFavorito(onClick)}>
      <img src={src} alt={"favorito"} />
    </div>
  );
};

export default BotonFavorito;
