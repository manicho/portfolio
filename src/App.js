import { useContext } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
// import Projects from './components/Projects/Projects'
// import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
// import BottomNavbar from './components/Navbar/BottomNavbar'
import './App.scss'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    // <div id='top' className={`${themeName} app`}>
    <div className='dark app'>
      <div className='frame'>
        <Header />
        {/* <BrowserRouter> */}
          <Main />
        {/* </BrowserRouter> */}
      </div>
      {/* <About /> */}
      {/* <Projects />
      <Skills /> */}
      {/* <Contact /> 
      <ScrollToTop />
      <Footer /> */}
      {/* <BottomNavbar /> */}
    </div>
  )
}

export default App
