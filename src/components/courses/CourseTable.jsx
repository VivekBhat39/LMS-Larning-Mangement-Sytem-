import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import axios from 'axios'

function CourseTable() {
  
  let [course, setCourse] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:8081/trainer/course/6364ab916d947aeffe2204b4").then(
      (response)=>{
        console.log(response.data)
        setCourse(response.data.data);
      }
    )
  })

  return (
    <Container>
      <br />
      <Table striped bordered hover>
        <thead className='bg-primary'>
          <tr>
            <th colSpan={2}>Action</th>
            <th>Sr.No.</th>
            <th>Trainer Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Image</th>
            <th>MRP</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            course.map((course, i)=>{
              return(
                <tr key={i}>
                  <td><button type="button" class="btn btn-primary"><i class="fa-sharp fa-solid fa-pen"></i></button></td>
                  <td><button type="button" class="btn btn-primary"><i class="fa-solid fa-trash"></i></button></td>
                  <td>{i + 1}</td>
                  <td>{course.trainerid}</td>
                  <td>{course.title}</td>
                  <td>{course.description}</td>
                  <td>{course.imagepath}</td>
                  <td>{course.mrp}</td>
                  <td>{course.price}</td>
                  <td>{course.status}</td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </Container>
  );
}

export default CourseTable;