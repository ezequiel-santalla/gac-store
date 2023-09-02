import logo from '../../../public/logo.png'
import tag from '../../../public/img/tag.svg'
import infoSquare from '../../../public/img/infoSquare.svg'
import Dropdown  from './DropdownMenu/DropdownMenu'
import Search from './Search/Search'

const NavBar = () => {
  return (
    <nav className='text-white' style={{ backgroundColor: '#0F206C' }}>
      <div className='d-flex justify-content-end gap-4'>
        <div className='d-flex gap-1 pt-3 pe-2'>
          <img src={tag} alt="Tag" />
          <p className='m-0'>Ofertas</p>
        </div>
        <div className='d-flex gap-1 pt-3 pe-5'>
          <img src={infoSquare} alt="Info Square" />
          <p className='m-0'>Información</p>
        </div>
      </div>

      <div className='d-flex ps-5 pt-1 pb-5 align-items-center gap-5'>
        <div className='px-4'>
          <img src={logo} alt="Logo Gac Store" />
        </div>
        <div className='px-2'>
          <Dropdown />
        </div>
        <div>
          <Search />
        </div>
      </div>
    </nav>
  )
}

export default NavBar