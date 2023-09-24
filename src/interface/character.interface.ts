export interface Personaje {
  id: number;
  name: string;
  image: string;
  esFavorito: boolean;
}

export interface RespuestaPersonajes {
  allCharacters: Personaje[];
  nextPage: string;
  prevPage: string;
}

export interface StatePersonaje {
  urlBase: string;
  allCharacters: Personaje[];
  isLoading: boolean;
  isError: string | null;
  nextPage: string;
  prevPage: string;
  listFavoritos: Personaje[];
}

export const initialState: StatePersonaje = {
  urlBase: "https://rickandmortyapi.com/api/character/",
  allCharacters: [],
  isLoading: true,
  isError: null,
  prevPage: "",
  nextPage: "",
  listFavoritos: [],
};
