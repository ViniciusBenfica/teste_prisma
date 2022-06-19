import { Router } from "express"
import { list, post } from "./Controller"

const router: Router = Router()

router.get("/list", list)
router.get("/find/:id")
router.post("/create", post)
router.delete("/delete")
router.patch("/update")

export default router