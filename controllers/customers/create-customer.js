const db = require('../../dbConfig')

const createCustomer = async (req, res) => {
    const { q, client } = db

    const {
        firstName,
        lastName,
        address,
        telephone,
        creditCard
    } = req.body;

    try {
        const dbs = await client.query(
            q.Create(
                q.Collection('customers'),
                {data: {
                    firstName,
                    lastName,
                    address,
                    telephone,
                    creditCard
                }}
            )
        )
        //ok
        res.status(200).json(dbs)

    } catch(e) {
        res.status(500).json({ error: e.message })
    }
}

module.exports = createCustomer;