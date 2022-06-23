import './App.css';
import Footer from './Components/footer';
import Blog from './Pages/Blog';
import Header from './Components/header';
import About from './Pages/About';
import Loading from './Pages/Loading';
import Work from './Pages/Work';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from './Pages/Contact';
import BlogPost from './Pages/BlogPost';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Work />} exact />
          <Route path='/thoughts' element={<Blog />} />
          <Route path='/loading' element={<Loading />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/thoughts/:blog_slug' element={<BlogPost />} />
        </Routes>
        <TawkMessengerReact
          propertyId="62b450c2b0d10b6f3e78ef94"
          widgetId="1g685musc" />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
