import { useState } from "react";  
import './App.css';
import { AiOutlineCoffee } from 'react-icons/ai'
import { BiCoffeeTogo} from 'react-icons/bi'

function App() {
  const [task, setTask] = useState()
  const [list, setList] = useState([])

  function handleAddTask(){
    const itens= {'task': task,'data': new Date().toLocaleDateString()}
    setList([itens, ...list])
     clear()
  }
  function clear (){
   setTask("")
  }

  return (
    <main className="adicionar">
      <div className="caixaTexto">
        <h1> Adicione tarefas:</h1>
      <input value={task} onChange={ e => setTask(e.target.value)  } />
      <button onClick={handleAddTask}><AiOutlineCoffee size={30} className="coffe"></AiOutlineCoffee></button>
      </div>
         <div className="tarefaas">
        {list.map( t => (
          <div className="lista">
        <p> <BiCoffeeTogo  size={20} className='icon'/> {t.task} </p>
        <span className="dataa">{t.data}</span>
        </div>
        ))}
        </div>
    </main>
  );
}

export default App;