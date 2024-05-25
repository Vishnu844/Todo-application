import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskForm from "./pages/TaskForm";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<TaskForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
