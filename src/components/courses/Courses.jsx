import React from 'react'
import CourseTable from './CourseTable';

const Courses = () => {
  return (
    <div>  
      <div>
        <button type="button" class="btn btn-primary ms-2 ">
          Add
        </button>
      </div>
      <CourseTable/>
    </div>
  )
}

export default Courses;

