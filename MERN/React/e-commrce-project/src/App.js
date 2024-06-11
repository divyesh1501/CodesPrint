import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'
import Home from './UI/pages/home/Home';
import Order from './UI/pages/order/Order';
import Cart from './UI/pages/cart/Cart';
import Allproducts from './UI/pages/allproducts/Allproducts';
import Nopage from './UI/pages/nopage/Nopage';
import Dashboard from './UI/pages/admin/dashboard/Dashboard';
import MyState from './UI/context/data/myState';

function App() {
  return (
    <>
      <MyState>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/order' element={<Order />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/allproducts' element={<Allproducts />} />
            <Route path='/#' element={<Nopage />} />
          </Routes>
        </Router>
      </MyState>

    </>
  );
}

export default App;
