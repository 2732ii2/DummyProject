import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Dashoard from './Dashoard';
import Profile from './Profile';
function App() {
  return (
    <div className="App">
      Main Page

      
      <Routes>
        <Route path="/dashboard" element={<Dashoard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
