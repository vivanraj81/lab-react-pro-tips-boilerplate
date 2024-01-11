import Navbar from "./components/Navbar";
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import RegistrationForm from "./components/RegistrationForm";
import Contacts from "./components/Contacts";

import "./App.css";

function App() {
  return (
    <Router><></>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;