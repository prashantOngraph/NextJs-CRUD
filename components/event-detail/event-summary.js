import { useRouter } from "next/router";
import classes from "./event-summary.module.css";
import Button from "../ui/button";
import EditIcon from "../icons/edit-icon";

function EventSummary(props) {
  const router = useRouter();

  const { title, id } = props;

  const handleUpdate = () => {
    router.push(`/events/edit/${id}`);
  };

  return (
    <section className={classes.summary}>
      <div className={classes.actions}>
        <Button onClick={handleUpdate}>
          <span> Edit </span>
          <span className={classes.icon}>
            <EditIcon />
          </span>
        </Button>
      </div>
      <div className={classes.heading}>
        <h1>{title}</h1>
      </div>
    </section>
  );
}

export default EventSummary;
