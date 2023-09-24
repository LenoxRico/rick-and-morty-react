import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  RespuestaPersonajes,
  Personaje,
} from "../interface/character.interface";

export const OBTENER_PERSONAJE = createAsyncThunk(
  "character/OBTENER_PERSONAJE",
  async (urlBase: string): Promise<RespuestaPersonajes> => {
    try {
      const resp = await fetch(urlBase);
      const data = await resp.json();
      const resultsCharacters = {
        allCharacters: data.results,
        nextPage: data.info.next,
        prevPage: data.info.prev,
      };
      return resultsCharacters;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
);

export const OBTENER_PERSONAJE_NOMBRE = createAsyncThunk(
  "character/OBTENER_PERSONAJE_NOMBRE",
  async ({
    name,
  }: {
    name: string | null | undefined;
  }): Promise<RespuestaPersonajes> => {
    try {
      const resp = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${name}`
      );
      const data = await resp.json();
      const resultsCharacters: RespuestaPersonajes = {
        allCharacters: data.results,
        nextPage: data.info.next,
        prevPage: data.info.prev,
      };
      return resultsCharacters;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
);

export const OBTENER_DETALLE = createAsyncThunk(
  "character/OBTENER_PERSONAJE_ID",
  async (id: number): Promise<Personaje> => {
    const resp = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data = await resp.json();
    return data;
  }
);
