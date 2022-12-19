import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
// import Home from './Home'
import { contact } from './content'
import './Contact.scss'

const Contact = () => {
  const { name, role, description, resume, social } = contact

  return (
    <div className='contact-container'>
      Contact
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
    </div>
  )
}

export default Contact
