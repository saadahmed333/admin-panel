const AdminUser = require('../modals/adminUser')

const getAdmin = async (req, res) => {
    try {
        const get = await AdminUser.find();
    console.log(get)
    }
    catch (e) {
        console.log(e)
    }
}
module.exports = getAdmin