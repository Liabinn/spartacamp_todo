import Todo from "./Todo"
import 'todo.css';

function TodoList({IsActive, todoList, setTodoList}) {
  return (
    <div>
      <h2>{IsActive ? "완료🎉" : "진행중...🐇"}</h2>
      {todoList.filter(item => item.isDone === IsActive)
      .map(item=>{return(
        <Todo item={item} IsActive={IsActive} setTodoList={setTodoList}></Todo>
      )})}
    </div>
  )
}

export default TodoList