import React from 'react'
import { useState } from 'react';

const [data,setData] = useState([]);

function getData(){
    axios
    .get(`http://localhost:8081/trainer/course/${trainerId}`)
    .then((response) => {
      console.log(response.data);
      setData(response.data.data);
    });
}


export default function EditCourse() {
  return (
    <div>
        <Button onClick={() => getData()}>Update</Button>
    </div>
  )
}
