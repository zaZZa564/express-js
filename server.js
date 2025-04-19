import express from 'express';

const app = express();

async function main() {
  app.use(express.json())

  app.use('/api/twit', (req, res) => {
    res.status(200).json({
      message: 'success'
    })
  })

  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  })
}

main()