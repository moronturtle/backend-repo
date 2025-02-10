import * as functions from "firebase-functions";
import express from "express";
import userRoutes from "./routes/userRoutes";

const app = express();
app.use("/users", userRoutes);

export const api = functions.https.onRequest(app);