import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import BookAppointment from "./BookAppointment";
import DoctorDetails from "./DoctorDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FullBodyCheckup from "./FullBodyCheckup";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/full-body-checkup" element={<FullBodyCheckup />} />
          <Route path="/doctor/:id" element={<DoctorDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

