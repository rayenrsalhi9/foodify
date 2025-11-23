import pool from '../database.js'

const getMenu = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM menu order by name')
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

export { getMenu, getOffers, getSpecialOffers }