import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './screens/About';
import Home from './screens/Home';

function App() {

  return (
    <>
      <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />}/>
            <Route path="*" element={<div>Not found</div>} />
          </Routes>
        </BrowserRouter>,
      <Footer />
    </>
  );
}

export default App;