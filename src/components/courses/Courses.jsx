import React from 'react'
import { Link } from 'react-router-dom';
import CourseTable from './CourseTable';

const Courses = () => {
  return (
    <div>

      {/* <div >
        <button type="button" class="btn btn-lg btn-primary">
          Add
        </button>
      </div> */}

      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-10">

          </div>
          <div className="col-lg-2">

            <Link to="/courses/addcourse"><button type="button" class="btn btn-primary">
              Add course
            </button></Link>
          </div>
        </div>
      </div>

      <CourseTable />
    </div>
  )
}

export default Courses;

