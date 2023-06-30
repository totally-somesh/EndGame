import { useEffect, useState } from "react";
import StudentServiceS from "../serviceS/StudentServiceS";
import { useNavigate, useParams } from "react-router-dom";

function StudentEdit() {
  let [formdetails, setformdetails] = useState({
    stid: "",
    stname: "",
    stlocation: "",
    stcourse: "",
  });

  let navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    console.log("in useEffect");
    StudentServiceS.getStudentsById(params.sid)
      .then((result) => {
        setformdetails({ ...result.data });
      })
      .catch(() => {});
  }, []);

  let updateStudentS = () => {
    StudentServiceS.updateStudent(formdetails)
      .then(() => {
        navigate("/table");
      })
      .catch((err) => {
        console.log(
          "---< Huge Problem In updateStudentS Method StudentEditS >--- ",
          err
        );
      });
  }; //end of updateEmployee()

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
            readOnly
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
        <button type="button" id="btn" name="btn" onClick={updateStudentS}>
          Update Details
        </button>
      </form>
    </div>
  );
} //end of function

export default StudentEdit;
