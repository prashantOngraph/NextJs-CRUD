import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Button from "../ui/button";
import classes from "./event-item.module.css";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import DeleteIcon from "../icons/delete-icon";
import { api } from "../../services/api";

function EventItem(props) {
  const router = useRouter();
  const { data: session, status } = useSession();
  const { title, image, date, location, id } = props;

  const readableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formatAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  const handleDelete = async () => {
    if (session) {
      console.log(session.user.email);
      const data = await api.delete(exploreLink);
    } else {
      alert("Please Sign IN First");
    }
  };

  const handleExploreEvent = () => {
    if (session) {
      router.push(exploreLink);
    } else {
      alert("Please Sign IN First");
    }
  };
  return (
    <li className={classes.item}>
      <img src={image} alt={title} />

      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{readableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon /> <address>{formatAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button onClick={handleExploreEvent}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>{" "}
          </Button>
        </div>
        <div className={classes.actions}>
          <Button onClick={handleDelete}>
            <span> Remove </span>
            <span className={classes.icon}>
              <DeleteIcon />
            </span>{" "}
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
