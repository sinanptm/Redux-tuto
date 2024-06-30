import React, { lazy } from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { store } from "./app/store.js";
import App from "./App.jsx";
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { LazyMotion, domAnimation} from "framer-motion";
import AnimatedSuspense from "./assets/AnimatedSuspense.jsx";

const Todos = lazy(() => import("./components/Todos"));
const Notes = lazy(() => import("./components/Notes"));


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/notes" element={<AnimatedSuspense children={<Notes/>} />}/>
      <Route path="/todo" element={<AnimatedSuspense children={<Todos/>} />}/>
      <Route path="/" element={<AnimatedSuspense children={<Todos/>} />}/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <LazyMotion features={domAnimation}>
        <RouterProvider router={router} />
      </LazyMotion>
    </Provider>
  </React.StrictMode>
);
