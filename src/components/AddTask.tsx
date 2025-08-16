import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Task } from "./TaskTable";
import { getCurrentDate } from "@/utils/date";

interface Props {
  addItem: (item: Task) => void;
}

const AddTask: React.FC<Props> = ({ addItem }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    if (!inputValue) return;
    const date = getCurrentDate();
    const item = {
      created_at: date,
      id: crypto.randomUUID(),
      description: inputValue,
    };
    addItem(item);
  };

  return (
    <div className="p-0 mt-3 d-flex flex-row">
      <Form className="task-input">
        <Form.Group controlId="formTaskDescription">
          <Form.Label className="mb-1">Descrição da tarefa:</Form.Label>
          <Form.Control
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </Form.Group>
      </Form>
      <Button
        className="align-self-end ms-2 task-add-btn"
        variant="primary"
        onClick={() => handleAdd()}
      >
        Adicionar Tarefa
      </Button>
    </div>
  );
};

export default AddTask;
