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

  let deleteStudent = () => {
    StudentServiceS.deleteStudent(formdetails)
      .then(() => {
        navigate("/table");
      })
      .catch(() => {});
  }; //end of updateEmployee()

  return (
    <div>
      <h1>Are You Sure ? </h1>
      <br></br>
      <button type="button" id="btn" name="btn" onClick={deleteStudent}>
        Yes Boss !
      </button>
    </div>
  );
} //end of function

export default StudentEdit;
