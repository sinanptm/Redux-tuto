import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import CustomizedSwitches from '../assets/switchButton.jsx';

const Header = ({ setTheme, theme }) => {
  const location = useLocation();

  const isActive = (routes) => {
    return routes.includes(location.pathname) ? (theme === 'dark' ? 'text-black text-lg' : 'text-slate-950 text-lg') : '';
  };


  const handleThemeChange = () => {
    setTheme({ theme: theme === 'dark' ? 'light' : 'dark' });
  };

  return (
    <header className={`${theme === 'dark' ? 'text-gold' : 'text-white'} bg-cyan-600 py-4`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className={`text-2xl font-bold ${theme === 'dark' ? 'text-gold-light' : 'text-white'}`}>TODO MAKER<NavLink to={'/'}></NavLink> </div>
          <nav className="flex items-center space-x-4">
            <NavLink
              to={location.pathname==='/'?'/':'/todo'}
              className={`transition duration-300 ease-in-out font-bold ${theme === 'dark' ? 'hover:text-blue-light' : 'hover:text-sky-950'} ${isActive(['/todo', '/'])}`}
            >
              Todo
            </NavLink>
            <NavLink
              to="/notes"
              className={`transition duration-300 ease-in-out font-bold ${theme === 'dark' ? 'hover:text-blue-light' : 'hover:text-sky-950'} ${isActive(['/notes'])}`}
            >
              Notes
            </NavLink>
            <CustomizedSwitches setTheme={handleThemeChange} theme={theme} />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
