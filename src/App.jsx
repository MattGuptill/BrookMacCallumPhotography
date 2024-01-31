
import { Route, Routes } from 'react-router-dom'
import Navbar from '../src/components/Navbar/Navbar'
import { About } from './components/Pages/About'
import { Home } from './components/Pages/Home/Home'
import { Experience } from './components/Pages/Experience'
import { Contact } from './components/Pages/Contact'
import { Bookings } from './components/Pages/Bookings'
import { Footer } from './components/Footer/Footer'

function App() {
  

  return (
    <div className='border-box font-normal'>
     <Navbar />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/experience' element={<Experience />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/bookings' element={<Bookings />} />
     </Routes>
     <Footer />
    </div>
  )
}

export default App
