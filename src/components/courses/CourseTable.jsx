import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "bootstrap";
function CourseTable() {
  let [course, setCourse] = useState([]);
  let trainerId = localStorage.getItem("trainerid")

  useEffect(() => {
    load();
  }, []);

  function load() {
    axios
      .get(`http://localhost:8081/trainer/course/${trainerId}`)
      .then((response) => {
        console.log(response.data);
        setCourse(response.data.data);
      });
  }

  function deleteCourse(e, _id) {
    e.preventDefault();
    axios
      .delete(`http://localhost:8081/trainer/course/`, { data: { id: _id } })
      .then((res) => {
        load();
      });
  }

  return (
    <div className="container-fluid">
      <br />
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
                    to="/courses/courseusers"
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
      </table>

      {/* <!-- Modal --> */}
      {course.map((c) => {
        return (
          <div
            class="modal fade"
            id={"exampleModal" + c._id}
            tabindex="-1"
            aria-labelledby={c._id}
            aria-hidden="true"
            key={c._id}
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id={c._id}>
                    Confirm Delete
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <h5>Do You want confirm Delete {c.title}</h5>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={(e) => deleteCourse(e, c._id)}
                    type="button"
                    data-bs-dismiss="modal"
                    class="btn btn-primary"
                  >
                    Yes, Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CourseTable;
