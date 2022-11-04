import React, { useState } from 'react'

export default function AddCourse() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mrp, setMrp] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("");

  function saveData(e) {
    e.preventDefault();
    let data = { title, description, mrp, price };
    console.log(data);

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
                      <input name="title" value={title} onChange={(e) => { setTitle(e.target.value) }} type="text" className="form-control form-control-lg" />
                    </div>
                  </div>

                  {/* <hr className="mx-n3" /> */}

                  <div className="row align-items-center py-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Description</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <textarea name="description" value={description} onChange={(e) => { setDescription(e.target.value) }} className="form-control" rows="3" placeholder="Details about Course"></textarea>
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
                      <input name="mrp" value={mrp} onChange={(e) => { setMrp(e.target.value) }} type="text" className="form-control form-control-lg" />
                    </div>
                  </div>

                  {/* <hr className="mx-n3" /> */}

                  <div className="row align-items-center py-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Price</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <input name="price" value={price} onChange={(e) => { setPrice(e.target.value) }} type="text" className="form-control form-control-lg" />
                    </div>
                  </div>

                  {/* <hr class="mx-n3" /> */}

                  <div className="row align-items-center py-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Status</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <input name="price" value={status} onChange={(e) => { setStatus(e.target.value) }} type="text" className="form-control form-control-lg" />
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
