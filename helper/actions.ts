'use server'
import prisma from '@/helper/db'
import { revalidatePath } from 'next/cache'

export const newTodo = async (data: FormData) => {
  const newTodo = data.get('todo') as string

  if (newTodo) {
    await prisma.todo.create({
      data: {
        content: newTodo,
      },
    })
    revalidatePath('/todos')
  }
}

export const completeTodo = async (id: string) => {
  await prisma.todo.update({
    where: { id },
    data: {
      completed: true,
    },
  })
  revalidatePath('/todos')
}
