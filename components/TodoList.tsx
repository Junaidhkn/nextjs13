import { type } from 'os'
import Todo from './Todo'

type TodoListProps = {
  todos: {
    id: string
    createdAt: Date
    content: string
    completed: boolean
  }[]
}

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default TodoList
