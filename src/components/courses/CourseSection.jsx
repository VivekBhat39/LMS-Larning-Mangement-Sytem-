import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CourseSection = () => {

    let [courseSection, setCourseCoursesection] = useState([]);
    // useEffect(() => {
    //     axios.get(`http://localhost:8081/trainer/coursesection`)
    //         .then((response) => {
    //             console.log(response.data);
    //             setCourseCoursesection(response.data.data);
    //         console.log(courseSection);
    //         });
    // }, []);
    return (
        <div>

            <div className="container">
                <br />
                <table className="table table-striped table-responsive" >
                    <thead className="bg-primary">
                        <tr>
                            <th>Sr.No.</th>
                            <th colSpan={2}>Action</th>
                            <th>Name</th>
                            <th>Course ID</th>
                            <th>videos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courseSection.map((section, i) => {
                            <tr key={i}>
                            <td class="font-weight-bold">{i + 1}</td>
                                <td>
                                    <button type="button" class="btn btn-primary">
                                        <i class="fa-sharp fa-solid fa-pen"></i>
                                    </button>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-primary">
                                        <i class="fa-solid fa-trash"></i>
                                    </button>
                                </td>
                                <td>{section.name}</td>
                                <td>{section.courseid}</td>
                                <td>videos</td>
                            </tr>
                        })

                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CourseSection;
