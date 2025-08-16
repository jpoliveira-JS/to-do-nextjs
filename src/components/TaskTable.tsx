import { getCurrentDate } from "@/utils/date";
import { Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import TaskCheckbox from "./TaskCheckbox";

export interface Task {
  id: string;
  description: string;
  created_at: string;
  completed_at?: string;
}

interface Props {
  items: Task[];
  removeItem: (id: string) => void;
  updateItem: (item: Task) => void;
}

const TaskTable: React.FC<Props> = ({ items, removeItem, updateItem }) => {
  const completeTask = (task: Task) => {
    if (!task.completed_at) {
      const date = getCurrentDate();
      updateItem({ ...task, completed_at: date });
      return;
    } else {
      updateItem({ ...task, completed_at: undefined });
    }
  };

  return (
    <Table className="mt-3 border-top" size="sm">
      <thead>
        <tr className="table-head">
          <th className="ps-4" style={{ width: "39%" }}>
            Tarefa
          </th>
          <th style={{ width: "19%" }}>Data de criação</th>
          <th style={{ width: "19%" }}>Data de conclusão</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {items.map((task) => (
          <tr key={task.id} className="table-row">
            <td className="ps-4">
              <TaskCheckbox task={task} onChange={completeTask} />
            </td>
            <td>
              <span className="gray-700">{task.created_at}</span>
            </td>
            <td>
              <span className="gray-700">{task?.completed_at || "-"}</span>
            </td>
            <td>
              <div className="d-flex justify-content-center">
                <Button
                  className="remove-task-btn"
                  variant="danger"
                  onClick={() => removeItem(task.id)}
                >
                  Excluir
                </Button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TaskTable;
