import { Calendar } from "react-big-calendar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../dashboard/EventDash";
import ActivityRegistration from "../activityreg/ActivityRegistration";
import Modal from "../modal/Modal";
// import ErrorPage from "./ErrorPage";
import LandingPage from "../landing/LandingPage";
import AppHeader from "../appheader/AppHeader";
import "../appheader/AppHeader.css";

function App() {
  return (
    // <React.StrictMode>
      <Router>
        <nav>
          <AppHeader />
        </nav>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Home />} />
          <Route
            path="/ActivityRegistration"
            element={<ActivityRegistration />}
          />
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </Router>
    // </React.StrictMode>
  );
}

export default App;
