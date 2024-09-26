import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/shared/header/Header";
import Footer from "./components/shared/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
