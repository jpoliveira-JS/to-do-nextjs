import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

interface Props {
  nextPage: () => void;
  prevPage: () => void;
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  changeItemsPerPage: (itemsPerPage: number) => void;
}

const Pagination: React.FC<Props> = ({
  nextPage,
  prevPage,
  currentPage,
  totalPages,
  itemsPerPage,
  changeItemsPerPage,
}) => {
  return (
    <div
      className="d-flex flex-row w-100"
      style={{ maxHeight: 38, maxWidth: 428 }}
    >
      <div className="d-flex align-items-center ">
        <span className="my-auto w-100 text-nowrap base-text">
          Pagina {currentPage} de {totalPages}
        </span>
      </div>
      <Button
        variant="outline-secondary"
        className="border-gray-200 ms-3 px-3"
        onClick={() => prevPage()}
      >
        Anterior
      </Button>
      <div className="d-flex align-items-center justify-content-center current-page mx-1">
        <span>{currentPage}</span>
      </div>
      <Button
        variant="outline-secondary"
        className="border-gray-200  me-1 px-3"
        onClick={() => nextPage()}
      >
        Seguinte
      </Button>
      <Form.Select
        aria-label="Seleciona tarefas por página"
        onChange={(e) => changeItemsPerPage(Number(e.target.value))}
        value={itemsPerPage}
        style={{ maxWidth: 64 }}
        className="pe-4 rounded-1 border-gray-200"
      >
        <option className="z-1" value="8">
          8
        </option>
        <option className="z-1" value="16">
          16
        </option>
        <option className="z-1" value="24">
          24
        </option>
      </Form.Select>
    </div>
  );
};

export default Pagination;
