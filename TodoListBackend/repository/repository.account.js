const db = require('../db/instance')

async function signupEvent(req, res){
    const { username, password } = req.body;

    try{
        const result = await db.query(
            `INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *`, [username, password]
        );
        const signupEvent = result.rows[0];
        res.status(200).json(signupEvent);
    }
    catch(error){
        res.status(500).json(error.message);
    }
}

async function loginEvent(req, res){
    const { username, password } = req.body;

    try {
        const result = await db.query(
            `SELECT * FROM users WHERE username = $1 AND password = $2`, [username, password]
        );
        
        if (result.rows.length === 0) {
            res.status(404).json({ error: "No Account Found" });
        } else {
            const loginEvent = result.rows[0];
            res.status(200).json(loginEvent);
        }
    }
    catch(error){
        res.status(500).json(error.message);
    }
}

module.exports = {
    signupEvent,
    loginEvent,
};