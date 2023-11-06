import { useState } from "react"
import { v4 as uuidv4 } from "uuid"

function Input({setTodoList}) {
  // 할일 제목 작성 폼
  const [title, setTitle] = useState('')
  // 할일 내용 작성 폼
  const [contents, setContents] = useState('')
  // 폼 새로고침 방지
  const onSubmit = (event) => {
    event.preventDefault();
    // 입력 값이 빈 값일 경우 alert
    if (title === '' || contents === '')
    return alert('제목과 내용을 모두 입력해주세요');
    const newTodo = {
      id: uuidv4(),
      title,
      contents,
      isDone: false,
    }
    console.log(newTodo)
    setTodoList((prev) => [...prev, newTodo]);
    setTitle('');
    setContents('');
  }
  // 제목 입력 값 가져오는 함수
  const onChangeTitle =(event) => {
    setTitle(event.target.value)
  }
  // 내용 입력 값 가져오는 함수
  const onChangeContents =(event) => {
    setContents(event.target.value)
  }
  return (
    <form onSubmit={onSubmit} style={{padding: '1rem', backgroundColor: 'skyblue', borderRadius: '15px'}}>
    제목&ensp;<input type='text' value={title} onChange={onChangeTitle} placeholder='제목을 작성해주세요.' />&ensp;
    내용&ensp;<input type='text' value={contents} onChange={onChangeContents} placeholder='내용을 작성해주세요.' />&ensp;
    <button>추가하기</button>
  </form>
  )
}

export default Input