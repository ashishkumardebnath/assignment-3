import Aos from "aos";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import TaskBoard from "./components/TaskBoard/TaskBoard";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  });
  return (
    <>
      <NavBar />
      <div className="container mx-auto">
        <Hero />
        <TaskBoard />
      </div>
      <Footer />
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
