import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Doctors from './pages/Doctors';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import PatientPortal from './pages/PatientPortal';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Pages wrapped in MainLayout */}
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/about" element={<MainLayout><About /></MainLayout>} />
        <Route path="/services" element={<MainLayout><Services /></MainLayout>} />
        <Route path="/doctors" element={<MainLayout><Doctors /></MainLayout>} />
        <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
        <Route path="/booking" element={<MainLayout><Booking /></MainLayout>} />
        
        {/* Patient Portal (Standalone Layout) */}
        <Route path="/portal" element={<PatientPortal />} />
      </Routes>
    </Router>
  );
}

export default App;
