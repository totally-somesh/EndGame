import React, { Component } from "react";
import { Link } from "react-router-dom";
import MoviesService from "../service/MoviesService";

class MoviesTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      marr: [],
    };
  } //end of constructor

  componentDidMount() {
    MoviesService.getAllMovies()
      .then((result) => {
        this.setState({ ...this.state, marr: result.data });
      })
      .catch();
  } //end of componentDidMount

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Movie ID</th>
              <th>Movie Name</th>
              <th>Movie Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.marr.map((movie) => (
              <tr key={movie.movieid}>
                <td>{movie.movieid}</td>
                <td>{movie.mname}</td>
                <td>{movie.price}</td>
                <td>
                  <Link to={`/edit/${movie.movieid}`} state={{ movie: movie }}>
                    <button type="button" id="btn" name="btn">
                      Edit
                    </button>
                  </Link>
                  &nbsp;&nbsp;&nbsp;
                  <Link
                    to={`/delete/${movie.movieid}`}
                    state={{ movie: movie }}
                  >
                    <button type="button" id="btn" name="btn">
                      Delete
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/form">
          <button type="button" id="btn" name="btn">
            Add Movie
          </button>
        </Link>
      </div>
    );
  }
} //end of class

export default MoviesTable;
