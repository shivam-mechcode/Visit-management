import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeModal from "./components/HomeModal";
import InfoPage from "./components/InfoPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/aravind" element={<HomeModal />} />
        <Route exact path="/infopage" element={<InfoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
