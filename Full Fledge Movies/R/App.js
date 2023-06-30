import { Routes, Route, Navigate } from "react-router-dom";

import MoviesHomeComponent from "./components/MoviesHomeComponent";
import MoviesService from "./service/MoviesService";
import MoviesTable from "./components/MoviesTable";
import MoviesEdit from "./components/MoviesEdit";
import MoviesForm from "./components/MoviesForm";
import MoviesNavBar from "./components/MoviesNavBar";
import MoviesDelete from "./components/MoviesDelete";

function App() {
  return (
    <div>
      {/* <MoviesNavBar /> */}
      <Routes>
        <Route
          path="/"
          element={<Navigate replace to="/home"></Navigate>}
        ></Route>
        <Route path="/home" element={<MoviesHomeComponent />}></Route>
        <Route path="/table" element={<MoviesTable />}></Route>
        <Route path="/form" element={<MoviesForm />}></Route>
        <Route path="/edit/:movieid" element={<MoviesEdit />}></Route>
        <Route path="/delete/:movieid" element={<MoviesDelete />}></Route>
      </Routes>
    </div>
  );
}

export default App;
