import express from "express";
import specialtyRoutes from "./routes/specialtyRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import doctorRoutes from "./routes/doctorRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/specialties", specialtyRoutes);
app.use("/users", userRoutes);
app.use("/doctors", doctorRoutes);
app.use("/appointments", appointmentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
