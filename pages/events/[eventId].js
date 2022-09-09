import { getSession } from "next-auth/react";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import { api } from "../../services/api";

const EventDetailPage = ({ event }) => {
  if (!event) {
    return <p>No event found</p>;
  }

  return (
    <>
      {event.auth ? (
        <>
          <EventSummary title={event.data.title} id={event.data._id} />
          <EventLogistics
            date={event.data.date}
            address={event.data.location}
            image={event.data.image}
            imageAlt={event.data.title}
          />
          <EventContent>
            <p>{event.data.description}</p>
          </EventContent>
        </>
      ) : (
        <h1>Kindly Sign In First</h1>
      )}
    </>
  );
};

export default EventDetailPage;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const { query } = context;
  const { eventId } = query;
  const { data } = await api.get(`/events/${eventId}`);

  return {
    props: {
      event: session
        ? { data: data.data, auth: true }
        : { auth: false, message: "Please Login first" },
    },
  };
}
