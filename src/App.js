// import Button from "./Button";
// import styles from "./App.module.css";
import {useState} from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event)=> setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();  
    if (toDo === ""){
      return;
    }
    setToDos(currentArray => [toDo, ...toDos]);
    setToDo("");
  }
  // console.log(toDos);
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form>
        <input
          onChange={onChange}
          value={toDo} 
          type="text" 
          placeholder="Write your to do..."
        />
        <button onClick={onSubmit}>Add To Do</button>
      </form>
      <hr/>
      <div>
        {toDos.map((item, index)=> <li key={index}>{item}</li>) }
      </div>
    </div>
  );
}

export default App;
