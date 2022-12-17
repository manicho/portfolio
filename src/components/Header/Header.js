import header from './content'
import Navbar from '../Navbar/Navbar'
import './Header.scss'

const Header = () => {
  const { label, title } = header

  return (
    <header className='site-header'>
      {title && (
        <div className='header-content'>
          <h1 className='title'>
            {title}
          </h1>
          <p className='label'>
            {label}
          </p>
        </div>
      )}
      <Navbar />
    </header>
  )
}

export default Header
