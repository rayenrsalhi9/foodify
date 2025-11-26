import pool from '../database.js'

const getCart = async (req, res) => {

    const userId = req.session.userId

    if (!userId) {
        return res.status(400).json({notSignedIn: true})
    }

    try {

        const cart = await pool.query(`
            select m.id, m.name, m.description, m.price, m.image, m.discount, c.quantity
            from menu m
            join cart c on m.id = c.product_id
            where c.user_id = $1
        `, [userId])

        res.json({data: cart.rows})

    } catch (error) {
        res.status(500).json({error: "Internal server error"})
    }
}

const addItemToCart = async (req, res) => {

    const userId = req.session.userId
    const {productId} = req.body

    if (!userId) {
        return res.status(400).json({notSignedIn: true})
    }

    try {
        
        const product = await pool.query(`
            select * from cart
            where user_id = $1 and product_id = $2  
        `, [userId, productId])

        if (!product.rows[0]) {
            await pool.query(`
                insert into cart (user_id, product_id, quantity)
                values ($1, $2, $3)
            `, [userId, productId, 1])
        } else {
            await pool.query(`
                update cart
                set quantity = quantity + 1
                where user_id = $1 and product_id = $2
            `, [userId, productId])
        }

        res.json({success: true})

    } catch (error) {
        res.status(500).json({error: "Internal server error"})
    }
}

export { getCart, addItemToCart }