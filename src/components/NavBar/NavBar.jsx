import { Link } from 'react-router-dom'
import logo from '/logo.png'
import tag from '/img/tag.svg'
import infoSquare from '/img/infoSquare.svg'
import person from '/img/person.svg'
import cart from '/img/cart.svg'
import Dropdown  from './DropdownMenu/DropdownMenu'
import Search from './Search/Search'

const NavBar = () => {
  const smallFontSize = {
    fontSize: '14px'
  }

  return (
    <nav className='text-white' style={{ backgroundColor: '#0F206C'}}>
      <div className='d-flex justify-content-end gap-4'>
        <button className='d-flex border-0 align-items-center gap-1 pt-3 pe-2' style={{ backgroundColor: '#0F206C'}}>
          <img src={tag} alt="Tag" />
          <p className='m-0 text-white' style={smallFontSize}>Ofertas</p>
        </button>
        <button className='d-flex border-0 align-items-center gap-1 pt-3 pe-5' style={{ backgroundColor: '#0F206C'}}>
          <img src={infoSquare} alt="Info Square" />
          <p className='m-0 text-white' style={smallFontSize}>Información</p>
        </button>
      </div>

      <div className='d-flex align-items-center pt-3 pb-5 gap-5'>
        <div className='col-2 d-flex justify-content-center ps-5 pe-2'>
          <Link to={'/'}>
            <img src={logo} alt="Logo Gac Store" />
          </Link>
        </div>
        <div className='col-1 px-2'>
          <Dropdown />
        </div>
        <div className='col-5 px-2'>
          <Search />
        </div>
        <button className='col-1 d-flex justify-content-center align-items-center border-0 gap-2 px-2' style={{ backgroundColor: '#0F206C'}}>
          <img src={person} alt="Person" />
          <p className='m-0 text-white'>Mayorista</p>
        </button>
        <button className='col-1 d-flex justify-content-center align-items-center border-0 gap-2 px-2' style={{ backgroundColor: '#0F206C'}}>
          <img src={cart} alt="Carrito" />
          <p className='m-0 text-white'>Carrito</p>
        </button>
      </div>
    </nav>
  )
}

export default NavBar