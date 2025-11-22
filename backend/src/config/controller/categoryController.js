const db = require('../config/database');

exports.getALL = async (req, res) => {
    try {
        const [categories] = await db.query('SELECT * FROM categories ORDER BY created_at DESC');
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}

