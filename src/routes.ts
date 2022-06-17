import { Router } from "express"

const router: Router = Router()

router.get("/list")
router.get("/find/:id")
router.post("/create")
router.delete("/delete")
router.patch("/update")

export default router