
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
    <div>
      <h2>{item.title}</h2>
      <p>{item.contents}</p>
      <button onClick={btnDelete}>삭제</button>
      <button onClick={btnIsDone}>{IsActive ? "취소" : "완료"}</button>
    </div>
  )
}

export default Todo