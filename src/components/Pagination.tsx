import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
const Pagination: React.FC = () => {
  const pagination = {
    currentPage: 1,
    maxPage: 5, //total * itemsqty
    itemsPerPage: 8,
  }

  const [selectedPage, setSelectedPage] = useState(pagination.itemsPerPage)

  return (
    <div
      className='d-flex flex-row align-self-end w-100'
      style={{ maxHeight: 38, maxWidth: 428 }}
    >
      <div className='d-flex align-items-center '>
        <span className='my-auto w-100'>
          Pagina {pagination.currentPage} de {pagination.maxPage}
        </span>
      </div>
      <Button variant='outline-secondary ms-3 px-3'>Anterior</Button>
      <div className='d-flex align-items-center justify-content-center current-page mx-1'>
        <span>1</span>
      </div>
      <Button variant='outline-secondary me-1 px-3'>Seguinte</Button>
      <Form.Select
        aria-label='Seleciona tarefas por página'
        value={selectedPage}
        onChange={e => setSelectedPage(Number(e.target.value))}
        style={{ maxWidth: 64 }}
      >
        <option value='8'>8</option>
        <option value='16'>16</option>
        <option value='24'>24</option>
      </Form.Select>
    </div>
  )
}

export default Pagination
