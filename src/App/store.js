import { configureStore } from "@reduxjs/toolkit";

import cadastroSlice from "Features/Cadastro/cadastroSlice";

export default configureStore({
  reducer: {
    cadastro: cadastroSlice,
  }
});
