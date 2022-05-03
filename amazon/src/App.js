import { Routes,Route,BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route path="/" >
      <Header/>
      <Home/>
      </Route>

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
