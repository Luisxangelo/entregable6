import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import ProductDetail from './pages/ProductDetail'
import Purchases from './pages/Purchases'
import Header from './components/layout/Header'
import ProtectedRoudes from './components/auth/ProtectedRoudes'
import Cart from './components/Cart/Cart'

function App() {
  

  return (
    <main className='grid grid-rows-[auto_1fr] min-h-screen'>
      <Header/>


      <Routes>
        <Route path='/' element={<Home/>} />

        <Route path='/login' element={<Login/>}/>

        <Route path='/products/:id' element={<ProductDetail/>}/>

        <Route element={<ProtectedRoudes/>}>

          <Route path='purchases' element={<Purchases/>}/>

        </Route>


      </Routes>
      <Cart/>
    </main>
  )
}

export default App
