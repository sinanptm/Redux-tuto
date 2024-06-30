import React, { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import { setTheme } from "./slices/themeSlice";

const App = () => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();
  const app = useRef(null);

  useEffect(() => {
    if (theme === 'dark') {
      app.current.classList.add('dark');
      app.current.classList.remove('light');
    } else {
      app.current.classList.add('light');
      app.current.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className={`App ${theme === 'dark' ? 'bg-black text-gold' : 'bg-white text-dark'}`} ref={app}>
      <Header setTheme={(theme) => dispatch(setTheme(theme))} theme={theme} />
      <Outlet />
    </div>
  );
};

export default App;
