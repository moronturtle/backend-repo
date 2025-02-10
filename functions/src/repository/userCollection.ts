import { db } from "../config/firebaseConfig";
import { User } from "../entities/user";

const USERS_COLLECTION = "USERS";

export const getAllUser = async (): Promise<User[]> => {
  const snapshot = await db.collection(USERS_COLLECTION).get();
  
  return snapshot.docs.map((doc) => doc.data() as User);
};


export const updateUser = async (
  id: string,
  userData: Partial<User>
): Promise<void> => {
  await db.collection(USERS_COLLECTION).doc(id).update(userData);
};
