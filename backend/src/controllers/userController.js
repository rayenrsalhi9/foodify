import pool from '../database.js'

const getUserData = async (req, res) => {

    const userId = req.session.userId
    if (!userId) {
        return res.status(200).json({notSignedIn: true})
    }

    try {

        const user = await pool.query(
            "SELECT username, email, created_at FROM users WHERE id = $1"
            , [userId]
        )
        if (user.rows.length === 0) {
            return res.status(400).json({error: "User not found"})
        }
        return res.status(200).json({user: user.rows[0]})

    } catch (error) {
        console.log(error)
        return res.status(500).json({error: "Internal server error"})
    }
}

export { getUserData }