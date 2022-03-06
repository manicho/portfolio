import header from './content'
import Navbar from '../Navbar/Navbar'

const Header = () => {
  const { homepage, title } = header

  return (
    <header>
      <h3>
        {homepage ? (
          <a href={homepage} className='link'>
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <Navbar />
    </header>
  )
}

export default Header
