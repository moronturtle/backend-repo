import { RequestHandler } from "express";
import {
  updateUser,
  getAllUser,
} from "../repository/userCollection";

export const fetchUserData: RequestHandler = async (_req, res, next) => {
  try {
    const user = await getAllUser();

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.json(user);
  } catch (error) {
    next(error);
  }
};

export const updateUserData: RequestHandler = async (req, res, next) => {
  try {
    const docId = req.body.docId;
    const userData = req.body;

    await updateUser(docId, userData);
    res.json({ message: "User updated successfully" });
  } catch (error) {
    next(error);
  }
};
