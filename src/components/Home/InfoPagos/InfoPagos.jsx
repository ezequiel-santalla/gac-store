import piggyBank from '/img/piggyBank.svg'
import send from '/img/send.svg'
import paymentCard from '/img/paymentCard.svg'

const InfoPagos = () => {
  return (
    <div className='d-flex justify-content-around text-white' style={{ backgroundColor: '#13131D'}}>
      <div>
        <div className='d-flex gap-4 my-4'>
          <img src={piggyBank} alt="Piggy Bank" />

          <div>
            <p className='m-0 fw-bold'>12, 18 y 24 CUOTAS</p>
            <p className='m-0'>Ver promociones vigentes</p>
          </div>
        </div>
      </div>

      <div>
        <div className='d-flex gap-4 my-4'>
          <img src={send} alt="Send" />

          <div>
            <p className='m-0 fw-bold'>ENVÍO GRATIS</p>
            <p className='m-0'>A todo el país desde $ 5.000</p>
          </div>
        </div>
      </div>

      <div>
        <div className='d-flex gap-4 my-4'>
          <img src={paymentCard} alt="Payment Card" />

          <div>
            <p className='m-0 fw-bold'>MEDIOS DE PAGO</p>
            <p className='m-0'>Mercadopago, Mobbex, Efectivo</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoPagos