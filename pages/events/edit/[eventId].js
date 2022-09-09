import { useState } from "react";
import { useRouter } from "next/router";
import EventForm from "../../../components/event-form/EventForm";
import { api } from "../../../services/api";

const initialState = {
  title: "",
  description: "",
  date: "",
  location: "",
};

function editEvent({ event }) {
  const router = useRouter();
  const [formValue, setFormValue] = useState(event);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await api.put(`/events/${event._id}`, formValue);
    setFormValue(initialState);
    router.push("/events");
  };

  return (
    <div style={{ padding: "0% 10% 0% 10%" }}>
      <EventForm
        formValues={formValue}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        edit={true}
      />
    </div>
  );
}

export default editEvent;

export async function getServerSideProps(context) {
  const { query } = context;
  const { eventId } = query;
  const { data } = await api.get(`/events/${eventId}`);

  return {
    props: {
      event: data.data,
    },
  };
}
