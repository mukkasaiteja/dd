import './App.css';
import Retrieve from './Components/Retrive';
import Interface from './Components/Interface';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <div>
        <nav className='navbar'>
          <h2>Saiteja Dictionary App</h2>
        </nav>
      </div>
      <div>
      <BrowserRouter>
     <Routes>
      <Route path='/' element={<Interface/>}/>
      <Route path='/Retrieve' element={<Retrieve/>}/>
     </Routes>
     </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

