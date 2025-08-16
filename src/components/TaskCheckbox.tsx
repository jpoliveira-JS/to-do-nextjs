import { useMemo, useState } from "react";
import Form from "react-bootstrap/Form";
import { Task } from "./TaskTable";
import { Badge } from "react-bootstrap";

interface Props {
  task: Task;
  onChange: (item: Task) => void;
}

const TaskCheckbox: React.FC<Props> = ({ task, onChange }) => {
  const [checked, setChecked] = useState(!!task.completed_at);

  const buildLabel = useMemo(() => {
    if (!task.completed_at) {
      return task.description;
    }

    return (
      <div className="d-flex align-items-center">
        <del>{task.description}</del>
        <Badge className="text-white task-complete-tag" pill bg="success">
          Concluída
        </Badge>
      </div>
    );
  }, [task]);

  return (
    <Form>
      <Form.Check
        className="gray-700 rounded-2"
        type="checkbox"
        label={buildLabel}
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
          onChange(task);
        }}
        inline
      />
    </Form>
  );
};

export default TaskCheckbox;
