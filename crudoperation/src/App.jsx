import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Signup from './components/Signup';
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path='' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        </Routes>
      </Router>
    </>
  )
}
export default App;
