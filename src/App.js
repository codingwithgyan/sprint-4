import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { SearchPage } from './components/SearchPage';

function App() {
  return (
    <div className="App">
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/search' element={<SearchPage/>} />
    </Routes>
    </div>
  );
}

export default App;
