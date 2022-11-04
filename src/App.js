import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Login from './components/Login';
import Cards from './components/Cards'
import Dashboard from './components/dashboard/Dashboard';
import Courses from './components/courses/Courses';
import Users from './components/users/Users';
import ChangePassword from './components/channge_pass/ChangePassword';
import CourseTable from './components/courses/CourseTable';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>

        <Route path='/' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/change-password' element={<ChangePassword/>}/>
        
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;