import 'header.css';

function Header({children}) {
  return (
    <h1 className='header'>{children}</h1>
  )
}

export default Header