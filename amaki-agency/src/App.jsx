import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home  from './pages/Home/home';
import About from './pages/About/about';
import Services from './pages/Services/services';
import Sponsorship from './pages/Sponsorship/sponsorship';
import Contact from './pages/Contact/contact';
import Header from './components/header';
import Footer from './components/footer';
import Work from './pages/Work/work';

function App() {
  return (
    <div className="App">
       <Router>
          <Header/>
          <Routes>
             <Route path='' element={<Home/>}/>
             <Route path='about' element={<About/>}/>
             <Route path='services' element={<Services/>}/>
             <Route path='sponsorship' element={<Sponsorship/>}/>
             <Route path='contact' element={<Contact/>}/>
             <Route path='work' element={<Work/>}/>
          </Routes>
          <Footer/>
       </Router>
    </div>
  )
}

export default App
