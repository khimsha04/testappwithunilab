import './App.css';
import Logo from './Images/Logo.png';
function App() {
  return (
      <div className="App">
        <img className='logoTodo' src={Logo} alt={'imagasde'}/>
        <h1 className='firstPageH1'>Keep Track Of Daily Tasks In Life</h1>
        <button className='firstPageButton'>Get Started</button>
      </div>
  );
}

export default App;
