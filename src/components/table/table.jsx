import "./table.css"

export const Table = ({ todos, deleteTodo, handleEdit }) => {
  return (
    <div className="table_container">
      <div className="table_header">
        <span className="item_color" >Статус</span>
        <span className="item_color" >Автор</span>
        <span className="item_color" >Задача</span>
      </div>
      {todos?.map((todo) => {
        return (
          <div className="table_body">
            <input type="checkbox" className="checkbox_input" />
            <span>{todo.author}</span>
            <span>{todo.task}</span>
            <button className="edit_button" onClick={() => handleEdit(todo)}>E</button>
            <button className="delete_button" onClick={() => deleteTodo(todo.id)}>D</button>
          </div>
        )
      })}
    </div>
  )
}

