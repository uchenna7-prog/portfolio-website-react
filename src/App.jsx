import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Resume from "./pages/Resume/Resume";
import Projects from "./pages/Projects/Projects";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import LoadingScreen from "./Components/LoadingPage/LoadingPage";

function App() {
  return (
    <LoadingScreen>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
      <Footer />
    </LoadingScreen>
  );
}

export default App;
