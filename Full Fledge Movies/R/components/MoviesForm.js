import { useState, useEffect } from "react";
import MoviesService from "../service/MoviesService";
import { useNavigate } from "react-router-dom";

function MoviesForm(props) {
  let [formdetails, setformdetails] = useState({
    movieid: "",
    mname: "",
    price: "",
  });

  let navigate = useNavigate();

  let addMovie = () => {
    if (
      formdetails.movieid === "" ||
      formdetails.mname === "" ||
      formdetails.price === ""
    ) {
      alert("Please Fill Up Valid Details ! ");
      return;
    }

    MoviesService.insertMovie(formdetails)
      .then((result) => {
        setformdetails({ movieid: "", mname: "", price: "" });
        navigate("/table");
      })
      .catch();
  };

  return (
    <div>
      <form>
        Movie ID :{" "}
        <input
          type="text"
          id="movieid"
          name="movieid"
          value={formdetails.movieid}
          onChange={(event) => {
            setformdetails({ ...formdetails, movieid: event.target.value });
          }}
        />
        <br></br>
        Movie Name :{" "}
        <input
          type="text"
          id="mname"
          name="mname"
          value={formdetails.mname}
          onChange={(event) => {
            setformdetails({ ...formdetails, mname: event.target.value });
          }}
        />
        <br></br>
        Movie Price :{" "}
        <input
          type="text"
          id="price"
          name="price"
          value={formdetails.price}
          onChange={(event) => {
            setformdetails({ ...formdetails, price: event.target.value });
          }}
        />
        <br></br>
        <button type="button" id="btn" onClick={addMovie}>
          Add New Movie
        </button>
      </form>
    </div>
  );
} //end of MoviesForm

export default MoviesForm;
