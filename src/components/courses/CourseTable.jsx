import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
function CourseTable() {
  let [course, setCourse] = useState([]);
  let trainerid = localStorage.getItem("trainerid");
  useEffect(() => {
    axios.get("http://localhost:8081/trainer/course/6364ab916d947aeffe2204b4")
      .then((response) => {
        console.log(response.data);
        setCourse(response.data.data);
      });
  });

  return (
    <div className="container-fluid">
      <br />
      <table className="table table-striped  table-responsive" >
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
                  <button type="button" class="btn btn-primary">
                    <i class="fa-sharp fa-solid fa-pen"></i>
                  </button>
                </td>
                <td>
                  <button
                    onClick={(e) => deleteCourse(e, course._id)}
                    type="button"
                    class="btn btn-primary"
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
                  <Link to='/courses/section' type="button" class="btn btn-primary">
                  Sections
                  </Link>
                </td>
                <td><Link to='/courses/viewcourse' type="button" class="btn btn-primary">
                  View
                  </Link></td>
                <td><Link to='/courses/users' type="button" class="btn btn-primary">
                  Users
                  </Link></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>

  );
}

export default CourseTable;
