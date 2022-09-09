import { useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import EventForm from "../../components/event-form/EventForm";
import { api } from "../../services/api";

const initialState = {
  title: "",
  description: "",
  date: "",
  location: "",
};

function createEvent() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [formValue, setFormValue] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (session) {
      const data = await api.post("/events", formValue);
      setFormValue(initialState);
      router.push("/events");
    } else {
      alert("Please Sign In first");
    }
  };

  return (
    <div style={{ padding: "0% 10% 0% 10%" }}>
      {session ? (
        <EventForm
          formValues={formValue}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      ) : (
        <>
          <h1>Kindly Sign In First</h1>
        </>
      )}
    </div>
  );
}

export default createEvent;
