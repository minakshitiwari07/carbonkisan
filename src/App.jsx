import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import Result from "./pages/Result.jsx";
import Farm from "./pages/Farm.jsx";
import Crops from "./pages/Crops.jsx";
import Practices from "./pages/Practices.jsx";
import Inputs from "./pages/Inputs.jsx";
import Documents from "./pages/Documents.jsx";
import Review from "./pages/Review.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Admin from "./pages/Admin.jsx";
import Login from "./pages/Login.jsx";
import How from "./pages/How.jsx";
import About from "./pages/About.jsx";

// Remaining pages (Farm, Crops, Practices, Inputs, Documents, Review, Dashboard, Admin) plug in here.
export default function App() {
  return (<>
    <Navbar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/result" element={<Result />} />
        <Route path="/farm" element={<Farm />} />
        <Route path="/crops" element={<Crops />} />
        <Route path="/practices" element={<Practices />} />
        <Route path="/inputs" element={<Inputs />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/review" element={<Review />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/how" element={<How />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </main>
    <Footer />
  </>);
}
