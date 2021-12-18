import logo from "./logo.svg";
import "./App.css";
import StudentAdd from "./StudentAdd";
import StudentList from "./StudentList";
import { useState } from "react";

function App() {
  const [reload, setReload] = useState(0);
  const triggerReload = () => {
    setReload((reload) => reload + 1);
  };
  return (
    <div className="App">
      <StudentAdd triggerReload={triggerReload} />
      <br />
      <StudentList reload={reload} triggerReload={triggerReload} />
    </div>
  );
}

export default App;
