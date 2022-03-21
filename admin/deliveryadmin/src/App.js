import FoodUpload from './pages/FoodUpload';
import FoodUpdate from './pages/FoodUpdate';
import Orders from './pages/Orders';
import Foods from './pages/Foods';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Foods/>} />
        <Route path='/upload' element={<FoodUpload />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/update:id' element={<FoodUpdate />} />
      </Routes>
    </Router>
    
  );
}

export default App;
