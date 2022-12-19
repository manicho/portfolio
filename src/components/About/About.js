import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { useState } from 'react'
import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa'
// import Home from './Home'
import { about } from './content'
import './About.scss'

const About = () => {
  const { name, role, description, resume, social } = about

  const [showText, setShowText] = useState('')

  const toggleText = (e) => {
    e.preventDefault()
    // setShowText
    console.log(e.target)
    if (e.type === 'mouseenter') setShowText(e.target.id)
    else if (e.type === 'mouseleave') setShowText('')
  }

  return (
    <div className='about-container'>
      <p>About</p>

      <div className='link-list'>
        {resume && (
          <a href={resume} id='resume' className='link' onMouseEnter={toggleText}
          onMouseLeave={toggleText}>
            <FaFilePdf className='social-icon' />
            <p className='link-text' hidden={showText !== 'resume'}>resume</p>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                target="_blank"
                rel="noreferrer"
                arial-label='github'
                id='github'
                className='link'
                onMouseEnter={toggleText}
                onMouseLeave={toggleText}
              >
                <FaGithub className='social-icon' />
                <p className='link-text' hidden={showText !== 'github'}>
                  {social.github}
                </p>
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noreferrer"
                arial-label='linkedin'
                id='linkedin'
                className='link'
                onMouseEnter={toggleText}
                onMouseLeave={toggleText}
              >
                <FaLinkedin className='social-icon' />
                <p className='link-text' hidden={showText !== 'linkedin'}>
                  Mauricio Ortega Auriol
                </p>
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
