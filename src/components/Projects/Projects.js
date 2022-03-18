import uniqid from 'uniqid';
import { projects } from './content'
import ProjectContainer from '../../containers/Project/Project'

const Projects = () => {
  if (!projects.length) return null

  return (
    <section>
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