import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
const WelsomeMessage = () => {

    const contextObj = useContext(TodoItemsContext);

    const todoItems = contextObj.todoItems;

    return todoItems.length === 0 && <p>Welcome! , Enjoy Your Day</p>




}

export default WelsomeMessage;