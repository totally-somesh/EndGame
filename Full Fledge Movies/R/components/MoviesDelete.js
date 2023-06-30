import { useState, useEffect } from "react";
import MoviesService from "../service/MoviesService";
import { useParams, useNavigate } from "react-router-dom";

function MoviesDelete(props) {
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

  let deleteM = () => {
    MoviesService.deleteMovie(formdetails)
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
        <h1> Are You Sure, Boss ?</h1>
        <button type="button" id="btn" onClick={deleteM}>
          Yes !
        </button>
      </form>
    </div>
  );
} //end of MovieEdit Function

export default MoviesDelete;
