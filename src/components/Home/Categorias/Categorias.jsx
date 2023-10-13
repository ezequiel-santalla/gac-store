import greyCircle from '/img/greyCircle.svg'
import scaner from '/scaner-3d.png'
import impresora from '/impresora-3d.png'
import grabadoraLaser from '/grabadora-laser.png'
import { Link } from 'react-router-dom'

const Categorias = () => {
  return (
    <div className='d-flex justify-content-around py-5'>
      <Link to='/categorias/escaners-3d' style={{ color: 'black', textDecoration: 'none'}}>
        <div>
          <div className='d-flex align-items-center gap-4 position-relative'>
            <img src={greyCircle} alt="Grey Circle" />
            <img className='position-absolute' src={scaner} alt="Scaner 3D" />
            <p className='fw-bold'>Escaners 3D</p>
          </div>
        </div>
      </Link>

      <Link to='/categorias/impresoras-3d' style={{ color: 'black', textDecoration: 'none'}}>
        <div>
          <div className='d-flex align-items-center gap-4'>
            <img src={greyCircle} alt="Grey Circle" />
            <img className='position-absolute' src={impresora} alt="Impresora 3D" />
            <p className='fw-bold'>Impresoras 3D</p>
          </div>
        </div>
      </Link>

      <Link to='/categorias/grabadoras-laser' style={{ color: 'black', textDecoration: 'none'}}>
        <div>
          <div className='d-flex align-items-center gap-4'>
            <img src={greyCircle} alt="Grey Circle" />
            <img className='position-absolute' src={grabadoraLaser} alt="Grabadora Laser" />
            <p className='fw-bold'>Grabadoras Láser</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Categorias