const db = require('../../data/db-config');


const getAll = () => {
  // DO YOUR MAGIC
  return db('Cars')

}

const getById = () => {
  // DO YOUR MAGIC
  return db('Cars').where('id', id).first()

}

const create = () => {
  // DO YOUR MAGIC
  const [id] =  db('Cars').insert(Cars, ['vin', 'make', 'model','mileage', 'title', 'transmission']) // in postgres this would work
  return create(id)

}

module.exports = {
  getAll,
  getById,
  create,

}