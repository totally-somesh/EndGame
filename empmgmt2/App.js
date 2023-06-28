import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { useState, useEffect } from "react";

///import flower from './image/flowers.png'
import EmployeeTable from "./components/EmployeeTable";
function App() {
  /*let emparr=[{empid:1,ename:"Kishori",sal:3456},
  {empid:2,ename:"Rajan",sal:5555},
  {empid:3,ename:"Revati",sal:44444}]*/
  let [emparr, setemparr] = useState([
    { empid: 1, ename: "Kishori", sal: 3456 },
    { empid: 2, ename: "Rajan", sal: 5555 },
    { empid: 3, ename: "Revati", sal: 44444 },
  ]);
  let addEmp = (emp) => {
    console.log("in app add", emp);
    setemparr([
      ...emparr,
      { empid: parseInt(emp.empid), ename: emp.ename, sal: parseInt(emp.sal) },
    ]);
  };
  //this function will be called after every change in the emparr state
  useEffect(() => {
    console.log("in emparr useeffect hook");
    console.log(emparr);
  }, [emparr]);
  return (
    <div className="App">
      <Header></Header>
      {/* <img src={flower}></img>*/}
      <EmployeeTable arr={emparr} insertEmp={addEmp}></EmployeeTable>
    </div>
  );
}

export default App;
