export interface Personaje {
  id: number;
  name: string;
  image: string;
  esFavorito: boolean;
}

export interface RespuestaPersonajes {
  respuestaPersonajes: Personaje[];
  nextPage: string;
  prevPage: string;
}

export interface StatePersonaje {
  urlPrincipal: string;
  respuestaPersonajes: Personaje[];
  isLoading: boolean;
  isError: string | null;
  nextPage: string;
  prevPage: string;
  listaFavoritos: Personaje[];
}

export const initialState: StatePersonaje = {
  urlPrincipal: "https://rickandmortyapi.com/api/character/",
  respuestaPersonajes: [],
  isLoading: true,
  isError: null,
  prevPage: "",
  nextPage: "",
  listaFavoritos: [],
};
