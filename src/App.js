import Home from "./home";
import Login from "./login";
import Signup from "./signup";
import BookAppointment from "./bookappointment";
import DoctorDetails from "./doctordetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FullBodyCheckup from "./fullbodycheckup";

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

