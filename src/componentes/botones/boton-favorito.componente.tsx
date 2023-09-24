import { Personaje } from "../../interface/character.interface";
import { useAppDispatch } from "../../store";
import { AGREGAR_FAVORITO } from "../../store/slice";
import "./boton-favorito.css";
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 *
 * Deberás tipar las propiedades si usas este componente
 *
 *
 * @returns un JSX element
 */
const BotonFavorito = ({ esFavorito, id, name, image }: Personaje) => {
  const dispatch = useAppDispatch();

  const addFavorito = () => {
    dispatch(AGREGAR_FAVORITO({ esFavorito, id, name, image }));
  };
  const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png";
  return (
    <div className="boton-favorito">
      <img src={src} alt={"favorito"} onClick={addFavorito} />
    </div>
  );
};

export default BotonFavorito;
