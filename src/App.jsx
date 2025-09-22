import { useEffect, useState } from "react"
import Exchange from "./components/Exchange"
import New from "./components/New"


export default function App() {



  const [todos, setTodos] = useState([
    { id: 2, todo: 'Забрать зарплату', completed: false },
    { id: 1, todo: 'Купить молоко', completed: false },
    { id: 3, todo: 'Выгулять собаку', completed: true },
  ])

  const [newTodo, setNewTodo] = useState('')



  const [filterTodos, setfilterTodos] = useState([])



  const [currentFilter, setcurrentFilter] = useState('All')

  useEffect(() => {
    if (currentFilter === 'Done') {
      setfilterTodos(
        todos.filter(item => {
          return item.completed === true
        })
      )
    }
    else if (currentFilter === 'Going') {
      setfilterTodos(
        todos.filter(item => {
          return item.completed === false
        })
      )
    }

    else {
      setfilterTodos(todos)
    }

  }, [currentFilter, todos])

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

  function removeTodos(id) {
    setTodos(
      todos.filter(item => {
        return item.id !== id
      })
    )
  }










  return (

    <div>


      <New/>

      {/* <Exchange/>

      <div className="flex gap-x-5">
        <label>
          <input onChange={() => setcurrentFilter('All')} type="radio" name="filter" />
          Все задачи
        </label>
        <label>
          <input onChange={() => setcurrentFilter('Going')} type="radio" name="filter" />
          Невыполненные задачи
        </label>
        <label>
          <input onChange={() => setcurrentFilter('Done')} type="radio" name="filter" />
          Выполненные задачи
        </label>
      </div>

      {
        filterTodos.map((элемент_массива) => (
          <div className="flex items-center gap-x-5" style={элемент_массива.completed ? { textDecoration: 'line-through' } : {}}>
            <span>{элемент_массива.id}</span>
            <input onChange={() => toggleCompletion(элемент_массива.id)} checked={элемент_массива.completed} type="checkbox" />
            <span>{элемент_массива.todo}</span>
            <button onClick={() => removeTodos(элемент_массива.id)}>X</button>
          </div>
        ))
      }

      <form onSubmit={(event) => addTodo(event)}>
        <input value={newTodo} onInput={(event) => setNewTodo(event.target.value)} type="text" placeholder="Введите новое дело..." />
        <button>Создать</button>
      </form> */}

    </div>

  )

}