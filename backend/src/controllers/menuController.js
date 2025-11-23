import pool from '../database.js'

const getMenu = async (req, res) => {

  const { category, search } = req.query || {}

  const params = 
    category && search ? [`%${category}%`, `%${search}%`] 
    : category ? [`%${category}%`] 
    : search ? [`%${search}%`] 
    : []

  const query =
    category && search
      ? 'SELECT * FROM menu WHERE category ILIKE $1 AND name ILIKE $2 ORDER BY name'
      : category
        ? 'SELECT * FROM menu WHERE category ILIKE $1 ORDER BY name'
        : search
          ? 'SELECT * FROM menu WHERE name ILIKE $1 ORDER BY name'
          : 'SELECT * FROM menu ORDER BY name';

  try {
    const result = await pool.query(query, Object.values(params))
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