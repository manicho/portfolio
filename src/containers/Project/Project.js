import uniqid from 'uniqid'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import './Project.scss';

const Project = ({ project }) => (
  <div className='project-list'>
    <p className='title'>{project.name}</p>

    <p className='description'>{project.description}</p>
    {project.stack && (
      <ul className='stack-list'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='label'>{item}</li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a href={project.sourceCode} aria-label='source code' className='source-icon'>
        <GitHubIcon />
      </a>
    )}

    {/* {project.livePreview && (
      <a href={project.livePreview}>
        <LaunchIcon />
      </a>
    )} */}
  </div>
)

export default Project
