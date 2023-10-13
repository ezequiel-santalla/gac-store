import { Form, Button, InputGroup } from 'react-bootstrap'
import search from '/img/search.svg'

const Search = () => {
  const formControl = {
    fontWeight: '500',
    paddingLeft: '1rem'
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const searchQuery = event.target.elements.searchQuery.value

    console.log('Búsqueda realizada:', searchQuery)
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Form.Control
            type="text"
            name="searchQuery"
            placeholder="Buscar Productos"
            aria-label="Buscar Productos"
            aria-describedby="basic-addon2"
            style={formControl}
          />
          <Button className='bg-white border-0' id="basic-addon2" type="submit">
            <img src={search} alt="Search" />
          </Button>
        </InputGroup>
      </Form>
    </div>
  )
}

export default Search
