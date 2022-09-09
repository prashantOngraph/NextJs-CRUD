import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/events-search";

import { api } from "../../services/api";

const AllEventsPage = ({ allEvent }) => {
  const router = useRouter();

  function handleSearch(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <>
      <EventSearch onSearch={handleSearch} />
      <EventList items={allEvent} />
    </>
  );
};

export default AllEventsPage;

export async function getServerSideProps(context) {
  const { data } = await api.get("/events");

  return {
    props: {
      allEvent: data.data,
    },
  };
}
