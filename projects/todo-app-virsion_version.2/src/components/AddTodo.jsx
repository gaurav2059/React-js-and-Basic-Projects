import { useRef, useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);
  const todoNameElement = useRef();
  const todoDueDateElement = useRef();

  const handleAddButtonClicked = () => {
    const todoName = todoNameElement.current.value.trim();
    const dueDate = todoDueDateElement.current.value;

    if (!todoName || !dueDate) {
      alert("Please enter both a todo name and a due date.");
      return;
    }

    addNewItem(todoName, dueDate);
    todoNameElement.current.value = "";
    todoDueDateElement.current.value = "";
  };

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
            className="form-control"
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={todoDueDateElement}
            className="form-control"
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
