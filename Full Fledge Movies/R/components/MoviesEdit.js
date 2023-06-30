import { useState, useEffect } from "react";
import MoviesService from "../service/MoviesService";
import { useParams, useNavigate } from "react-router-dom";

function MoviesEdit(props) {
  let [formdetails, setformdetails] = useState({
    movieid: "",
    mname: "",
    price: "",
  });

  let navigate = useNavigate();

  let params = useParams();

  useEffect(() => {
    MoviesService.getMovieById(params.movieid)
      .then((result) => {
        setformdetails({ ...result.data });
      })
      .catch();
  }, []);

  let editMovie = () => {
    MoviesService.updateMovie(formdetails)
      .then(() => {
        navigate("/table");
      })
      .catch(() => {
        navigate("/table");
      });
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
        <button type="button" id="btn" onClick={editMovie}>
          Submit Movie Details
        </button>
      </form>
    </div>
  );
} //end of MovieEdit Function

export default MoviesEdit;
