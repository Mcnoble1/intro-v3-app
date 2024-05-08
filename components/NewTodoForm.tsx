import { newTodo } from "@/utils/actions";

const NewTodoForm = () => {
    return (
        <form action={newTodo}>
            <input name='content' type="text" className="border border-black/25"/>
            <button type="submit">New Todo</button>
        </form>
    );
}

export default NewTodoForm;