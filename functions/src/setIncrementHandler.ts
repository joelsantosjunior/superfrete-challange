import * as admin from "firebase-admin"
import { COLLECTION } from "./constants"

const db = admin.firestore()

export const setIncrementHandler = async (id: string) => {

  const recordId = id

  const querySnapshot = await db
    .collection(COLLECTION)
    .orderBy("increment_id", "desc")
    .limit(1)
    .get()

  let incrementId = 1
  if (!querySnapshot.empty) {
    const lastRecord = querySnapshot.docs[0].data()
    incrementId = lastRecord.increment_id + 1
  }

  await db
    .collection(COLLECTION)
    .doc(recordId)
    .update({ increment_id: incrementId })
}
