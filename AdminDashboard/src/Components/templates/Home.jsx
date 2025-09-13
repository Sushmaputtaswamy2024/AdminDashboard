import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cards from '../molecules/Cards';
import LoginWrapper from '../organisms/LoginWrapper'; 

const Home = () => {
  const [loginStatus, setLoginStatus] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginWrapper setLoginStatus={setLoginStatus} />} />
        <Route
          path="/cards"
          element={loginStatus ? <Cards /> : <div>Access Denied</div>}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Home;
