import React, { Component } from "react";

import StudentServiceS from "../serviceS/StudentServiceS";
import { Link } from "react-router-dom";

class StudentTableS extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sarr: [],
    };
  } //end of constructor

  componentDidMount() {
    StudentServiceS.getStudents()
      .then((result) => {
        this.setState({ ...this.state, sarr: result.data });
      })
      .catch(() => {});
  }

  render() {
    return (
      <div>
        <div>
          <img
            src="https://www.sportzcraazy.com/wp-content/uploads/2020/02/ms-dhoni.jpeg"
            class="img-thumbnail"
            alt=""
            width="200px"
            height="200px"
          ></img>
          <img
            src="https://www.sportzcraazy.com/wp-content/uploads/2020/01/ma_56835416_sm.jpg"
            class="img-thumbnail"
            alt=""
            width="220px"
            height="220px"
          ></img>
          <img
            src="https://www.sportzcraazy.com/wp-content/uploads/2020/01/ms_dhoni_1571470098_725x725.jpg"
            class="img-thumbnail"
            alt=""
            width="240px"
            height="240px"
          ></img>
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.D5eb-xmWSaK0dyWvuEOLcQHaEK&pid=Api&P=0&h=180"
            class="img-thumbnail"
            alt=""
            width="270px"
            height="270px"
          ></img>
        </div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Student ID</th>
              <th scope="col">Student Name</th>
              <th scope="col">Address</th>
              <th scope="col">Course</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.sarr.map((student) => (
              <tr key={student.stid}>
                <td>{student.stid}</td>
                <td>{student.stname}</td>
                <td>{student.stlocation}</td>
                <td>{student.stcourse}</td>
                <td>
                  <Link
                    to={`/edit/${student.stid}`}
                    state={{ student: student }}
                  >
                    <button type="button" id="btn" name="btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-bookmark-heart-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13.5zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z" />
                      </svg>
                    </button>
                  </Link>
                  &nbsp;&nbsp;&nbsp;
                  <Link
                    to={`/delete/${student.stid}`}
                    state={{ student: student }}
                  >
                    <button type="button" id="btn" name="btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-bug-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4.978.855a.5.5 0 1 0-.956.29l.41 1.352A4.985 4.985 0 0 0 3 6h10a4.985 4.985 0 0 0-1.432-3.503l.41-1.352a.5.5 0 1 0-.956-.29l-.291.956A4.978 4.978 0 0 0 8 1a4.979 4.979 0 0 0-2.731.811l-.29-.956z" />
                        <path d="M13 6v1H8.5v8.975A5 5 0 0 0 13 11h.5a.5.5 0 0 1 .5.5v.5a.5.5 0 1 0 1 0v-.5a1.5 1.5 0 0 0-1.5-1.5H13V9h1.5a.5.5 0 0 0 0-1H13V7h.5A1.5 1.5 0 0 0 15 5.5V5a.5.5 0 0 0-1 0v.5a.5.5 0 0 1-.5.5H13zm-5.5 9.975V7H3V6h-.5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 0-1 0v.5A1.5 1.5 0 0 0 2.5 7H3v1H1.5a.5.5 0 0 0 0 1H3v1h-.5A1.5 1.5 0 0 0 1 11.5v.5a.5.5 0 1 0 1 0v-.5a.5.5 0 0 1 .5-.5H3a5 5 0 0 0 4.5 4.975z" />
                      </svg>
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br></br>
        <Link to="/form">
          <button type="button" id="btn" name="btn">
            Add New Student
          </button>
        </Link>
      </div>
    );
  }
} //end of Class

export default StudentTableS;
