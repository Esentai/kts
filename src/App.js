import Header from "./components/Header";
import Footer from './components/Footer';
import "./style.css"
import {
  BrowserRouter as Router,
  Navigate, 
  Routes,
  Route
} from "react-router-dom";
import { Home } from "./Home";
import { House } from "./House";
import { Flat } from "./Ohrana-kvartir";
import { Business } from "./Business";
import { Office } from "./Office";
import { Physical } from "./Physical";
import { Contacts } from './Contacts'
import { About } from './About'

function App() {
  return (
    <div className="App">

        <Router>
          <Header />
          <Routes> 
            <Route path='/*' element={<Home/>} />
            <Route path='/House' element={<House/>} />
            <Route path='/Flat' element={<Flat/>} />
            <Route path='/Business' element={<Business/>} />
            <Route path='/Office' element={<Office/>} />
            <Route path='/Physical' element={<Physical/>} />
            <Route path='/contacts' element={<Contacts/>} />
            <Route path='/about' element={<About/>} />
            
          </Routes>
          <Footer />
        </Router> 

    </div>
  );
}

export default App;
