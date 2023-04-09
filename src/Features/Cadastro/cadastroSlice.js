import { createSlice } from "@reduxjs/toolkit";

export const cadastroSlice = createSlice({
  name: 'cadastro',
  initialState: {
    objetivo: 'A',
    informacoes: {},
    endereco: {}
  },
  reducers: {
    setObjetivo(state, action) {
      state.objetivo = action.payload;
    },
    setInformacoes(state, action) {
      state.informacoes = action.payload;
    },
    setEnderecoUsuario(state, action) {
      state.endereco = action.payload;
    }
  },
});

export const {
  setObjetivo,
  setInformacoes,
  setEnderecoUsuario
} = cadastroSlice.actions;

export default cadastroSlice.reducer;
