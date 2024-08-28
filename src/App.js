import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router,Routes,Route,} from 'react-router-dom';
import AdminLayout from './components/AdminLayout';
import DefaultDB from './components/DefaultDB';
import Login from './components/Login';

function App() {
  return (
    <Router> 
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/Login' element={<Login/>}></Route>
          <Route path='/admin' element={AdminLayout}>
            <Route path='DefaultDB' element={DefaultDB}></Route>
          </Route>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
