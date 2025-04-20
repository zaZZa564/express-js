import express from 'express';
import { twitRouter } from './src/twit/twit.controller.js';
import dotenv from 'dotenv';

dotenv.config()

const app = express();

async function main() {
	app.use(express.json())

	//получение ошибки
	app.get('/error', (req, res) => {
		throw new Error('This is a test error')
	})

	// роутеры
	app.use('/api/twits', twitRouter)
	app.all('/*splat', (req, res) => {
		res.status(404).json({ message: 'Not found' })
	})

	app.listen(process.env.PORT || 3000, () => {
		console.log('Server is running on port 3000')
	})

	// обработка ошибок
	app.use((err, req, res, next) => {
		console.error(err.stack)
		res.status(500).send('Что-то пошло не так')
	})
}

main()