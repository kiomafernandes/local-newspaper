import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Home from "./components/pages/Home"
import News from "./components/pages/News"
import CreateNews from "./components/pages/CreateNews"
import Register from "./components/pages/Register"
import Login from "./components/pages/Login"
import RestrictLogin from './components/pages/RestrictLogin'
import RestrictArea from './components/pages/RestrictArea'
import RestrictNews from './components/pages/RestrictNews'

import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import Container from "./components/layout/Container"



function App() {
  return (
    <Router>
      <Navbar />
        <Container customClass="min-height">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/restrictlogin' element={<RestrictLogin />} />
            <Route path='/restrictarea' element={<RestrictArea />} />
            <Route path='/register' element={<Register />} />
            <Route path='/news/:id' element={<News />} />
            <Route path='/restrictnews/:id' element={<RestrictNews />} />
            <Route path='/createnews' element={<CreateNews />} />
          </Routes>
        </Container>
      <Footer />
    </Router>
    
  );
}

export default App;
