import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  Personaje,
  RespuestaPersonajes,
  initialState,
} from "../interface/character.interface";
import { OBTENER_PERSONAJE, OBTENER_PERSONAJE_NOMBRE } from "./thunk";

export const personajeSlice = createSlice({
  name: "character",
  initialState: initialState,
  reducers: {
    AGREGAR_FAVORITO: (state, action: PayloadAction<Personaje>) => {
      const personaje = action.payload;
      const esFavorito = state.listaFavoritos.find(
        (fav) => fav.id === personaje.id
      );
      if (esFavorito) {
        esFavorito.esFavorito = false;
        state.listaFavoritos = state.listaFavoritos.filter(
          (item) => item.id !== esFavorito.id
        );
      } else {
        personaje.esFavorito = true;
        state.listaFavoritos.push(personaje);
      }
    },
    LIMPIAR_FAVORITOS: (state) => {
      state.listaFavoritos = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(OBTENER_PERSONAJE.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      OBTENER_PERSONAJE.fulfilled,
      (state, action: PayloadAction<RespuestaPersonajes>) => {
        state.respuestaPersonajes = action.payload.respuestaPersonajes;
        state.prevPage = action.payload.prevPage;
        state.nextPage = action.payload.nextPage;
        state.isLoading = false;
      }
    );
    builder.addCase(OBTENER_PERSONAJE.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message ?? "Ha ocurrido un error";
    });
    builder.addCase(OBTENER_PERSONAJE_NOMBRE.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      OBTENER_PERSONAJE_NOMBRE.fulfilled,
      (state, action: PayloadAction<RespuestaPersonajes>) => {
        state.respuestaPersonajes = action.payload.respuestaPersonajes;
        state.prevPage = action.payload.prevPage;
        state.nextPage = action.payload.nextPage;
        state.isLoading = false;
      }
    );
    builder.addCase(OBTENER_PERSONAJE_NOMBRE.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message ?? "Ha ocurrido un error";
    });
  },
});

const personajeReducer = personajeSlice.reducer;
export const { AGREGAR_FAVORITO, LIMPIAR_FAVORITOS } = personajeSlice.actions;
export default personajeReducer;
