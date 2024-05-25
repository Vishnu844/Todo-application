/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Button from "./Button";
import "./card.css";
import { deleteTask } from "../utils/apiRequests";

const Card = ({ task }) => {
  const formattedDueDate = new Date(task.dueDate).toLocaleDateString("en-GB");
  const deleteAction = () => {
    deleteTask(task._id)
      .then((res) =>
        alert(res.data.message + "! Please reload the page for changes")
      )
      .catch((err) => alert(err.message));

    console.log("delete");
  };
  return (
    <>
      <div className="task-card">
        <header>{task.title}</header>
        <div className="task-content">
          <p>{task.description}</p>
          <p className="status">{task.status}</p>
          <p className="due-date">{formattedDueDate}</p>
        </div>
        <footer>
          <Link to="/form" state={{ initialFormState: task, action: "update" }}>
            <Button name={"Update"} type={"submit"} />
          </Link>
          <Button
            name={"Delete"}
            className={"delete"}
            type={"button"}
            action={deleteAction}
          />
        </footer>
      </div>
    </>
  );
};

export default Card;
