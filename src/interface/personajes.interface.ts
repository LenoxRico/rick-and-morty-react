import { Personaje } from "./character.interface";

export interface GrillaPersonaje {
  respuestaPersonajes: Personaje[];
}

export interface Filtro {
  name: string | null;
  buscarNombre: (name: string | null) => void;
  urlPrincipal: string;
}
