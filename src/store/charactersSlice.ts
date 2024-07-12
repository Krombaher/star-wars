import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StarWarsCharacter } from '../api/starWarsApiTypes';
import { extractId } from '../utils/extractId';

export interface CharactersState {
  [id: string]: StarWarsCharacter;
}

const initialState: CharactersState = {};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    updateCharacter: (state, action: PayloadAction<StarWarsCharacter>) => {
      const { url } = action.payload;
      const id = extractId(url);
      if (id) {
        state[id] = action.payload;
      }
    },
  },
});

export const { updateCharacter } = charactersSlice.actions;
export default charactersSlice.reducer;
