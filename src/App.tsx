import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuthStore } from './lib/store';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import LoginForm from './components/auth/LoginForm';
import SkillAssessment from './components/assessment/SkillAssessment';
import CourseCatalog from './components/learning/CourseCatalog';

import DemoVideo from './components/demo/DemoVideo';
import AIChat from './components/chat/AIChat';
import PersonalizedPaths from './components/learning/PersonalizedPaths';
import ProgressDashboard from './components/dashboard/ProgressDashboard';
import PeerLearning from './components/learning/PeerLearning';
import Certification from './components/certification/Certification';

function App() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Features />
                <Testimonials />
              </>
            }
          />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/demo" element={<DemoVideo />} />
          <Route path="/assessment" element={<SkillAssessment />} />
          <Route path="/courses" element={<CourseCatalog />} />
          <Route path="/learning-path" element={<PersonalizedPaths />} />
          <Route path="/progress" element={<ProgressDashboard />} />
          <Route path="/peer-learning" element={<PeerLearning />} />
          <Route path="/certification" element={<Certification />} />
        </Routes>
        <AIChat />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
