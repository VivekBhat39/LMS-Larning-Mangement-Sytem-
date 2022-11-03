import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Login from './components/Login';
import Cards from './components/Cards'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header />
      <Cards />
      <Routes>

        <Route path='/' element={<Login/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/' element={<Login/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;