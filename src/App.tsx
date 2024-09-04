import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "@/components/page/LandingPage";
import LoginPage from "@/components/page/LoginPage";
import RegisterPage from "@/components/page/RegisterPage";
import LoggedInHomepage from "@/components/page/LoggedInHomepage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/home" element={<LoggedInHomepage />} />
      {/* Add other routes as needed */}
    </Routes>
  );
}

export default App;
