import { useState } from "react"
import Task from "./Task"


function Home() {

  const [tasks, setTasks] = useState([])
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")



  const submitHandler = (e) => {
    e.preventDefault();

    setTasks([...tasks, {
      title,
      description
    }])
    setTitle("")
    setDescription("")

  }

  const deleteTask = (index) => {
    const newArray = tasks.filter((val, i) => {
      return i != index
    })
    setTasks(newArray)
  }
  return (
    <div className="container">
      <h1>DAILY GOALS</h1>
      <form
        onSubmit={submitHandler}
      >
        <input type="text" placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea name="" id="" placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button className="add">Add</button>
      </form>
      {tasks.length > 0 ? (
        tasks.map((item, index) => {
          return (
            <Task key={index} title={item.title}
              description={item.description} deleteTask={deleteTask} index={index}
            />
          )
        }))
        : (<h1>No Task Left</h1>)
      }


    </div>
  )
}

export default Home