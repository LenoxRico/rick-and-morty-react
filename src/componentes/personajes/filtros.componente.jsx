import { useState } from "react";
import "./filtros.css";

const Filtros = (props) => {
  const [message, setMessage] = useState("");
  const handleChange = (event) => {
    setMessage(event.target.value);
    props.handleCallback(message);
  };
  return (
    <div className="filtros">
      <label htmlFor="nombre">Filtrar por nombre:</label>
      <input
        value={message}
        onChange={handleChange}
        type="text"
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="nombre"
      />
    </div>
  );
};

export default Filtros;
