import EventList from "../components/events/event-list";
import { api } from "../services/api";

export default function Home({ Events }) {
  return (
    <div>
      <EventList items={Events} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { data } = await api.get("/events");

  return {
    props: {
      Events: data.data,
    },
  };
}
