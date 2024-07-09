import { useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";
function AddTodo({onNewItem}) {
////phle usestate se kiya tha use ref se ni dekh skte ho sir ki hi github pr jake coede ko
  
  const todoNameElement = useRef()
  const dueDateElement = useRef()

  


  const handleAddButtonClicked = (event) => {
    event.preventDefault()
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value
    onNewItem(todoName,dueDate)
    todoNameElement.current.value = ""
    dueDateElement.current.value = ""

    
  }
  return (
    <div className="container">
    <form className="row Kg-row"
    onSubmit={handleAddButtonClicked}>
      <div className="col-6">
        <input type="text" 
        ref={todoNameElement}
        placeholder="Enter Todo Here"
        />
      </div>
      <div className="col-4">
        <input type="date"
        ref={dueDateElement}
         />
      </div>
      <div className=" col-2">
        <button 
        
        className="btn btn-success Ut-btn"
        >
          <BiMessageAdd />
        </button>
      </div>
    </form>
    </div>
  );
}
export default AddTodo;
