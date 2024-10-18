import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";

import middleware from "./middleware";

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

export default store;
