import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Resdetails from './components/Resdetails'
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Router> 
      <Header/>
      <Container>
      <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path='/resdetails/:id' element={<Resdetails/>}/>
      </Routes>
      </Container>
      <Footer/>
      
    </Router>
  );
}

export default App;
