import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import News from './components/News/News';
import Products from './components/Products/Products';
import NewsDetails from './components/News/NewsDetails/NewsDetails';
import ProductDetails from './components/Products/ProductDetails/ProductDetails';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import CategoryHerbalism from './components/Products/Category/CategoryHerbalism';

function App() {
  return (
    <div className="App">
      <Router>
            <Routes>
              <Route path="/" exact element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/products" element={<Products/> } />
              <Route path="/productsdetails" element={<ProductDetails/> } />
              <Route path="/news" element={<News/>} />
              <Route path="/newsdetails" element={<NewsDetails/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/category" element={<CategoryHerbalism/>}/>
            </Routes>
          <Footer/>
       </Router>
    </div>
  );
}

export default App;
// rsf