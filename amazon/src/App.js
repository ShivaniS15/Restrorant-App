import { Routes,Route,BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header/>
      <Routes>
      <Route path="/header" element={<Header/>}/>
      {/* <Route path="/" >
      
      <Home/>
      </Route> */}

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
