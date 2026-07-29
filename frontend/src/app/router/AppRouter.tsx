import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../../features/auth/pages/LoginPage';
import { VolunteerWorkspacePage } from '../../features/volunteer/pages/VolunteerWorkspacePage';
import { AdminDashboardPage } from '../../features/admin/pages/AdminDashboardPage';

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/volunteer" element={<VolunteerWorkspacePage />} />
      <Route path="/admin" element={<AdminDashboardPage />} />
    </Routes>
  );
}
