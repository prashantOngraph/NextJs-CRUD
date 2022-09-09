import Event from "../../../model/eventModel";
import dbConnection from "../../../services/dbConnection";

dbConnection();

export default async function handlers(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const events = await Event.find();
        res.status(200).json({ success: true, data: events });
      } catch (error) {
        console.log(error);
        res.status(500).json({ sucess: false, error });
      }
      break;
    case "POST":
      try {
        const { title, description, date, location, image } = req.body;
        if ((!title, !description)) throw "invalid data entered";
        const data = await Event.create({
          title,
          description,
          date,
          location,
          image,
        });
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
