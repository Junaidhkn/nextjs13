'use client'
import { updateTodo } from '@/helper/actions'
import { useTransition } from 'react'

type todoProp = {
  todo: {
    id: string
    createdAt: Date
    content: string
    completed: boolean
  }
}

const Todo = ({ todo }: todoProp) => {
  const [isPending, startTransition] = useTransition()
  return (
    <div
      className={`px-8 py-2 border text-white border-white/25 cursor-pointer ${
        todo.completed ? 'line-through text-black/30' : ''
      }`}
      onClick={() => startTransition(() => updateTodo(todo.id, todo.completed))}
    >
      {todo.content}
    </div>
  )
}

export default Todo
