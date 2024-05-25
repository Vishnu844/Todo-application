/* eslint-disable react/prop-types */
import "./form.css";
import Button from "../components/Button";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { createTask, updateTask } from "../utils/apiRequests";
import { formatDate } from "../utils/dateFormatter";

const Form = () => {
  let { state } = useLocation();
  let initialFormData = state.initialFormState;
  let formattedDueDate;
  const [formData, setFormData] = useState(initialFormData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const taskCreationRequest = (e) => {
    e.preventDefault();
    createTask(formData)
      .then((res) => alert(res.data.message))
      .catch((err) => alert(err.message));
  };

  const editTaskRequest = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-unused-vars
    let { __v, _id, ...data } = formData;
    updateTask(data, _id)
      .then((res) => alert(res.data.message))
      .catch((err) => alert(err.message));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.action == "create") {
      taskCreationRequest(e);
      setFormData(initialFormData);
    } else {
      editTaskRequest(e);
    }
  };

  if (initialFormData.dueDate) {
    formattedDueDate = formatDate(initialFormData.dueDate);
  } else {
    formattedDueDate = "";
  }

  const modAction =
    state.action.charAt(0).toUpperCase() + state.action.slice(1);

  return (
    <>
      <div className="form-wrapper">
        <div className="form-container">
          <h2>{modAction} Task</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                value={formData?.title}
                type="text"
                id="title"
                name="title"
                required
                placeholder="Enter task title"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                value={formData?.description}
                id="description"
                name="description"
                required
                placeholder="Describe task in few lines"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="status">Status</label>
              <select
                id="status"
                name="status"
                required
                value={formData?.status}
                onChange={handleChange}
              >
                <option value="">--- Select Status ---</option>
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="due-date">Due Date</label>
              <input
                type="date"
                id="due-date"
                name="dueDate"
                required
                value={formattedDueDate}
                onChange={handleChange}
              />
            </div>
            <div className="form-actions">
              {state.action != "" && state.action == "create" ? (
                <Button name={"Create Task"} type={"submit"} />
              ) : (
                <Button name={"Update the task"} type={"submit"} />
              )}
              <Link to="/">
                <Button name={"Go to Task-List"} type={"button"} />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
