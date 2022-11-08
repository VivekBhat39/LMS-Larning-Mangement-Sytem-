import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

export default function EditCourse() {

  let navigate = useNavigate()
  
  let trainerId = localStorage.getItem("trainerid")

  const [data, setData] = useState({
    trainerid: trainerId,
    title: "",
    description: "",
    image: "",
    mrp: "",
    price: "",
    status: ""
  })


  const [course, setCourse] = useState([])

  axios.get(`http://localhost:8081/trainer/course/${trainerId}`)
      .then((response) => {
        console.log(response.data);
        setCourse(response.data.data)
      });

//   function saveData(e) {
//     e.preventDefault();
//     if (!data.title || !data.description || !data.mrp || !data.price || !data.status) {
//       alert("All fields are mandatory")
//     } else {

//       //   alert("Submited Sucessfully")
//       // console.log(data);
//       axios.put("http://localhost:8081/trainer/course", data)
//         .then((res) => {
//           console.log(res.data);
//           // setData(res.data.data);
//         });
//     }
//     navigate("/courses")
//   }

  // useEffect(() => {
  //   saveData();
  // }, [])

  return (
    <div className='Container-fluid'>
      <section className="vh-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center mt-3">
            <div className="col-xl-9">

              <h1 className="text-dark mb-3">Add Course</h1>

              <div className="card border border-dark" style={{ borderRadius: "15px" }}>
                <div className="card-body">

                  <div className="row align-items-center pt-4">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Title</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <input name="title" value={data.title} onChange={(e) => handleChange(e)} type="text" className="form-control form-control-lg" />
                      {/* <input name="title" value={data.title} onChange={handleChange} type="text" className="form-control form-control-lg" /> */}
                    </div>
                  </div>

                  {/* <hr className="mx-n3" /> */}

                  <div className="row align-items-center py-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Description</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <textarea name="description" value={data.description} onChange={(e) => handleChange(e)} className="form-control" rows="3" placeholder="Details about Course"></textarea>
                    </div>
                  </div>

                  {/* <hr class="mx-n3" /> */}

                  <div className="row align-items-center py-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Upload Image</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <input className="form-control form-control-lg" id="formFileLg" type="file" />
                      <div className="small text-muted mt-2">Upload your Course image or any other relevant file. Max file
                        size 5 MB</div>
                    </div>
                  </div>

                  {/* <hr className="mx-n3" /> */}

                  <div className="row align-items-center py-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">MRP</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <input name="mrp" value={data.mrp} onChange={handleChange} type="number" className="form-control form-control-lg" />
                    </div>
                  </div>

                  {/* <hr className="mx-n3" /> */}

                  <div className="row align-items-center py-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Price</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <input name="price" value={data.price} onChange={(e) => handleChange(e)} type="number" className="form-control form-control-lg" />
                    </div>
                  </div>

                  {/* <hr class="mx-n3" /> */}

                  <div className="row align-items-center py-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Status</h6>
                    </div>
                    <div className="col-md-9 pe-5">

                      <select name="status" value={data.status} onChange={(e) => handleChange(e)} class="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                      </select>
                    </div>
                  </div>

                  <div className="px-5 py-4">
                    <button type="submit" onClick={(e) => saveData(e)} className="btn btn-primary btn-lg">Submit</button>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
