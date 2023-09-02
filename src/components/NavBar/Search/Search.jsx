import Form from 'react-bootstrap/Form'

const Search = () => {
  return (
    <div>
      <Form className="d-flex">
        <Form.Control type="search" placeholder="Buscar Productos" className="me-2" aria-label="Search"/>
      </Form>
    </div>
  )
}

export default Search