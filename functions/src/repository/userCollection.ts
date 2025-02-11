import { db } from "../config/firebaseConfig";
import { User } from "../entities/user";

const USERS_COLLECTION = "USERS";

export const getUserById = async (id: string): Promise<User | null> => {
  const doc = await db.collection(USERS_COLLECTION).doc(id).get();
  return doc.exists ? (doc.data() as User) : null;
};

export const getAllUser = async (): Promise<User[]> => {
  return (await db.collection(USERS_COLLECTION).get()).docs.map((doc) => {
    const { docId: storedDocId, ...userData } = doc.data() as User;
    return { ...userData, docId: storedDocId ?? doc.id };
  });
};


export const updateUser = async (
  id: string,
  userData: Partial<User>
): Promise<void> => {
  await db.collection(USERS_COLLECTION).doc(id).update(userData);
};
