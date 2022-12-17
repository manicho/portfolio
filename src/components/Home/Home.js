import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
// import Home from './Home'
import { home } from './content'
import './Home.scss'

const Home = () => {
  const { name, role, description, resume, social } = home

  return (
    <main className='home-container'>
      <p className='text'>
        Born in 1988 in Santiago, Chile. <br />
        I believe in keep the things simple. <br />
        I'm strongly working in make something <br /> useful for the humanity.
      </p>
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

export default Home
