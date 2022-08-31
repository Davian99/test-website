import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Products from './pages/Products'

const App = () => {
  return (
    <div>
      <Header/>
      <BrowserRouter>
        <Navbar/>
        <div>
          <Routes>
            <Route path='/' exact element={<Home/>} />
            <Route path='/products' element={<Products/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;