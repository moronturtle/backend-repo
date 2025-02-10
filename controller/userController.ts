import { RequestHandler } from "express";
import { getUserById, updateUser } from "../repository/userCollection";

export const fetchUserData: RequestHandler = async (req, res, next) => {
  try {
    const userId = req.body.userId;
    const user = await getUserById(userId);

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
    const userId = req.body.userId;
    const userData = req.body;

    await updateUser(userId, userData);
    res.json({ message: "User updated successfully" });
  } catch (error) {
    next(error);
  }
};

