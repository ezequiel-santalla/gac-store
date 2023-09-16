import CarouselImg from './CarouselImg/CarouselImg'
import InfoPagos from './InfoPagos/InfoPagos'
import Categorias from './Categorias/Categorias'
import Ofertas from './Ofertas/Ofertas'
import Destacados from './Destacados/Destacados'
import Testimonios from './Testimonios/Testimonios'
import InfoNos from './InfoNos/InfoNos'

const Home = () => {
  return (
    <>
      <CarouselImg />
      <InfoPagos />
      <Categorias />
      <Ofertas />
      <CarouselImg />
      <Destacados />
      <Testimonios />
      <InfoNos />
    </>
  )
}

export default Home