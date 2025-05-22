import "./blank.css"

export const Blank = ({ author, task, setAuthor, setTask, addTodo, isEdit, edit }) => {
  return <div className="blank_wrap">
    <label>
      <p>Автор:</p>
      <input value={author} className="border" type="text" onChange={(e) => {
        setAuthor(e.target.value)
        console.log(e.target.value);

      }} />
    </label>
    <label>
      <p>Задача:</p>
      <textarea value={task} className="border" onChange={(e) => setTask(e.target.value)} />
    </label>
    {isEdit ? <button className="add_button" onClick={edit}>Редактировать</button> : <button className="add_button" onClick={addTodo}>Добавить</button>}
  </div>
}

