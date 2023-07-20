import { newTodo } from '@/helper/actions'

const NewTodoForm = () => {
  return (
    <div>
      <form action={newTodo}>
        <input
          type="text"
          name="todo"
          className="border border-black text-slate-950 p-3"
        />
        <button className="px-3 mx-2 border border-white" type="submit">
          Create
        </button>
      </form>
    </div>
  )
}

export default NewTodoForm
