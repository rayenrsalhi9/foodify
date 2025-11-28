import pool from '../database.js'

const placeOrder = async (req, res) => {

    const userId = req.session.userId
    if (!userId) return res.status(401).json({ error: "User not authenticated" })

    try {

        await pool.query('BEGIN')

        // 1. get user's cart
        const cartResult = await pool.query(`
            select m.id, m.name, m.description, m.price, m.image, m.discount, c.quantity
            from menu m
            join cart c on m.id = c.product_id
            where c.user_id = $1
        `, [userId])

        // 2. user's cart empty -> cancel operation
        const cartItems = cartResult.rows
        if (cartItems.length === 0) {
            await pool.query("ROLLBACK");
            return res.status(400).json({ error: "Your cart is empty" });
        }

        // 3. cart not empty -> calculate total price
        const totalPrice = cartItems.reduce((sum, item) => 
            sum + item.price * (1 - item.discount) * item.quantity, 0
        );

        // create order
        const orderResult = await pool.query(`
            INSERT INTO orders (user_id, total_price)
            VALUES ($1, $2) RETURNING id
        `, [userId, totalPrice]);
     
        // save cart items in order items table
        const orderId = orderResult.rows[0].id;

        if (!orderId) return res.status(401).json({ error: "Order creation failed" })

       for (const item of cartItems) {
            await pool.query(`
                INSERT INTO order_items 
                (order_id, menu_item_id, item_name, quantity, price_at_purchase, discount_applied)
                VALUES ($1, $2, $3, $4, $5, $6)
            `, [orderId, item.id, item.name, item.quantity, item.price * (1 - item.discount), item.discount])
        }

        // clear cart
        await pool.query('DELETE FROM cart WHERE user_id = $1', [userId])

        await pool.query('COMMIT')

        const orderDetails = await pool.query(
            'select total_price, status, created_at from orders where user_id = $1 and id = $2',
             [userId, orderId]
        )
        res.json({success: true, details: orderDetails.rows[0]})

    } catch(err) {
        await pool.query("ROLLBACK");
        console.error("Order creation error:", err);
        res.status(500).json({ error: "Internal server error" });
    }

}

export { placeOrder }