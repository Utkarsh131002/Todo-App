import AddTodo from "./Component/AddTodo";
import AppName from "./Component/AppName";
import TodoItems from "./Component/TodoItems";
import Message from "./Component/Message";
import "./App.css";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    



    setTodoItems((currValue) => [
        ...currValue,
        {
          name: itemName,
          dueDate: itemDueDate,
        },
      ]);

  };

  const handleDeleteItem = (todoItemName) => {

    const newTodoItems = todoItems.filter(item =>  item.name !== todoItemName);
    setTodoItems(newTodoItems);

  };

  return (
    <>
      <div className="todo">
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        {todoItems.length === 0 && <Message></Message>}
        <TodoItems
          todoItems={todoItems}
          onDeleteClick={handleDeleteItem}
        ></TodoItems>
      </div>
    </>
  );
}
export default App;