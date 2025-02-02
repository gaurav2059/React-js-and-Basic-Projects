import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";



const TodoItems = ({ onDeleteClick }) => {
    const contextObj = useContext(TodoItemsContext);

    const todoItems = contextObj.todoItems;


    return (
        <>

            <div className="items-container">
                {todoItems.map(item =>
                    <TodoItem
                        todoDate={item.date}
                        todoName={item.name}
                        onDeleteClick={onDeleteClick} />)}

            </div>
        </>
    )
}
export default TodoItems;