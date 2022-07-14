import React, { useEffect ,useState} from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

const API =  ("http://localhost:8004/poems")

function App() {
  const [poems, setPoems] = useState([])
  const [isHide, setIsHide] = useState([])

  function addNewPoem(poem) {
    const oneMorePoem = [...poems, poem]
    setPoems(oneMorePoem)
  }

  function handleHideClick(event) {
    setIsHide(!isHide)
  }

  useEffect(() => {
    fetch(API)
    .then((res) => res.json())
    .then(data => setPoems(data))
  }, [])


  return (
    <div className="app">
      <div className="sidebar">
        <button onClick={handleHideClick}>Show/hide new poem form</button>
        {isHide ? <NewPoemForm addNewPoem={addNewPoem}/> : null}
      </div>
      <PoemsContainer poems={poems}/>
    </div>
  );
}

export default App;
