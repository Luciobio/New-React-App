import React,{useState} from 'react';
import './App.css';
import NavBar from './Components/NavBar/navBar.jsx';

const languaje = 'Español'

function App() {

  const [idioma, setIdioma] = useState('spanish')

  const handleSelectChange = (event) => {
    setIdioma(event.target.value);
  }

  return (
    <div className="App">
      <h1>Ejemplito simple React</h1>
      <label>Elegir idioma: </label>
      <select onChange={handleSelectChange}>
        <option value='spanish'>Español</option>
        <option value='english'>English</option>
      </select>
      <NavBar idioma={idioma}/>
    </div>
  );
}

export default App;
