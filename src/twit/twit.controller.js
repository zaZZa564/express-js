import { Router } from "express";
import { TwitService } from "./twit.service.js";
import { authMiddleware } from "../auth.middleware.js";

const router = Router()

const twistService = new TwitService()

router.post('/', authMiddleware, (req, res) => {
  // валидация
  if(req.body?.text?.length < 1) {
    return res.status(404).json({message: "message required"})
  }

  const twit = twistService.createTwit(req.body)
  res.status(201).json(twit)
})

export const twitRouter = router