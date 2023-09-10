import { Form, Button, InputGroup } from 'react-bootstrap'
import search from '/img/search.svg'


const Search = () => {
  const formControl = {
    fontWeight: '500',
    paddingLeft: '1rem'
  }

  return (
    <div>
      <InputGroup>
        <Form.Control
          placeholder="Buscar Productos"
          aria-label="Buscar Productos"
          aria-describedby="basic-addon2"
          style={formControl}>
        </Form.Control>

        <Button className='bg-white border-0' id="basic-addon2">
          <img src={search} alt="Search" />
        </Button>
      </InputGroup>
    </div>
  )
}

export default Search