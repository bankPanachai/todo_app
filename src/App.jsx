import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoLists"
import { useState, useEffect } from 'react'


function App() {
  // const todos = [
  //   { input: 'Hello! Add your first todo!', complete: true},
  //   { input: 'Learn how to web design', complete: false},
  //   { input: 'Get the groceries!', complete: true},
  //   { input: 'Say hi to gran gran', complete: true}
  // ]

  const [todos, setTodos] = useState([
    { input: 'Hello! Add your first todo!', complete: true}
  ]) 


  const [selectedTab, setSelectedTab] = useState('Open')


  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, { input:newTodo, complete: false }]
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleCompleteTodo(index) {
    let newTodoList = [...todos]
    let completeTodo = todos[index]
    completeTodo['complete'] = true
    newTodoList[index] = completeTodo
    setTodos(newTodoList)
    handleSaveData(newTodoList)

  }

  function handDeleteTodo(index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index
    })
    setTodos(newTodoList)
    handleSaveData(newTodoList)

  }
  function handleSaveData(currentTodos){
    localStorage.setItem('todo-app', JSON.stringify({ todos: currentTodos }))
  }



  useEffect(() => {
    if(!localStorage || !localStorage.getItem('todo-app')) {return}
    let  db = JSON.parse(localStorage.getItem('todo-app'))
    setTodos(db.todos)

  }, [])


  return (
    <>
      <Header todos={todos}/>
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos = {todos}/>
      <TodoList handleCompleteTodo={handleCompleteTodo} handDeleteTodo={handDeleteTodo} selectedTab={selectedTab} todos = {todos}/>
      <TodoInput handleAddTodo = {handleAddTodo}/>
    </>
  )
}

export default App
