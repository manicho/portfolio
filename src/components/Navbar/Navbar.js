import { useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Brightness2Icon from '@mui/icons-material/Brightness2'
import WbSunnyIcon from '@mui/icons-material/WbSunny'
import { Container, Navbar, Button } from 'react-bootstrap'
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import logo from '../../assets/media/logo.png'
import { ThemeContext } from '../../contexts/theme'
// import { projects, skills, contact } from './content'
import './Navbar.scss'

const NavbarComponent = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)
  const location = useLocation()

  console.log(location.pathname)
  const isCurrentSection = (sectionPath) => location.pathname === sectionPath

  const handleClick = (e) => {
    e.preventDefault()
    console.log('entra', e.target.href)
    // history.push("/home");
  }

  // const

  const toggleNavList = () => setShowNavList(!showNavList)

  return (
    // <Container className='nav-container'>
    <nav variant='light' bg='light' className='navbar'>
      {/* <Container>
          <Navbar.Brand href="#home" className='logo-container'>
            Home
            <img
              src={logo}
              width="60"
              height="60"
              className="logo"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container> */}
      {/* <Container className='nav-pill'> */}
      <Link
        to='/'
        className={`navbar-link ${isCurrentSection('/') ? 'selected' : ''}`}
      >
        Home
      </Link>
      <Link
        to='/projects'
        className={`navbar-link ${
          isCurrentSection('/projects') ? 'selected' : ''
        }`}
      >
        Projects
      </Link>
      <Link
        to='/about'
        className={`navbar-link ${
          isCurrentSection('/about') ? 'selected' : ''
        }`}
      >
        About
      </Link>
      <Link
        to='/contact'
        className={`navbar-link ${
          isCurrentSection('/contact') ? 'selected' : ''
        }`}
      >
        Contact
      </Link>
      {/* <Navbar.Brand href='/' onClick={handleClick}>Home</Navbar.Brand>
      <Navbar.Brand href='/about' onClick={handleClick}>About</Navbar.Brand>
      <Navbar.Brand href='/work' onClick={handleClick}>Work</Navbar.Brand>
      <Navbar.Brand href='/contact' onClick={handleClick}>Contact</Navbar.Brand> */}
      {/* </Container> */}
      <Container>
        {/* <Button variant="light">Light</Button>{' '} */}
        {/* <button
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon nav__theme'
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? <WbSunnyIcon /> : <Brightness2Icon />}
      </button> */}
        {/* <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button> */}
      </Container>
    </nav>
    // </Container>
    // <nav className='center nav'>
    //   <ul
    //     style={{ display: showNavList ? 'flex' : null }}
    //     className='nav__list'
    //   >
    //     {projects.length ? (
    //       <li className='nav__list-item'>
    //         <a
    //           href='#projects'
    //           onClick={toggleNavList}
    //           className='link link--nav'
    //         >
    //           Projects
    //         </a>
    //       </li>
    //     ) : null}

    //     {skills.length ? (
    //       <li className='nav__list-item'>
    //         <a
    //           href='#skills'
    //           onClick={toggleNavList}
    //           className='link link--nav'
    //         >
    //           Skills
    //         </a>
    //       </li>
    //     ) : null}

    //     {contact.email ? (
    //       <li className='nav__list-item'>
    //         <a
    //           href='#contact'
    //           onClick={toggleNavList}
    //           className='link link--nav'
    //         >
    //           Contact
    //         </a>
    //       </li>
    //     ) : null}
    //   </ul>

    //   <button
    //     type='button'
    //     onClick={toggleTheme}
    //     className='btn btn--icon nav__theme'
    //     aria-label='toggle theme'
    //   >
    //     {themeName === 'dark' ? <WbSunnyIcon /> : <Brightness2Icon />}
    //   </button>
    //   {/* <button
    //     type='button'
    //     onClick={toggleNavList}
    //     className='btn btn--icon nav__hamburger'
    //     aria-label='toggle navigation'
    //   >
    //     {showNavList ? <CloseIcon /> : <MenuIcon />}
    //   </button> */}
    // </nav>
  )
}

export default NavbarComponent
