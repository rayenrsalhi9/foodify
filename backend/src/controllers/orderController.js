import pool from '../database.js'

const placeOrder = async (req, res) => {

    const userId = req.session.userId
    if (!userId) return res.status(401).json({ error: "User not authenticated" })

    try {

        await pool.query('BEGIN')

        // 1. total price calculation
        const totalResult = await pool.query(`
            SELECT SUM((m.price * (1 - m.discount)) * c.quantity) AS total
            FROM cart c
            JOIN menu m ON c.product_id = m.id
            WHERE c.user_id = $1
        `, [userId]);

        const totalPrice = totalResult.rows[0].total || 0

        if (totalPrice === 0) {
            await pool.query("ROLLBACK");
            return res.status(400).json({ error: "Cart is empty" });
        }

        // 2. place order
        const orderResult = await pool.query(`
            INSERT INTO orders (user_id, total_price)
            VALUES ($1, $2)
            RETURNING id, total_price, created_at
        `, [userId, totalPrice]);

        const orderId = orderResult.rows[0].id;

        // put items in "cart" table to "order_items" table
        await pool.query(`
            INSERT INTO order_items (order_id, product_id, quantity, price_at_purchase)
            SELECT
                $1,
                c.product_id,
                c.quantity,
                (m.price * (1 - m.discount)) 
            FROM cart c
            JOIN menu m ON c.product_id = m.id
            WHERE c.user_id = $2
        `, [orderId, userId]);

        // clear cart after placing order
        await pool.query(`DELETE FROM cart WHERE user_id = $1`, [userId]);

        await pool.query("COMMIT");

        // get order details
        const details = await pool.query(`
            SELECT 
                o.id,
                o.total_price,
                o.created_at,
                oi.quantity,
                m.name,
                m.price,
                m.discount,
                oi.price_at_purchase
            FROM orders o
            JOIN order_items oi ON o.id = oi.order_id
            JOIN menu m ON oi.product_id = m.id
            WHERE o.id = $1
        `, [orderId]);

        res.json({ success: true, orderId, details: details.rows })

    } catch(err) {
        await pool.query("ROLLBACK");
        console.error("Order creation error:", err);
        res.status(500).json({ error: "Internal server error" });
    }

}

export { placeOrder }