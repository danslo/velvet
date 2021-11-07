import React, { useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';

const App: React.FC = () => {
  const [token, setToken] = useState<string>();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="wrapper">
      <h1>Velvet</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
