import uniqid from 'uniqid'
import { skills } from './content'

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section'>
      <h2 className='section__title'>Skills</h2>
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
