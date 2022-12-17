import uniqid from 'uniqid';
import { projects } from './content'
import ProjectContainer from '../../containers/Project/Project'
import './Projects.scss'

const Projects = () => {
  if (!projects.length) return null

  return (
    <section className='projects-container'>
      <h2>Projects</h2>

      <div>
        {projects.map(project => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects