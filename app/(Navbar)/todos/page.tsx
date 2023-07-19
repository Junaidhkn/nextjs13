import TodoList from '@/components/TodoList'
import prisma from '@/helper/db'
import React from 'react'

const getTodos = async () => {
  const todos = await prisma.todo.findMany()
  return todos
}

const TodoPage = async () => {
  const todos = await getTodos()
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 text-4xl">
      <TodoList todos={todos} />
    </div>
  )
}

export default TodoPage
