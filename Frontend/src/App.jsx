import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/shared/header/Header";
import Footer from "./components/shared/footer/Footer";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
