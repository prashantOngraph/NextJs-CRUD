import Router from "next/router";
import classes from "./EventForm.module.css";

function EventForm({ handleChange, handleSubmit, formValues }) {
  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit}>
        <div className={classes.row}>
          <div className={classes.col25}>
            <label className={classes.label} htmlFor="title">
              Title
            </label>
          </div>
          <div className={classes.col75}>
            <input
              onChange={(e) => handleChange(e)}
              type="text"
              className={classes.inputText}
              id="title"
              name="title"
              placeholder="Title"
              value={formValues.title}
            />
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.col25}>
            <label className={classes.label} htmlFor="location">
              Location
            </label>
          </div>
          <div className={classes.col75}>
            <input
              onChange={(e) => handleChange(e)}
              className={classes.inputText}
              type="text"
              id="location"
              name="location"
              placeholder="Your location"
              value={formValues.location}
            />
          </div>
        </div>

        <div className={classes.row}>
          <div className={classes.col25}>
            <label className={classes.label} htmlFor="date">
              Date
            </label>
          </div>
          <div className={classes.col75}>
            <input
              onChange={(e) => handleChange(e)}
              className={classes.inputText}
              type="date"
              id="date"
              name="date"
              value={formValues.date}
            />
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.col25}>
            <label className={classes.label} htmlFor="description">
              Description
            </label>
          </div>
          <div className={classes.col75}>
            <textarea
              className={classes.inputText}
              id="description"
              name="description"
              placeholder="Write something.."
              style={{ height: "200px" }}
              onChange={(e) => handleChange(e)}
              value={formValues.description}
            ></textarea>
          </div>
        </div>
        <div className={classes.row}>
          <button onClick={() => Router.back()} className={classes.submitbtn}>
            Cancel
          </button>
          <input className={classes.submitbtn} type="submit" />
        </div>
      </form>
    </div>
  );
}

export default EventForm;
