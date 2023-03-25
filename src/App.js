import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Kulüpler from './components/Kulüpler/Kulüpler'
import Hero from './components/Hero';
function App() {
  return (
    <div className="">
           <BrowserRouter>
           <Header/>
        <Routes>
        <Route path="/" element={<Hero/>} />
          <Route path="/kulupler" element={<Kulüpler/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
