import { contact } from './content'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section>
      <h2>Contact</h2>
      <a href={`mailto:${contact.email}`}>
        <span>
          Email me
        </span>
      </a>
    </section>
  )
}

export default Contact
