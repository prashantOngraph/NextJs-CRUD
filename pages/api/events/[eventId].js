import Event from "../../../model/eventModel";
import dbConnection from "../../../services/dbConnection";

dbConnection();

export default async function handlers(req, res) {
  const { method, query } = req;

  switch (method) {
    case "GET":
      try {
        const events = await Event.findById({ _id: query.eventId });
        res.status(200).json({ success: true, data: events });
      } catch (error) {
        console.log(error);
        res.status(500).json({ sucess: false, error });
      }
      break;
    case "PUT":
      try {
        const { title, description, date, location, image } = req.body;
        if ((!title, !description)) throw "invalid data entered";
        const events = await Event.findByIdAndUpdate(
          { _id: query.eventId },
          { title, description, date, location, image }
        );
        res.status(200).json({ success: true, data: events });
      } catch (error) {
        console.log(error);
        res.status(500).json({ sucess: false, error });
      }
      break;
    case "DELETE":
      try {
        const data = await Event.findByIdAndDelete({ _id: query.eventId });
        res.status(200).json({
          success: true,
          data,
        });
      } catch (error) {
        console.log(error);
        res.status(500).json({ sucess: false, error });
      }
  }
}
