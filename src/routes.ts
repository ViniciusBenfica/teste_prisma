import { Router } from "express"
import { list } from "./Controller"

const router: Router = Router()

router.get("/list", list)
router.get("/find/:id")
router.post("/create")
router.delete("/delete")
router.patch("/update")

export default router