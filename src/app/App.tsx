import { Routes, Route, Navigate } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import Home from "@/pages/Home/Home";
import About from "@/pages/About/About";
import ServicesPage from "@/pages/Services/Services";
import Portfolio from "@/pages/Portfolio/Portfolio"; // Internal component import remains unchanged
import Contact from "@/pages/Contact/Contact";
import NotFound from "@/pages/NotFound/NotFound";
import Privacy from "@/pages/Privacy/Privacy";
import Terms from "@/pages/Terms/Terms";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />

        <Route path="/projects" element={<Portfolio />} />
        <Route path="/projects/:id" element={<Portfolio />} />

        <Route
          path="/portfolio"
          element={<Navigate to="/projects" replace />}
        />
        <Route
          path="/portfolio/:id"
          element={<Navigate to="/projects" replace />}
        />
        <Route path="/gallery" element={<Navigate to="/projects" replace />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
