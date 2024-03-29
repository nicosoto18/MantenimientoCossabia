import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Home from './components/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer'
import Nosotros from './components/SobreNosotros/Nosotros'
import Contactanos from './components/Contactanos/Contactanos'

function App() {
  

  return (
    <>
        <NavBar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Nosotros' element={<Nosotros/>}/>
        <Route path = "/Contactanos" element={<Contactanos/>}></Route>
       </Routes>
        
        <Footer/> 

    </>
  )
}

export default App
