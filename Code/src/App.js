import Navbar from './components/Navbar';
import Home from './pages/Home';
import History from './pages/History';
import HistoryEng from './pages/HistoryEng';
import Mystory from './pages/Mystory';
import MystoryEng from './pages/MystoryEng';
import About from './pages/About';
import AboutEng from './pages/AboutEng';
import Services from './pages/Services'
import ServicesEng from './pages/ServicesEng'
import Contact from './pages/Contact';
import { Route, Routes} from 'react-router-dom'
// , Link, NavLink 
import SiteFooter from './components/SiteFooter'

function App() {

  return (
  
      // <BrowserRouter>
        <main>
          <Navbar />
          <Routes>
            <Route path='/history' element={<History />} />
            <Route path='/history-eng' element={<HistoryEng />} />
            <Route path='/mystory' element={<Mystory />} />
            <Route path='/mystory-eng' element={<MystoryEng />} />
            <Route path='/about' element={<About />} />
            <Route path='/about-eng' element={<AboutEng />} />
            <Route path='/services' element={<Services />} />
            <Route path='/services-eng' element={<ServicesEng />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<Home />} />
            <Route path='/' element={<Home />} />
          </Routes>
          <SiteFooter />
        </main>
      // </BrowserRouter>
   
  )

}
export default App;
