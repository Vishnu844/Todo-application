import { Link } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";
// import data from "../data.json";
import "./home.css";
import { getAllTasks } from "../utils/apiRequests";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const initialFormState = {
    title: "",
    description: "",
    status: "",
    dueDate: "",
  };

  useEffect(() => {
    getAllTasks()
      .then((res) => {
        setTasks(res.data.data);
        setLoading(false);
      })
      .catch((err) => alert(err.message));
  }, []);

  return (
    <>
      <Link to="/form" state={{ initialFormState, action: "create" }}>
        <Button name={"Create a Task"} className={"create-task"} type={"button"}/>
      </Link>
      <div className="tasks">
        {loading ? (
          <Loader />
        ) : (
          tasks.map((task) => {
            return <Card key={task._id} task={task} />;
          })
        )}
      </div>
    </>
  );
};

export default Home;
