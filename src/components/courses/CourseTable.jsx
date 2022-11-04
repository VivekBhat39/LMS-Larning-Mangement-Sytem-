import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import axios from 'axios'

function CourseTable() {
  
  let [users, setUsers] = useState([]);

  useEffect(()=>{
    axios.get("https://reqres.in/api/users").then(
      (response)=>{
        console.log(response.data)
        setUsers(response.data.data);
      }
    )
  })

  return (
    <Container>
      <Table className="Container fluid" striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
      <br />
      <Table striped bordered hover>
        <thead className='bg-primary'>
          <tr>
            <th>No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, i)=>{
              return(
                <tr key={i}>
                <td>{i + 1}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>{user.avatar}</td>
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