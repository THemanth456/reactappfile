import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import  Home  from './pages/Home';
import  Products  from './pages/Products';
import  Reports  from './pages/Reports';


function App() {
  return (
    <>
      <Router>
        <Navbar/>
          <Routes>
            {Home}
            <Route path='/products' components={Products}/>
            <Route path='/reports' components={Reports}/>          
          </Routes>
      </Router>
    </>
  );
}

export default App;
