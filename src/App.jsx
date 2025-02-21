import Login from "./components/Login";
import Loggin from "./components/Loggin";
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Dashboard from "./components/Dashboard";

export default function App() {
  
  return(
    <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/Login"/>}/>
          <Route path="/Login" element={<Login />} />
          <Route path="/Loggin" element={<Loggin/>}/>
          <Route path="/Dashboard" element={<Dashboard/>}/>
        </Routes>
    </Router>
  )
}