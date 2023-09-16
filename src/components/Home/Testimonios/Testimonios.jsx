import whiteHorizontalBar from '/img/whiteHorizontalBar.svg'

const Testimonios = () => {
  return (
    <div className='pt-5 pb-4 d-flex flex-column align-items-center' style={{ background: 'linear-gradient(to right, #083b7e, #111a48)' }}>
      <h4 className='text-white fw-normal'>¿Qué dicen <span className='fw-bolder'>nuestros clientes</span> de nosotros?</h4>
      <img src={whiteHorizontalBar} alt="" />
    </div>
  )
}

export default Testimonios