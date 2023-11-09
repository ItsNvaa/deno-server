import express from "npm:express";
import cors from "npm:cors";
const app = express();

// #Middlewares
app.use(cors());
app.use(express.json());

// #Routes
import usersRoutes from "./app/v1/users/routes/user.route.ts";

app.use("/v1/users", usersRoutes);

export default app;
