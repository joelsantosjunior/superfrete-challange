import * as admin from "firebase-admin"
import { Request, Response } from "express"
import { COLLECTION } from "./constants"

admin.initializeApp()
const db = admin.firestore()

export const addItemHandler = async (req: Request, res: Response) => {
  try {
    const { name } = req.body

    if (!name) {
      res.status(400).send("Name is required")
      return
    }

    const newRecord = await db
      .collection(COLLECTION)
      .add({ name, increment_id: null })

    res.status(201).send(`New Record Created: ${newRecord.id}`)
  } catch (error) {
    res
      .status(500)
      .send("Error Creating New Record: " + (error as Error).message)
  }
}
