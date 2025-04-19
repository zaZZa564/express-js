import express from 'express';
import { twitRouter } from './src/twit/twit.controller.js';

const app = express();

async function main() {
  app.use(express.json())

  app.use('/api/twits', twitRouter)

  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  })
}

main()