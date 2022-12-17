import './Footer.scss'

const Footer = () => (
  <footer className='footer'>
    <aside>
      <ul className='social-links'>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
        <li>item 4</li>
      </ul>
    </aside>
    <div className='email-container'>
      <a href='mailto:manicho@gmail.com' className='email-link'>manicho@gmail.com</a>
    </div>
    {/* Made with <span className='heart'>❤</span> by{' '}
    <a
      href='https://github.com/manicho/portfolio'
      target='_blank'
      rel='noreferrer'
    >
      Mauricio Ortega
    </a> */}
  </footer>
)

export default Footer
