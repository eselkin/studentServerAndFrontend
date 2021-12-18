import React, { useState, useEffect } from "react";
import axios from "axios";

export default function StudentList({ reload, triggerReload }) {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/students").then((response) => {
      if (response.status === 200) {
        console.log(
          "%cStudentList.js line:9 response.data",
          "color: #007acc;",
          response.data
        );
        setStudents(response.data.students);
      }
    });
  }, [reload]);
  return (
    <div key={`RELOAD ${reload}`}>
      {students.map((student, i) => (
        <div
          key={`${student.studentId}-${student.grade}`}
          className={i % 2 ? "odd" : "even"}
        >
          <span>{student.studentId}</span> <span>{student.name}</span>
          <span>
            <strong>{student.grade}</strong>
          </span>
          <button
            onClick={() => {
              axios
                .put(`http://localhost:3000/students/${student.studentId}`, {
                  grade: "A",
                })
                .then(triggerReload());
            }}
          >
            A
          </button>
          <button
            onClick={() => {
              axios
                .put(`http://localhost:3000/students/${student.studentId}`, {
                  grade: "B",
                })
                .then(triggerReload());
            }}
          >
            B
          </button>
          <button
            onClick={() => {
              axios
                .put(`http://localhost:3000/students/${student.studentId}`, {
                  grade: "C",
                })
                .then(triggerReload());
            }}
          >
            C
          </button>
        </div>
      ))}
    </div>
  );
}
