import { TodoItem } from "./TodoItem"

export function TodoList({ todos, todoDone, deleteTodo }) {
    return (
        <div className="list">
          <ul>
            {todos.length === 0 && "No Todos"}
            {todos.map(todo => {
              return (
                <TodoItem {...todo} key={todo.id} todoDone={todoDone} deleteTodo={deleteTodo}/>
              )
            })}
          </ul>
        </div>
    )
}