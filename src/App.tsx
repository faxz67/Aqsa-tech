import { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import SEOHead from './components/SEOHead';
import StructuredData from './components/StructuredData';
import FloatingContactButtons from './components/FloatingContactButtons';

const SubheroSection = lazy(() => import('./components/SubheroSection'));
const DiscoverPopularServices = lazy(() => import('./components/DiscoverPopularServices'));
const ExploreOurServices = lazy(() => import('./components/ExploreOurServices'));
const StepByStepGuide = lazy(() => import('./components/StepByStepGuide'));
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const GetInTouch = lazy(() => import('./components/GetInTouch'));
const Footer = lazy(() => import('./components/Footer'));
const AdminLogin = lazy(() => import('./components/AdminLogin'));
const AllServices = lazy(() => import('./pages/AllServices'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));

// Smooth loading component
const SmoothLoader = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="flex items-center justify-center min-h-[200px]"
  >
    <div className="relative w-16 h-16">
      <motion.div
        className="absolute inset-0 border-4 border-brand-blue/20 rounded-full"
        animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-0 border-4 border-brand-blue border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  </motion.div>
);

// Scroll to top on route change - Optimized with requestAnimationFrame
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use requestAnimationFrame for smoother scroll
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }, [pathname]);

  return null;
}

function HomePage() {
  return (
    <>
      <SEOHead
        title="Aqsa Tech UAE | #1 Home Maintenance, AC Service, Renovation & Handyman Services in Dubai, Abu Dhabi, Sharjah"
        description="Aqsa Tech - UAE's most trusted technical services company. Expert AC repair, plumbing, electrical, painting, tiling, renovation & handyman services across Dubai, Abu Dhabi, Sharjah. 10,000+ satisfied customers. Same-day service. Free quotes. Call +971 52 501 0132"
        keywords="Aqsa Tech, technical services UAE, home maintenance Dubai, AC service UAE, renovation Dubai, handyman UAE, fit out UAE, villa renovation UAE, apartment renovation UAE, AC repair Dubai, plumbing services Dubai, electrical services UAE, painting contractors Dubai, tiling services Dubai, carpentry Dubai, HVAC Dubai, building maintenance UAE, property maintenance Dubai, office fit out Dubai, kitchen renovation UAE, AC installation Dubai, AC maintenance UAE, emergency plumber Dubai, 24/7 handyman services, same day AC repair"
      />
      <StructuredData type="Organization" />
      <StructuredData type="LocalBusiness" />
      <div id="hero" className="section-fade">
        <Hero />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Suspense fallback={<SmoothLoader />}>
          <SubheroSection />
        </Suspense>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Suspense fallback={<SmoothLoader />}>
          <About />
        </Suspense>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Suspense fallback={<SmoothLoader />}>
          <DiscoverPopularServices />
        </Suspense>
      </motion.div>
      <div id="services">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Suspense fallback={<SmoothLoader />}>
            <ExploreOurServices />
          </Suspense>
        </motion.div>
      </div>
      <div id="how-it-works">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Suspense fallback={<SmoothLoader />}>
            <StepByStepGuide />
          </Suspense>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Suspense fallback={<SmoothLoader />}>
          <Services />
        </Suspense>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Suspense fallback={<SmoothLoader />}>
          <Projects />
        </Suspense>
      </motion.div>
      <div id="our-app">
        {/* Our App section - can be added here */}
      </div>
      <div id="contact">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Suspense fallback={<SmoothLoader />}>
            <Contact />
          </Suspense>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Suspense fallback={<SmoothLoader />}>
          <GetInTouch />
        </Suspense>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Suspense fallback={<SmoothLoader />}>
          <Footer />
        </Suspense>
      </motion.div>
    </>
  );
}

function App() {
  const [showAdminLogin, setShowAdminLogin] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white smooth-scroll">
        {showAdminLogin ? (
          <AdminLogin onClose={() => setShowAdminLogin(false)} />
        ) : (
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Navbar />
                  <HomePage />
                </motion.div>
              } />
              <Route path="/services" element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <SEOHead
                    title="All Technical Services UAE | Complete Home Maintenance, AC Service & Renovation | Aqsa Tech"
                    description="Browse all technical services by Aqsa Tech in Dubai, Abu Dhabi, Sharjah: AC installation, AC maintenance, home maintenance, renovation, handyman, plumbing, electrical, painting, tiling, carpentry, MEP, office fit out. Same-day service. Free quotes. Call +971 52 501 0132"
                    keywords="technical services UAE, all services Dubai, home maintenance services, AC service UAE, renovation services Dubai, handyman services UAE, plumbing Dubai, electrical services, painting contractors, tiling services, carpentry UAE, office fit out, villa renovation, apartment renovation, kitchen renovation, AC installation, AC repair, property maintenance UAE"
                  />
                  <StructuredData type="Service" data={{
                    serviceType: 'Technical Services UAE',
                    name: 'Complete Technical & Home Maintenance Services',
                    description: 'Comprehensive technical services, home maintenance, AC service, renovation, and handyman solutions across UAE',
                  }} />
                  <Navbar />
                  <Suspense fallback={<SmoothLoader />}><AllServices /></Suspense>
                  <Suspense fallback={<SmoothLoader />}><Footer /></Suspense>
                </motion.div>
              } />
              <Route path="/services/:slug" element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Navbar />
                  <Suspense fallback={<SmoothLoader />}><ServiceDetail /></Suspense>
                  <Suspense fallback={<SmoothLoader />}><Footer /></Suspense>
                </motion.div>
              } />
              <Route path="/blog" element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <SEOHead
                    title="Blog | Aqsa Tech - Property Maintenance Tips & Insights Dubai"
                    description="Expert property maintenance tips, renovation guides, and industry insights from Aqsa Tech Dubai. Learn about AC maintenance, plumbing, electrical, painting, and more."
                    keywords="property maintenance blog Dubai, renovation tips Dubai, AC maintenance tips, plumbing guides Dubai, electrical safety Dubai, home improvement Dubai, property care Dubai"
                  />
                  <Navbar />
                  <Suspense fallback={<SmoothLoader />}><Blog /></Suspense>
                  <Suspense fallback={<SmoothLoader />}><Footer /></Suspense>
                </motion.div>
              } />
              <Route path="/blog/:slug" element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Navbar />
                  <Suspense fallback={<SmoothLoader />}><BlogDetail /></Suspense>
                  <Suspense fallback={<SmoothLoader />}><Footer /></Suspense>
                </motion.div>
              } />
              <Route path="/privacy-policy" element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Navbar />
                  <Suspense fallback={<SmoothLoader />}><PrivacyPolicy /></Suspense>
                  <Suspense fallback={<SmoothLoader />}><Footer /></Suspense>
                </motion.div>
              } />
              <Route path="/terms-of-service" element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Navbar />
                  <Suspense fallback={<SmoothLoader />}><TermsOfService /></Suspense>
                  <Suspense fallback={<SmoothLoader />}><Footer /></Suspense>
                </motion.div>
              } />
            </Routes>
          </AnimatePresence>
        )}
        {/* Floating WhatsApp & Call buttons (visible on all pages except admin) */}
        {!showAdminLogin && <FloatingContactButtons />}
      </div>
    </Router>
  );
}

export default App;
