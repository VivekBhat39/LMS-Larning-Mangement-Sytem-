import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function AddCourse() {

  const [data, setData] = useState({
    title: "",
    description: "",
    mrp: "",
    price: "",
    status: ""
  })

  function saveData(e) {
    e.preventDefault();
    console.log(data);
    axios.put("http://localhost:8081/trainer/course").then((res) => {
      // console.log(res.data.data);
      setData(res.data.data);
    })
  }
  // useEffect(() => {
  //   saveData();
  // }, [])


  function handleChange(e) {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  }

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
                      <input name="title" value={data.title} onChange={(e) => { handleChange(e) }} type="text" className="form-control form-control-lg" />
                    </div>
                  </div>

                  {/* <hr className="mx-n3" /> */}

                  <div className="row align-items-center py-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Description</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <textarea name="description" value={data.description} onChange={(e) => { handleChange(e) }} className="form-control" rows="3" placeholder="Details about Course"></textarea>
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
                      <input name="mrp" value={data.mrp} onChange={(e) => { handleChange(e) }} type="text" className="form-control form-control-lg" />
                    </div>
                  </div>

                  {/* <hr className="mx-n3" /> */}

                  <div className="row align-items-center py-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Price</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <input name="price" value={data.price} onChange={(e) => { handleChange(e) }} type="text" className="form-control form-control-lg" />
                    </div>
                  </div>

                  {/* <hr class="mx-n3" /> */}

                  <div className="row align-items-center py-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Status</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <input name="status" value={data.status} onChange={(e) => { handleChange(e) }} type="text" className="form-control form-control-lg" />
                    </div>
                  </div>

                  <div className="px-5 py-4">
                    <button type="submit" onClick={(e) => { saveData(e) }} className="btn btn-primary btn-lg">Submit</button>
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
