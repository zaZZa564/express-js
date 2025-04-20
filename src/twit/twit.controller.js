import { Router } from "express";
import { TwitService } from "./twit.service.js";

const router = Router()

const twistService = new TwitService()

router.post('/', (req, res) => {
  // валидация
  if(req.body?.text?.length < 1) {
    return res.status(404).json({message: "message required"})
  }

  console.log(req.headers)

  const twit = twistService.createTwit(req.body)
  res.status(200).json(twit)
})

export const twitRouter = router