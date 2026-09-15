import React from 'react'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Home from './pages/Home'
import Product from './pages/Product'
import About from './pages/About'
import { Route , Routes} from 'react-router-dom'
import Notfound from './pages/Notfound'
import Courses from './pages/Courses'
import CoursesDetail from './pages/CoursesDetail'
import Navbar2 from './component/Navbar2'

const App = () => {
  return (
    <div className='h-screen  bg-black text-white'>
     <Navbar />
     <Navbar2 />
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product />}/>
        <Route path='/About' element={<About/>} />
        <Route path='/courses' element={<Courses/>} />
        <Route path='/courses/:id' element={<CoursesDetail/>} /> 
        {/* the above one tag : ye /courses ke baad kuch bhi likhne pe coursesDetail page pe bhej dega  , isme dhyaan rkhna h : */}
        <Route path='*' element={<Notfound/>}/>
     </Routes>

     <Footer />

    </div>
  )
}

export default App
