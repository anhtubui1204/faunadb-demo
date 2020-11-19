const { q, client } = require('../../dbConfig')

const logout = async (req, res) => {
    try {
        const dbs = await client.query(q.Logout(true))

        //ok
        res.status(200).json(dbs)

    } catch(e) {
        res.status(500).json({ error: e.message })
    }
}

module.exports = logout;