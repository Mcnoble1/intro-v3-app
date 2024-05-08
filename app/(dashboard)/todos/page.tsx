import TodoList from '@/components/TodoList';
import db from '@/utils/db';

const getTodos = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const todos = await db.todo.findMany({});
  return todos;
}

const TodosPage = async () => {
  const todos = await getTodos();
  // console.log(todos)
  return (
    <div>
      <TodoList todos={todos} />
    </div>
  );
}

export default TodosPage;