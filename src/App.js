import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/dashboard/Dashboard';
import Courses from './components/courses/Courses';
import Users from './components/users/Users';
import ChangePassword from './components/channge_pass/ChangePassword';
import AddCourse from './components/courses/AddCourse';
import GuardedRoute from './GuardedRoute';
import CourseSection from './components/courses/CourseSection';
import CourseView from './components/courses/CourseView';
import CourseUsers from './components/courses/CourseUsers';

function App() {

  let trainerLoggedIn = false;
  if (localStorage.getItem('usertype') != null) {
    if (localStorage.getItem('usertype') === 'trainer')
      trainerLoggedIn = true;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<GuardedRoute Component={Dashboard} auth={trainerLoggedIn} />} />
          <Route path='/courses' element={<GuardedRoute Component={Courses} auth={trainerLoggedIn} />} />
          <Route path='/courses/addcourse' element={<GuardedRoute Component={AddCourse} auth={trainerLoggedIn} />} />
          <Route path='/courses/editcourse/:id' element={<GuardedRoute Component={AddCourse} auth={trainerLoggedIn} />} />
          <Route path='/courses/section' element={<GuardedRoute Component={CourseSection} auth={trainerLoggedIn} />} />
          <Route path='/courses/viewcourse' element={<GuardedRoute Component={CourseView} auth={trainerLoggedIn} />} />
          <Route path='/courses/courseusers' element={<GuardedRoute Component={CourseUsers} auth={trainerLoggedIn} />} />
          <Route path='/users' element={<GuardedRoute Component={Users} auth={trainerLoggedIn} />} />
          <Route path='/change-password' element={<GuardedRoute Component={ChangePassword} auth={trainerLoggedIn} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;