import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from "./config/Routes";

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <h1>Velvet</h1>
      <BrowserRouter>
        <Routes>
            {routes.map((route) => (<Route path={route.path} key={route.path} element={route.component({})} />))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
