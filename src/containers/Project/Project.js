import uniqid from 'uniqid'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'

const Project = ({ project }) => (
  <div>
    <h3>{project.name}</h3>

    <p>{project.description}</p>
    {project.stack && (
      <ul>
        {project.stack.map((item) => (
          <li key={uniqid()}>{item}</li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a href={project.sourceCode} aria-label='source code'>
        <GitHubIcon />
      </a>
    )}

    {project.livePreview && (
      <a href={project.livePreview}>
        <LaunchIcon />
      </a>
    )}
  </div>
)

export default Project
