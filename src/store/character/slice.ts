import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  IAllCharacters,
  ICharacter,
} from "../../interface/character.interface";
import { GET_CHARACTERS, GET_CHARACTERS_FILTER } from "./thunk";

export type CharacterState = {
  urlBase: string;
  allCharacters: ICharacter[];
  isLoading: boolean;
  isError: string | null;
  nextPage: string;
  prevPage: string;
  listFavoritos: ICharacter[];
};

const initialState: CharacterState = {
  urlBase: "https://rickandmortyapi.com/api/character/",
  allCharacters: [],
  isLoading: true,
  isError: null,
  prevPage: "",
  nextPage: "",
  listFavoritos: [],
};

export const charactersSlice = createSlice({
  name: "character",
  initialState: initialState,
  reducers: {
    ADD_FAVORITOS: (state, action: PayloadAction<ICharacter>) => {
      const personaje = action.payload;
      const esFavorito = state.listFavoritos.find(
        (fav) => fav.id === personaje.id
      );
      if (esFavorito) {
        esFavorito.esFavorito = false;
        state.listFavoritos = state.listFavoritos.filter(
          (item) => item.id !== esFavorito.id
        );
      } else {
        personaje.esFavorito = true;
        state.listFavoritos.push(personaje);
      }
    },
    CLEAN_ALL_FAVORITOS: (state) => {
      state.listFavoritos = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GET_CHARACTERS.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(
      GET_CHARACTERS.fulfilled,
      (state, action: PayloadAction<IAllCharacters>) => {
        state.allCharacters = action.payload.allCharacters;
        state.prevPage = action.payload.prevPage;
        state.nextPage = action.payload.nextPage;
        state.isLoading = false;
      }
    );

    builder.addCase(GET_CHARACTERS.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message ?? "Ha ocurrido un error";
    });
    builder.addCase(GET_CHARACTERS_FILTER.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(
      GET_CHARACTERS_FILTER.fulfilled,
      (state, action: PayloadAction<IAllCharacters>) => {
        state.allCharacters = action.payload.allCharacters;
        state.prevPage = action.payload.prevPage;
        state.nextPage = action.payload.nextPage;
        state.isLoading = false;
      }
    );

    builder.addCase(GET_CHARACTERS_FILTER.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message ?? "Ha ocurrido un error";
    });
  },
});

const characterReducer = charactersSlice.reducer;
export const { ADD_FAVORITOS, CLEAN_ALL_FAVORITOS } = charactersSlice.actions;
export default characterReducer;
