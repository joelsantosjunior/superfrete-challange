import { onRequest } from "firebase-functions/v2/https"
import { onDocumentCreated } from "firebase-functions/v2/firestore"
import { addItemHandler } from "./addItemHandler"
import { setIncrementHandler } from "./setIncrementHandler"

export const addItem = onRequest(addItemHandler)

export const setIncrementid = onDocumentCreated(
  "items/{itemId}",
  (event) => setIncrementHandler(event.data?.id as string)
)
