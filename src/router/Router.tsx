import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import Planets from "../pages/Planets";
import BeerForm from "../pages/BeerForm";
import BeersList from "../pages/BeersList";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/beers/create" element={<BeerForm />} />
        <Route path="/beers" element={<BeersList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
