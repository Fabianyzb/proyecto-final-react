import  { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import injectContext from './store/AppContext'
import Start from './pages/Start'
import CreateAccount from './pages/CreateAccount'
import Login from './pages/Login'
import Home from './pages/Home'
import Notfound from './pages/Notfound'

const Layout = () => {
  return (
    <>
      <Router>
            <Routes>
              <Route path='/' element={<Start />}/>
              <Route path='/create-acount' element={ <CreateAccount/>}/>
              <Route path='/login' element={ <Login/>}/>
              <Route path='/home' element={ <Home/>}/>
              <Route path='*' element={ <Notfound/>}/>
            </Routes>
      </Router>
      
      
  
    </>
  )
}

export default injectContext(Layout)