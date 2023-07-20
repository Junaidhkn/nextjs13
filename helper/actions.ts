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

// write a conditional using prisma if completed is true then turn it inot false and vice versa

export const updateTodo = async (id: string, completed: boolean) => {
  await prisma.todo.update({
    where: { id },
    data: {
      completed: !completed,
    },
  })
  revalidatePath('/todos')
}
