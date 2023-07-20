import prisma from '@/helper/db'
import { NextResponse } from 'next/server'

export const GET = async (request: Request) => {
  const todos = await prisma.todo.findMany({})
  return NextResponse.json({ data: todos })
}

export const POST = async (request: Request) => {
  const data = await request.json()
  const todo = await prisma.todo.create({
    data,
  })
  return NextResponse.json({ todo })
}
