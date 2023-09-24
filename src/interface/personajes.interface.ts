import { Personaje } from "./character.interface";

export interface GrillaPersonaje {
  initialCharacters: Personaje[];
}

export interface Filtro {
  name: string | null;
  setName: (name: string | null) => void;
  urlBase: string;
}
