import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from '../Home/Home'
import About from '../About/About'
import { main } from './content'
import './Main.scss'
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';

const Main = () => {
  const { name, role, description, resume, social } = main

  return (
    <main className='main-container'>
      {/* <Router> */}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
      {/* </Router> */}
      {/* <Home />
      <About /> */}
      {/* {role && <h2>A {role}.</h2>} */}
      {/* <h2>{description}</h2> */}

      {/* <div>
        {resume && (
          <a href={resume}>
            <span>Resume</span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a href={social.github} arial-label='github'>
                <FaGithub className='social-icon' />
              </a>
            )}

            {social.linkedin && (
              <a href={social.linkedin} arial-label='linkedin'>
                <FaLinkedin className='social-icon' />
              </a>
            )}
          </>
        )}
      </div> */}
    </main>
  )
}

export default Main
