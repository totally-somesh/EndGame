import axios from "axios";
const baseurl = "http://localhost:3007";

class StudentServiceS {
  getStudents() {
    return axios.get(baseurl + "/students");
  }

  getStudentsById(id) {
    return axios.get(baseurl + "/students/student/" + id);
  }

  insertStudent(student) {
    return axios.post(baseurl + "/students/student/" + student.stid, student);
  }

  updateStudent(student) {
    return axios.put(baseurl + "/students/student/" + student.stid, student);
  }

  deleteStudent(student) {
    return axios.delete(baseurl + "/students/student/" + student.stid, student);
  }
}

export default new StudentServiceS();
