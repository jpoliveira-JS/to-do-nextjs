import { getCurrentDate } from '@/utils/date'
import { useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import TaskCheckbox from './TaskCheckbox'

export interface Task {
    id: string
    description: string
    created_at: string
    completed_at?: string
}

interface Props {
  items: Task[]
  removeItem: (id: string) => void
  updateItem: (item: Task) => void
}

const TaskTable: React.FC<Props> = ({ items, removeItem, updateItem }) => {

  const completeTask = (task: Task) => {
    const date = getCurrentDate()
    updateItem({...task, completed_at: date})
  }

  return (
    <Table className='mt-3 border-top' size="sm">
      <thead>
        <tr style={{height: '50px', verticalAlign: 'middle'}}>
          <th className='ps-4' style={{width: '39%'}}>Tarefa</th>
          <th style={{width: '19%'}}>Data de criação</th>
          <th style={{width: '19%'}}>Data de conclusão</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {items.map((task) => (
          <tr key={task.id} style={{height: '50px', verticalAlign: 'middle'}}>
            <td className='ps-4'>
            <TaskCheckbox task={task} onChange={completeTask}/>
            </td>
            <td>{task.created_at}</td>
            <td>{task?.completed_at || '-'}</td>
            <td>
              <div className='d-flex justify-content-center'>
                <Button className='remove-task-btn' variant='danger' onClick={() => removeItem(task.id)}>
                  Excluir
                </Button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default TaskTable
