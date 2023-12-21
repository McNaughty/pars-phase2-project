import { Calendar } from "react-big-calendar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../dashboard/CalendarDash";
import ParticipantRegistration from "../participantreg/ParticipantRegistration";
import Modal from "../modal/Modal";
// import ErrorPage from "./ErrorPage";
import LandingPage from "../landing/LandingPage";
import AppHeader from "../appheader/AppHeader";
// import "../appheader/AppHeader.css";
import Register from "../EventScheduling/Register";
import CalendarDash from "../dashboard/CalendarDash";

function App() {
  return (
    // <React.StrictMode>
    
      <Router>
        <div className="App">
          <AppHeader />
        
        {/* <nav>
          <AppHeader />
        </nav> */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Home />} />
          <Route
            path="/ParticipantRegistration"
            element={<ParticipantRegistration />}
          />
          <Route path="/eventschedule" element={<Register />} />
          <Route path="/calendar" element={<CalendarDash />} />
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
        </div>
      </Router>
    // </React.StrictMode>
  );
}

export default App;
