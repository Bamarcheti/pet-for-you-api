import { configDb } from "../../../../configs/configDb";


export const getAnimals = (_, res) => {
  const q = 'SELECT * FROM animais';

  configDb.query(q, (err, data) => {
    if (err) return res.json(err)

    return res.status(200).json(data)
  })
}