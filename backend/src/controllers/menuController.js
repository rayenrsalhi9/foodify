import pool from '../database.js'

const getMenu = async (req, res) => {

  const { category } = req.query
  console.log(category)

  const params = category ? { category } : {}
  const query = 
    category 
    ? 'SELECT * FROM menu WHERE category like $1 order by name' 
    : 'SELECT * FROM menu order by name'

  try {
    const result = await pool.query(query, Object.values(params))
    console.log(result.rows)
    res.json(result.rows)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Internal server error' })
  }
}

const getMenuPreview = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM menu where discount = 0 LIMIT 6')
        res.json(result.rows)
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: 'Internal server error' })
    }
}

const getOffers = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM menu WHERE discount > 0 AND discount < 0.2')
    res.json(result.rows)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Internal server error' })
  }
}

const getSpecialOffers = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM menu WHERE discount >= 0.2 LIMIT 1')
    res.json(result.rows)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Internal server error' })
  }
}

export { getMenu, getMenuPreview, getOffers, getSpecialOffers }