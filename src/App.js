import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import Header from "./components/Header"
import Input from "./components/Input"
import TodoList from "./components/TodoList"

function App() {
  // 새로운 todolist 생성 폼
  const [todoList, setTodoList] = useState([])
  return (
    <div>
      <Header>🥰 Habin's Todo List 😉</Header>
      <Input setTodoList={setTodoList}></Input>
      <TodoList IsActive={false} todoList={todoList} setTodoList={setTodoList}></TodoList>
      <TodoList IsActive={true} todoList={todoList} setTodoList={setTodoList}></TodoList>
    </div>
  )
}

export default App

// const test = [
//   {
//     id: uuidv4(),
//     title: 'title1',
//     contents: 'contents1',
//     isDone: false,
//     },
//     {
//     id: uuidv4(),
//     title: 'title2',
//     contents: 'contents2',
//     isDone: false,
//     },
//     {
//     id: uuidv4(),
//     title: 'title3',
//     contents: 'contents3',
//     isDone: true,
//     },
// ]
