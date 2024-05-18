const db = require('../db/instance')

async function addlistEvent(req, res) {
    const {user_id} = req.params;
    const {title, description, due_date} = req.body;
    try{
        const result = await db.query(
            `INSERT INTO tasks (user_id, title, description, due_date) VALUES ($1, $2, $3, $4) RETURNING *`, [user_id, title, description, due_date]
        );
        const addlistEvent = result.rows[0];
        res.status(200).json(addlistEvent);
    }
    catch(error){
        res.status(500).json({ error: error.message });
    }
}

async function getlistEvent(req, res) {
    const { user_id } = req.params;
    try {
        const result = await db.query(
            `SELECT * FROM tasks WHERE user_id = $1 ORDER BY due_date`, 
            [user_id]
        );

        const getlistEvent = result.rows;
        res.status(200).json(getlistEvent);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function deletelistEvent(req, res) {
    const {user_id} = req.params;
    const { title, description, due_date } = req.body;
    try{
        const result = await db.query(
            `DELETE FROM tasks WHERE user_id = $1 AND title = $2 AND description = $3 AND due_date = $4`, [user_id, title, description, due_date]
        );
        const deletelistEvent = result.rows[0];
        res.status(200).json(deletelistEvent)
    }
    catch(error){
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    addlistEvent,
    getlistEvent,
    deletelistEvent,
}