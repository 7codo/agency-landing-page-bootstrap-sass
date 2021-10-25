import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Process from "./components/Process";
import Brands from "./components/Brands";
import Work from "./components/Work";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="tophero-section">
        <NavBar />
        <Hero />
      </div>
      <Features />
      <Process />
      <Brands />
      <Work />
      <Footer />
    </>
  );
}

export default App;
