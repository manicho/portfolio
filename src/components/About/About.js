import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { about } from './content'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div>
      {name && (
        <h1>
          Hi, I am <span>{name}.</span>
        </h1>
      )}

      {role && <h2>A {role}.</h2>}
      <p>{description}</p>

      <div>
        {resume && (
          <a href={resume}>
            <span>Resume</span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a href={social.github} arial-label='github'>
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a href={social.linkedin} arial-label='linkedin'>
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
