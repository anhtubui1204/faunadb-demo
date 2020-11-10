const db = require('../../dbConfig')

const updateCustomer = async (req, res) => {
    const { q, client } = db

    const {id} = req.params;

    try {
        const dbs = await client.query(
            q.Update(
                q.Ref(q.Collection('customers'), `${id}`),
                { data: {...req.body} }
            )
        )
         //ok
         res.status(200).json(dbs)
        //  console.log(req.body)

    } catch(e) {
        res.status(500).json({ error: e.message })
    }

}

module.exports = updateCustomer;