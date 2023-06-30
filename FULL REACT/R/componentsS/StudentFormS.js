import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StudentServiceS from "../serviceS/StudentServiceS";

function StudentForm() {
  let [formdetails, setformdetails] = useState({
    stid: "",
    stname: "",
    stlocation: "",
    stcourse: "",
  });

  let navigate = useNavigate();

  let addStudent = () => {
    if (
      formdetails.stid === "" ||
      formdetails.stname === "" ||
      formdetails.stlocation === "" ||
      formdetails.stcourse === ""
    ) {
      alert("Please Fill Up Valid Details !");
      return;
    }

    StudentServiceS.insertStudent(formdetails)
      .then((result) => {
        setformdetails({ stid: "", stname: "", stlocation: "", stcourse: "" });
        navigate("/table");
      })
      .catch();
  };

  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="stid">Student ID</label>
          <input
            type="text"
            className="form-control"
            id="stid"
            placeholder="Enter Student ID"
            name="stid"
            value={formdetails.stid}
            onChange={(event) => {
              setformdetails({ ...formdetails, stid: event.target.value });
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="stname">Student Name</label>
          <input
            type="text"
            className="form-control"
            id="stname"
            name="stname"
            placeholder="Enter Student Name"
            value={formdetails.stname}
            onChange={(event) => {
              setformdetails({ ...formdetails, stname: event.target.value });
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="stlocation">Student Location</label>
          <input
            type="text"
            className="form-control"
            id="stlocation"
            name="stlocation"
            placeholder="Enter Location"
            value={formdetails.stlocation}
            onChange={(event) => {
              setformdetails({
                ...formdetails,
                stlocation: event.target.value,
              });
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="stcourse">Student Course</label>
          <input
            type="text"
            className="form-control"
            id="stcourse"
            name="stcourse"
            placeholder="Enter Course"
            value={formdetails.stcourse}
            onChange={(event) => {
              setformdetails({ ...formdetails, stcourse: event.target.value });
            }}
          />
        </div>
        <button type="button" id="btn" name="btn" onClick={addStudent}>
          Add New Employee
        </button>
      </form>
    </div>
  );
} //end of function

export default StudentForm;
