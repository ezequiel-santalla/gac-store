import { useState, useRef } from 'react'
import { Dropdown } from 'react-bootstrap'
import caretDownFill from '/img/caretDownFill.svg'
import caretUpFill from '/img/caretUpFill.svg'

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const toggleDropdown = (event, metadata) => {
    if (metadata.source === 'select') {
      setIsOpen(!isOpen)
    }
  }

  const buttonStyle = {
    backgroundColor: '#0F206C',
    border: 'none',
    display: 'flex',
    justifyContent: 'center'
  }

  const menuStyle = {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    marginTop: '1rem'
  }

  return (
    <Dropdown show={isOpen} onToggle={toggleDropdown} ref={dropdownRef}>
      <Dropdown.Item style={buttonStyle} onSelect={() => setIsOpen(!isOpen)}>
        <span className='me-2'>Categorías</span> {!isOpen
          ? <img src={caretDownFill} alt='Caret Down Fill'/>
          : <img src={caretUpFill} alt='Caret Up Fill'/>}
      </Dropdown.Item>

      <Dropdown.Menu style={menuStyle}>
        <Dropdown.Item>Grabadoras Láser</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Impresoras 3D</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Escaners 3D</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropdownMenu
