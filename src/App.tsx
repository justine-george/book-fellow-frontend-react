import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "@/components/page/LoginPage";
import LandingPage from "@/components/page/LandingPage";
import LoggedInHomepage from "@/components/page/LoggedInHomepage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<LoggedInHomepage />} />
      </Routes>
    </div>
  );
}

export default App;
