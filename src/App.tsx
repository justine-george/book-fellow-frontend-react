import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import LandingPage from "@/components/page/LandingPage";
import LoginPage from "@/components/page/LoginPage";
import RegisterPage from "@/components/page/RegisterPage";
import LoggedInHomepage from "@/components/page/LoggedInHomepage";

function App() {
  const isAuthenticated = useSelector((state: RootState) => !!state.auth.token);

  return (
    <Routes>
      <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <LandingPage />} />
      <Route path="/login" element={isAuthenticated ? <Navigate to="/home" /> : <LoginPage />} />
      <Route path="/register" element={isAuthenticated ? <Navigate to="/home" /> : <RegisterPage />} />
      <Route path="/home" element={isAuthenticated ? <LoggedInHomepage /> : <Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
