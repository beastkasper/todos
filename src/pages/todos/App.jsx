import "./App.css"
import { Header } from "../../components/header/header"
import { Blank } from "../../components/blank/blank"
import { Table } from "../../components/table/table"
import { useState } from "react"

function App() {
  const [author, setAuthor] = useState("")
  const [selectedId, setSelected] = useState("")
  const [isEdit, setIsEdit] = useState(false)
  const [task, setTask] = useState("")
  const [todos, setTodos] = useState([
    {
      id: 1,
      author: "Daler",
      task: "Сделать макет для Амина"
    },
    {
      id: 2,
      author: "Amin",
      task: "Do something"
    }
  ])


  const addTodo = () => {
    if (author === "" || task === ""
    ) {
      alert("Заполните все поля!!!")
      return
    }
    const newTodo = {
      id: Date.now(),
      author: author,
      task: task
    }
    setTodos([...todos, newTodo])
    setAuthor("")
    setTask("")
  }

  const deleteTodo = (id) => {
    const removedTodo = todos?.filter((todo) => todo.id !== id)
    setTodos(removedTodo)
  }

  const handleEdit = (todo) => {
    
    setIsEdit(true)
    setAuthor(todo.author)
    setTask(todo.task)
    setSelected(todo.id)
  }

  const edit = () => {
    const editedTodos = todos.map((todo) => todo.id === selectedId ? { ...todo, author: author, task: task } : todo)
    setTodos(editedTodos)
    setAuthor("")
    setTask("")
    setIsEdit(false)
  }

  return (
    <>
      <Header title="Список дел" count={todos.length} />
      <div className="content">
        <Blank author={author} task={task} setAuthor={setAuthor} setTask={setTask} addTodo={addTodo} isEdit={isEdit} edit={edit} />
        <Table todos={todos} deleteTodo={deleteTodo} handleEdit={handleEdit} />
      </div>
    </>
  )
}

export default App
