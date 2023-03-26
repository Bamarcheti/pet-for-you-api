import express from 'express'
import { getAnimals } from '../modules/animals/useCases/getAnimals/animal'

const router = express.Router()

router.get('/', getAnimals)

export default router