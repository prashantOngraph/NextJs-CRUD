import EventItem from "./event-item";
import classes from "./event-list.module.css";

function EventList(props) {
  const { items } = props;
  return (
    <ul className={classes.list}>
      {items?.map((event, idx) => (
        <EventItem
          title={event?.title}
          image={`https://source.unsplash.com/random/200x200?sig=${idx}`}
          date={event?.date}
          location={event?.location}
          id={event?._id}
          key={event?._id}
        />
      ))}
    </ul>
  );
}

export default EventList;
