import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { store } from "./app/store.js";
import App from "./App.jsx";
import './styles/index.css'
import Todos from "./components/Todos";
import Notes from "./components/Notes";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/notes" element={<Notes/>}/>
      <Route path="/todos" element={<Todos/>}/>
      <Route path="/" element={<Todos/>}/>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
