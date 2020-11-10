const db = require('../../dbConfig')

const getAllCustomers = async (req, res) => {
    const { q, client } = db;
    
    try {
        const dbs = await client.query(
            q.Map(
                // iterate each item in result
                q.Paginate(
                    // make paginatable
                    q.Match(
                        // query index
                        q.Index('all_customers') // specify source
                    )
                ),
                // ref => q.Get(ref) // lookup each result by its reference
                q.Lambda("X", q.Get(q.Var("X")))// lookup each result by its reference
            )
        )
        // ok
        res.status(200).json(dbs.data)
    } catch (e) {
        // something went wrong
        res.status(500).json({ error: e.message })
    }
}

module.exports = getAllCustomers;