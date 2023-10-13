import Card from '../Card/Card'

const Destacados = () => {
  return (
    <div className='p-5' style={{ background: '#F3F5F5' }}>
      <div>
        <p className='m-0 fw-semibold' style={{ color: '#0F206C' }}>Destacados</p>
      </div>

      <div>
        <Card />
      </div>
    </div>
  )
}

export default Destacados