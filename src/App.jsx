import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import { Routes, Route } from 'react-router-dom'
import Inicio from './vistas/inicio'
import Menu from './vistas/menu'
import Nosotros from './vistas/nosotros'
import Contactarnos from './vistas/contactarnos'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/contactarnos' element={<Contactarnos />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
