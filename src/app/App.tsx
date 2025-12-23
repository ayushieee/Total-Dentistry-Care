import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { CrownsBridgesPage } from './pages/service-details/CrownsBridgesPage';
import { VeneersPage } from './pages/service-details/VeneersPage';
import { ImplantsPage } from './pages/service-details/ImplantsPage';
import { WhiteningPage } from './pages/service-details/WhiteningPage';
import { RootCanalPage } from './pages/service-details/RootCanalPage';
import { DenturesPage } from './pages/service-details/DenturesPage';
import { CleaningPage } from './pages/service-details/CleaningPage';
import { InvisalignPage } from './pages/service-details/InvisalignPage';
import { OralSurgeryPage } from './pages/service-details/OralSurgeryPage';
import { ContactPage } from './pages/ContactPage';
import { InsurancesPage } from './pages/InsurancesPage';
import { FinancingPage } from './pages/FinancingPage';
import { EmergenciesPage } from './pages/EmergenciesPage';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/crowns-bridges" element={<CrownsBridgesPage />} />
            <Route path="/services/veneers" element={<VeneersPage />} />
            <Route path="/services/implants" element={<ImplantsPage />} />
            <Route path="/services/whitening" element={<WhiteningPage />} />
            <Route path="/services/root-canal" element={<RootCanalPage />} />
            <Route path="/services/dentures" element={<DenturesPage />} />
            <Route path="/services/cleaning" element={<CleaningPage />} />
            <Route path="/services/invisalign" element={<InvisalignPage />} />
            <Route path="/services/oral-surgery" element={<OralSurgeryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/insurances" element={<InsurancesPage />} />
            <Route path="/financing" element={<FinancingPage />} />
            <Route path="/emergencies" element={<EmergenciesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}