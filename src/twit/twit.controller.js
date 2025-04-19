import { Router } from "express";
import { TwitService } from "./twit.service.js";

const router = Router()

const twistService = new TwitService()

router.post('/', (req, res) => {
  const twit = twistService.createTwit(req.body)
  res.status(200).json(twit)
})

export const twitRouter = router