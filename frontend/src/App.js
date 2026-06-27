import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import PortfolioPage from './components/public/PortfolioPage';
import AdminLogin from './components/admin/AdminLogin';
import AdminLayout from './components/admin/AdminLayout';
import ProtectedRoute from './components/admin/ProtectedRoute';
import ManageProfile from './components/admin/ManageProfile';
import ManageSkills from './components/admin/ManageSkills';
import ManageProjects from './components/admin/ManageProjects';
import ManageExperience from './components/admin/ManageExperience';
import ManageCertificates from './components/admin/ManageCertificates';
import ManageAchievements from './components/admin/ManageAchievements';
import ManageEducation from './components/admin/ManageEducation';
import ManageContact from './components/admin/ManageContact';
import ManageAccount from './components/admin/ManageAccount';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public portfolio - the only page visible/linked anywhere */}
          <Route path="/" element={<PortfolioPage />} />

          {/* Hidden admin login - no link to this exists anywhere on the public site.
              Reachable only via Ctrl+Shift+A or 5x click on footer text. */}
          <Route path="/portal-x9k2-secure-access" element={<AdminLogin />} />

          {/* Protected admin dashboard */}
          <Route
            path="/portal-x9k2-secure-access/dashboard"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<ManageProfile />} />
            <Route path="skills" element={<ManageSkills />} />
            <Route path="projects" element={<ManageProjects />} />
            <Route path="experience" element={<ManageExperience />} />
            <Route path="certificates" element={<ManageCertificates />} />
            <Route path="achievements" element={<ManageAchievements />} />
            <Route path="education" element={<ManageEducation />} />
            <Route path="contact" element={<ManageContact />} />
            <Route path="account" element={<ManageAccount />} />
          </Route>

          {/* Catch-all - redirect unknown routes to the public portfolio,
              never reveal that an admin route exists via a 404 hint */}
          <Route path="*" element={<PortfolioPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
