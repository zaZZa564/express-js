import express from 'express';
import { twitRouter } from './src/twit/twit.controller.js';
import dotenv from 'dotenv';

dotenv.config()

const app = express();

async function main() {
  app.use(express.json())

  app.use('/api/twits', twitRouter)

  app.all('/*splat', (req, res) => {
    res.status(404).json({message: 'Not found'})
  })

  app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port 3000');
  })
}

main()