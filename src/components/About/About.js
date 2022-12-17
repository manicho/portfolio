import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
// import Home from './Home'
import { about } from './content'
import './About.scss'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <main className='about-container'>
      About
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

export default About
