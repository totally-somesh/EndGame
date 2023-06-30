const express = require("express");
const router = express.Router();
const mysqlconnection = require("../db/dbconnect");

router.get("/students", function (request, response) {
  mysqlconnection.query("select * from students", (err, data) => {
    if (err) {
      response
        .status(500)
        .send("---< Problem In 1st Method >--- " + JSON.stringify(err));
    } else {
      response.send(data);
    }
  });
}); //end of 1st Method

router.get("/students/student/:sid", function (request, response) {
  mysqlconnection.query(
    "select * from students where stid=?",
    [request.params.sid],
    (err, data) => {
      if (err) {
        response
          .status(500)
          .send("Problem In 2nd Method >--- " + JSON.stringify(err));
      } else {
        response.send(data[0]);
      }
    }
  );
}); //end of 2nd Method

router.post("/students/student/:sid", function (request, response) {
  var id = request.body.stid;
  var name = request.body.stname;
  var location = request.body.stlocation;
  var course = request.body.stcourse;

  mysqlconnection.query(
    "insert into students values(?,?,?,?)",
    [id, name, location, course],
    (err, data) => {
      if (err) {
        response
          .status(500)
          .send("Problem In 3rd Method >--- " + JSON.stringify(err));
      } else {
        if (data.affectedRows > 0) {
          response.send({ MSG: "Boss, Student Added Succesfully !" });
        } else {
          response.send({ MSG: "BC, Student Insertion Failed Miserably !" });
        }
      }
    }
  );
}); //end of 3rd Method

router.put("/students/student/:sid", function (request, response) {
  var stid = request.body.stid;
  var stname = request.body.stname;
  var stlocation = request.body.stlocation;
  var stcourse = request.body.stcourse;

  mysqlconnection.query(
    "update students set stname=?,stlocation=?,stcourse=? where stid=?",
    [stname, stlocation, stcourse, stid],
    (err, data) => {
      if (err) {
        response
          .status(500)
          .send("Problem In 4th Method >--- " + JSON.stringify(err));
      } else {
        if (data.affectedRows > 0) {
          response.send({ MSG: "Boss, Student Updated Succesfully !" });
        } else {
          response.send({ MSG: "BC, Student Updation Failed Miserably !" });
        }
      }
    }
  );
}); //end of 4th Method

router.delete("/students/student/:sid", function (request, response) {
  mysqlconnection.query(
    "delete from students where stid=?",
    [request.params.sid],
    (err, data) => {
      if (data.affectedRows > 0) {
        response.send({ MSG: "Boss, Student Deleted Succesfully !" });
      } else {
        response.send({ MSG: "BC, Student Deletion Failed Miserably !" });
      }
    }
  );
}); //end of 5th Method

module.exports = router;
