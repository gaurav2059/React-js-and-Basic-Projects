import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";

function TodoItems() {
  const { todoItems, deleteItem } = useContext(TodoItemsContext);

  return (
    <div className="container">
      {todoItems.map((item) => (
        <TodoItem
          key={item.id} // Pass the unique key here
          todoName={item.name}
          todoDate={item.date}
          onDeleteClick={deleteItem}
        />
      ))}
    </div>
  );
}

export default TodoItems;
