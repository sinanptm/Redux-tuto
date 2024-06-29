import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const isActive = (routes)=>{
    
    return routes.includes(location.pathname)?'text-slate-950 text-lg':''
  }

  return (
    <header className="bg-sky-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">Note Taker</div>
          <nav className="space-x-4">
            <NavLink
              to="/notes"
              className={`transition duration-300 ease-in-out hover:text-sky-950 ${isActive(['/notes'])}`}
              >
              Notes
            </NavLink>
            <NavLink
              to="/todo"
              className={`transition duration-300 ease-in-out hover:text-sky-950 ${isActive(['/todo','/'])}`}
            >
              Todo
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
