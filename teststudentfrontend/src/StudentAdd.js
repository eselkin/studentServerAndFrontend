import axios from "axios";
import { useState } from "react";

export default function StudentAdd({triggerReload}) {
  const [state, setState] = useState({ name: "", studentId: "" });
  const handleSubmit = () => {
    axios.post("http://localhost:3000/students", { students: [state] });
    triggerReload()
  };
  const handleChange = (evt) => {
    setState({ ...state, [evt.target.name]: evt.target.value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        placeholder="name"
        onChange={handleChange}
      />
      <input
        name="studentId"
        type="text"
        placeholder="studentId"
        onChange={handleChange}
      />
      <button type="submit">Add student</button>
    </form>
  );
}
