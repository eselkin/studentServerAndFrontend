var express = require("express");
var router = express.Router();
const students = [];
/* GET all students or add students. */
router
  .route("/")
  .get(function (req, res, next) {
    res.json({ students });
  })
  .post(function (req, res, next) {
    console.log("%cindex.js line:11 req.body", "color: #007acc;", req.body);
    students.push(...req.body.students);
    res.json({ students });
  });

/* Get 1 student or update one student */
router
  .route("/:studentId")
  .get(function (req, res, next) {
    const student = students.filter(
      (a) => a.studentId === req.params.studentId
    )[0];
    res.json({ student });
  })
  .put(function (req, res, next) {
    const index = students
      .map((student) => student.studentId)
      .indexOf(req.params.studentId);
    students[index].grade = req.body.grade;
    res.json({ students });
  });
module.exports = router;
