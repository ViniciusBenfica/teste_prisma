import { Router } from "express"
import { listUser, findUser, createUser, userDelete } from "./Controller"

const router: Router = Router()

router.get("/list", listUser)
router.get("/find/:id", findUser)
router.post("/create", createUser)
router.delete("/delete", userDelete)
router.patch("/update")

export default router