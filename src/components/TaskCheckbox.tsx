import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Task } from './TaskTable'
import { Badge } from 'react-bootstrap'

interface Props {
  task: Task
  onChange: (item: Task) => void
}

const TaskCheckbox: React.FC<Props> = ({
  task,
  onChange
}) => {

  const [checked, setChecked] = useState(!!task.completed_at)

  const buildLabel = () => {
    if(!task.completed_at) {
      return task.description
    }

    return (
      <div className='d-flex align-items-center'>
        <del>{task.description}</del><Badge className='text-white task-complete-tag' pill bg="success">Concluída</Badge>
      </div>
    )
  }

  return (
    <Form>
      <Form.Check
          type='checkbox'
          label={buildLabel()}
          checked={checked}
          onChange={(e) => {
            if(!!task.completed_at) return
            setChecked(e.target.checked)
            onChange(task)
          }}
          inline
      />
    </Form>
  )
}

export default TaskCheckbox
