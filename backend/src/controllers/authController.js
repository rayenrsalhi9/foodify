import pool from '../database.js'
import validator from 'validator'
import bcrypt from 'bcryptjs'

const signUserIn = async (req, res) => {
    
    const {email, password} = req.body

    if (!email || !password) {
        return res.status(400).json({error: "All fields are required"})
    }

    if (!validator.isEmail(email)) {
        return res.status(400).json({error: "Invalid email format"})
    }

    try {

        const user = await pool.query(
            "SELECT * FROM users WHERE email = $1"
            , [email]
        )
        if (user.rows.length === 0) {
            return res.status(400).json({error: "User not found"})
        }

        const hashedPassword = user.rows[0].password
        const isPasswordValid = await bcrypt.compare(password, hashedPassword)
        if (!isPasswordValid) {
            return res.status(400).json({error: "Invalid password"})
        }

        req.session.userId = user.rows[0].id
        return res.status(200).json({success: true, message: "User signed in successfully"})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: "Internal server error"})
    }

}

const signUserUp = async (req, res) => {

    const {username, email, password, confirmPassword} = req.body

    if (!username || !email || !password || !confirmPassword) {
        return res.status(400).json({error: "All fields are required"})
    }

    if (!validator.isEmail(email)) {
        return res.status(400).json({error: "Invalid email format"})
    }

    if (password !== confirmPassword) {
        return res.status(400).json({error: "Passwords do not match"})
    }

    const usernameRegex = /^[a-zA-Z0-9_-]{1,20}$/
    if (!usernameRegex.test(username)) {
        return res.status(400).json({error: "Username must be 1-20 characters long and contain only letters, numbers, _, and -"})
    }

    try {

        const doesUserExist = await pool.query(
            "SELECT * FROM users WHERE username = $1 and email = $2"
            , [username, email]
        )
        if (doesUserExist.rows.length > 0) {
            return res.status(400).json({error: "Username or email already exists"})
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await pool.query(
            "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id"
            , [username, email, hashedPassword]
        )
        req.session.userId = newUser.rows[0].id
        return res.status(201).json({success: true, message: "User registered successfully"})

    } catch (error) {
        console.log(error)
        return res.status(500).json({error: "Internal server error"})
    }
}

export { signUserIn, signUserUp }