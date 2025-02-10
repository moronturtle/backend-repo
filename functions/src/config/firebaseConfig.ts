import admin from "firebase-admin";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

if (!process.env.MY_FIRE_CREDENTIALS) {
  throw new Error("FIREBASE_CREDENTIALS NOT FOUND");
}

const serviceAccount = require(path.resolve(process.env.MY_FIRE_CREDENTIALS));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const db = admin.firestore();
