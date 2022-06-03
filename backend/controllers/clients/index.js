const clients = require("../../database/clients.json")

module.exports = async (req, res) => {
    try {
        res.send(clients)
    } catch (error) {
        res.send(error.message)
    }
}