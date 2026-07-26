import { useState } from "react";
function App(){
  const [todoList,setTodosList] = useState([]);
  const [currentTodo, setCurrentTodo]= useState("");
  
  
  
  function addTodo(e){
    e.preventDefault();
    try{
      setTodosList([...todoList,currentTodo])
      setCurrentTodo("");
    } catch (err){
      alert("Something is wrong")
    }
  };
  
function deleteTodo(indexToDelete){
  const localTodoList = todoList.filter((todo , index)=>{
    if (index != indexToDelete){
      return todo;
    }
  });

  setTodosList(localTodoList)
}

  return(
   <div className="bg-red-500 h-100% flex flex-col items-center">
    <h1 className="animate-bounce">Todo App</h1>
    <form onSubmit={addTodo} className="border-2 border-b-black p-3">
      <input type="text" name="currentTodo" id="currentTodo" placeholder="Enter Todo" onChange={(e)=>setCurrentTodo(e.target.value)} />
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Add
</button>
    </form>
    {todoList.map((todo,index)=>{
        return(
          <div>
            <h3>{todo}</h3>
            <div>
              <button onClick={()=>deleteTodo(index)}>Delete</button>
            </div>
            
          </div>
        )
      })
    }
   </div> 
  )
}
export default App;