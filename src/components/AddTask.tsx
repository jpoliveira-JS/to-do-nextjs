import { useState } from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const AddTask: React.FC = () => {
  const [inputValue, setInputValue] = useState('')

  return (
    <div className='p-0 mt-3 d-flex flex-row'>
      <Form className='task-input'>
        <Form.Group controlId='formTaskDescription'>
          <Form.Label className='mb-6px'>Descrição da tarefa:</Form.Label>
          <Form.Control
            type='text'
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
        </Form.Group>
      </Form>
      <Button className='align-self-end ms-2 task-add-btn' variant='primary'>
        Adicionar Tarefa
      </Button>
    </div>
  )
}

export default AddTask
