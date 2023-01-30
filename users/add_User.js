
const User = require('../modals/userModal')
const addUser = async (req,res) => {
    const user = new User(req.body);
    console.log("req.body", req.body);
    const response = await user.save();
    console.log("res", response);
    res.status(200).send({ status: 200, message: "user added successfuly" });
}
module.exports = addUser