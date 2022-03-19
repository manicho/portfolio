import uniqid from 'uniqid'
import { skills } from './content'

const Skills = () => {
  if (!skills.length) return null

  return (
    <section>
      <h2>Skills</h2>
      <ul>
        {skills.map(skill => (
          <li key={uniqid()}>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
