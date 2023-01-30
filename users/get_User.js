const Users = require("../modals/userModal")
const User = require("../modals/userModal")
const getUser = async (req,res) => {
    const user = await Users.find()
    return res.send(user)
}
module.exports = getUser