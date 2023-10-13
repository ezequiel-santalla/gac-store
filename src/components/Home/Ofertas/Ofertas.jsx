import Card from '../Card/Card'

const Ofertas = () => {
  return (
    <div className='p-5' style={{ background: '#F3F5F5', zIndex: '1' }}>
      <div>
        <p className='m-0 fw-semibold' style={{ color: '#0F206C' }}>Ofertas</p>
      </div>

      <div>
        <Card />
      </div>
    </div>
  )
}

export default Ofertas