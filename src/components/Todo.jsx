import 'todo.css';

function Todo({item, IsActive, setTodoList}) {
  // 삭제 기능
  const btnDelete = () => {
    setTodoList(prev => prev.filter((t) => t.id !== item.id));
    }
  // 완료-취소 기능
  const btnIsDone = () => {
    setTodoList((prev) =>
      prev.map((t) => {
        if (t.id === item.id) {
          return {...t, isDone: !t.isDone}
        } else {
          return t;
        }
      })
    );
  }
  return (
    <div className="todo">
      <h3>{item.title}</h3>
      <p>{item.contents}</p>
      <div className='todo-btn-box'>
        <button className='todo-btn' onClick={btnDelete}>삭제</button>
        <button className='todo-btn' onClick={btnIsDone}>{IsActive ? "취소" : "완료"}</button>
      </div>
    </div>
  )
}

export default Todo