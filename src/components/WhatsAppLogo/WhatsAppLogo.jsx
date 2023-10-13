import React from 'react'
import whatsapp from '/img/whatsapp.svg'

const WhatsAppLogo = () => {
  return (
    <a
      href={`https://wa.me/5493516512372`}
      className='position-fixed top-50 end-0 translate-middle-y pe-3'
      style={{ zIndex: '2', cursor: 'pointer' }}
      target='_blank'
      rel='noopener noreferrer'
    >
      <img src={whatsapp} alt="WhatsApp Logo" />
    </a>
  )
}

export default WhatsAppLogo