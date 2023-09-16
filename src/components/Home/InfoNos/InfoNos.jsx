import headphones from '/img/headphones.svg'
import personBlack from '/img/personBlack.svg'
import label from '/img/label.svg'

const InfoNos = () => {
  return (
    <div style={{ background: '#F3F5F5' }}>
      <div className='container px-y py-5'>
        <div className='row'>
          <div className='col-4 d-flex flex-column align-items-center text-center px-5'>
            <div className='d-flex justify-content-center'>
              <img src={headphones} alt="Headphones" className='p-3 rounded-circle bg-dark' />
            </div>
            <h6 className='my-3'>Asistencia sobre productos</h6>
            <p>Hasta 3 años de garantía in situ para su tranquilidad</p>
          </div>

          <div className='col-4 d-flex flex-column align-items-center text-center px-5'>
            <div className='d-flex justify-content-center'>
              <img src={personBlack} alt="Person" className='p-3 rounded-circle bg-dark' />
            </div>
            <h6 className='my-3'>Cuenta Mayorista</h6>
            <p>Con grandes descuentos, entrega gratuita y un especialista dedicado a la asistencia</p>
          </div>

          <div className='col-4 d-flex flex-column align-items-center text-center px-5'>
            <div className='d-flex justify-content-center'>
              <img src={label} alt="Label" className='p-3 rounded-circle bg-dark' />
            </div>
            <h6 className='my-3'>Ahorros increíbles</h6>
            <p>Has un 15% de descuento en nuevo productos, puede estar seguro del mejor precio</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoNos