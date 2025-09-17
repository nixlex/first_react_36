import { useState } from "react"


export default function App() {



  const [todos, setTodos] = useState([
    { id: 2, todo: 'Забрать зарплату', completed: false },
    { id: 1, todo: 'Купить молоко', completed: false },
    { id: 3, todo: 'Выгулять собаку', completed: true },
  ])

  const [newTodo, setNewTodo] = useState('')

  function toggleCompletion(id) {


    setTodos(


      todos.map(item => {

        if (item.id === id) {
          item.completed = !item.completed
        }

        return item
      })

    )
  }

  function addTodo(event) {
    event.preventDefault()

    setTodos(
      [
        ...todos,
        { id: todos.length + 1, todo: newTodo, completed: false }
      ]
    )

    setNewTodo('')

  }


  return (

    <div>

      {
        todos.map((элемент_массива) => (
          <div className="flex items-center gap-x-5" style={элемент_массива.completed ? { textDecoration: 'line-through' } : {}}>
            <span>{элемент_массива.id}</span>
            <input onChange={() => toggleCompletion(элемент_массива.id)} checked={элемент_массива.completed} type="checkbox" />
            <span>{элемент_массива.todo}</span>
          </div>
        ))
      }

      <form onSubmit={(event) => addTodo(event)}>
        <input value={newTodo} onInput={(event) => setNewTodo(event.target.value)} type="text" placeholder="Введите новое дело..." />
        <button>Создать</button>
      </form>

    </div>

  )

}