import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function CourseUsers() {

  let [course, setCourse] = useState([]);

  return (
    <div>
    <table className="table table-striped  table-responsive">
      <thead className="bg-primary">
        <tr>
          <th>Sr.No.</th>
          <th colSpan={2}>Action</th>
          <th>Title</th>
          <th>Description</th>
          <th>Image</th>
          <th>MRP</th>
          <th>Price</th>
          <th>Status</th>
          <th>Sections</th>
          <th>View</th>
          <th>Users</th>
        </tr>
      </thead>
      <tbody>
        {course.map((course, i) => {
          return (
            <tr key={i}>
              <td class="font-weight-bold">{i + 1}</td>
              <td>
                <Link to={ "/courses/editcourse/" + course._id }>
                  <button type="button" class="btn btn-primary">
                    <i class="fa-sharp fa-solid fa-pen"></i>
                  </button>
                </Link>
              </td>
              <td>
                <button
                  // onClick={(e) => deleteCourse(e, course._id)}
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target={"#exampleModal" + course._id}
                >
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
              <td>{course.title}</td>
              <td>{course.description}</td>
              <td>{course.imagepath}</td>
              <td>{course.mrp}</td>
              <td>{course.price}</td>
              <td>{course.status}</td>
              <td>
                <Link
                  to="/courses/section"
                  type="button"
                  class="btn btn-primary"
                >
                  Sections
                </Link>
              </td>
              <td>
                <Link
                  to="/courses/viewcourse"
                  type="button"
                  class="btn btn-primary"
                >
                  View
                </Link>
              </td>
              <td>
                <Link
                  to="/courses/users"
                  type="button"
                  class="btn btn-primary"
                >
                  Users
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table></div>
  )
}
