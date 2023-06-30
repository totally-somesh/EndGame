import { Routes, Route, Navigate } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import StudentEditS from "./componentsS/StudentEditS";
import StudentFormS from "./componentsS/StudentFormS";
import StudentTableS from "./componentsS/StudentTableS";
import HomeComponentS from "./componentsS/HomeComponentS";
import NavBarS from "./componentsS/NavBarS";
import StudentDeleteS from "./componentsS/StudentDeleteS";

function App() {
  return (
    <div>
      <NavBarS />
      <Routes>
        <Route
          path="/"
          element={<Navigate replace to="/home"></Navigate>}
        ></Route>
        <Route path="/home" element={<HomeComponentS />}></Route>
        <Route path="/form" element={<StudentFormS />}></Route>
        <Route path="/table" element={<StudentTableS />}></Route>
        <Route path="/edit/:sid" element={<StudentEditS />}></Route>
        <Route path="/delete/:sid" element={<StudentDeleteS />}></Route>
      </Routes>
    </div>
  );
} //end of main function

export default App;
