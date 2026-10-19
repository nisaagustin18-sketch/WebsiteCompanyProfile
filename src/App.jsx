import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tentang" element={<About />} />
          <Route path="/layanan" element={<Services />} />
          <Route path="/portofolio" element={<Portfolio />} />
          <Route path="/kontak" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}