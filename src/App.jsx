import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Profile from './pages/Profile'
import About from './pages/About'

const App = () => {
  return (
    <>

      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App