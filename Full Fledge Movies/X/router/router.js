const express = require("express");
const router = express.Router();
const mysqlconnection = require("../db/dbconnect");

router.get("/movies", function (request, response) {
  mysqlconnection.query("select * from movies", (err, data) => {
    if (err) {
      response.status(500).send("Error In 1st Method" + JSON.stringify(err));
    } else {
      response.send(data);
    }
  });
}); //end of 1st Method

router.get("/movies/movie/:movieid", function (request, response) {
  var movieid = request.params.movieid;

  mysqlconnection.query(
    "select * from movies where movieid = ?",
    [movieid],
    (err, data) => {
      if (err) {
        response.status(500).send("Error In 1st Method" + JSON.stringify(err));
      } else {
        response.send(data[0]);
      }
    }
  );
}); //end of 2nd Method

router.post("/movies/movie/:movieid", function (request, response) {
  var movieid = request.body.movieid;
  var mname = request.body.mname;
  var price = request.body.price;
  mysqlconnection.query(
    "insert into movies values(?,?,?)",
    [movieid, mname, price],
    (err, data) => {
      if (err) {
        response.status(500).send("Error In 1st Method" + JSON.stringify(err));
      } else {
        if (data.affectedRows > 0) {
          response.send({ MSG: "Movie Inserted Succesfully ! " });
        } else {
          response.send({ MSG: "Movie Insertion Failed ! " });
        }
      }
    }
  );
}); //end of 3rd Method

router.put("/movies/movie/:movieid", function (request, response) {
  var movieid = request.body.movieid;
  var mname = request.body.mname;
  var price = request.body.price;

  mysqlconnection.query(
    "update movies set mname=?,price=? where movieid=?",
    [mname, price, movieid],
    (err, data) => {
      if (err) {
        response.status(500).send("Error In 1st Method" + JSON.stringify(err));
      } else {
        if (data.affectedRows > 0) {
          response.send({ MSG: "Movie Updated Succesfully ! " });
        } else {
          response.send({ MSG: "Movie Updation Failed ! " });
        }
      }
    }
  );
}); //end of 4th Method

router.delete("/movies/movie/:movieid", function (request, response) {
  var movieid = request.params.movieid;

  mysqlconnection.query(
    "delete from movies where movieid=?",
    [movieid],
    (err, data) => {
      if (err) {
        response.status(500).send("Error In 1st Method" + JSON.stringify(err));
      } else {
        if (data.affectedRows > 0) {
          response.send({ MSG: "Movie Deleted Succesfully ! " });
        } else {
          response.send({ MSG: "Movie Deletion Failed ! " });
        }
      }
    }
  );
}); //end of 5th Method

module.exports = router;
