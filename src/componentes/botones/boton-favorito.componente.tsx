import { ICharacter } from "../../interface/character.interface";
import { useAppDispatch } from "../../store";
import { ADD_FAVORITOS } from "../../store/character/slice";
import "./boton-favorito.css";
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 *
 * Deberás tipar las propiedades si usas este componente
 *
 *
 * @returns un JSX element
 */
const BotonFavorito = ({ esFavorito, id, name, image }: ICharacter) => {
  const dispatch = useAppDispatch();

  const addFavorito = () => {
    dispatch(ADD_FAVORITOS({ esFavorito, id, name, image }));
  };
  const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png";
  return (
    <div className="boton-favorito">
      <img src={src} alt={"favorito"} onClick={addFavorito} />
    </div>
  );
};

export default BotonFavorito;
