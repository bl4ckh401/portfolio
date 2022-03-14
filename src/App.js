import './App.css';
import Footer from './Components/footer';
import Header from './Components/header';
import About from './Pages/About';
import Loading from './Pages/Loading';
import Work from './Pages/Work';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Work/>}/>
        <Route path='/loading' element={<Loading/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
