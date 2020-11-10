const db = require('../../dbConfig')

const deleteCustomer = async (req, res) => {
    const { q, client } = db;

    const {id} = req.params;

    try {
        const dbs = await client.query(
            q.Delete(
                q.Ref(q.Collection('customers'), `${id}`)
            )
        )
        //ok
        res.status(200).json(dbs)
    } catch(e) {
        res.status(500).json({ error: e.message })
    }
}

module.exports = deleteCustomer;