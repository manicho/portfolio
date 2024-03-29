import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
// import Projects from './components/Projects/Projects'
// import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Footer from './components/Footer/Footer'
import BottomNavbar from './components/Navbar/BottomNavbar'
import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />
      <About />
      {/* <Projects />
      <Skills /> */}
      <Contact /> 
      <ScrollToTop />
      <Footer />
      <BottomNavbar />
    </div>
  )
}

export default App
