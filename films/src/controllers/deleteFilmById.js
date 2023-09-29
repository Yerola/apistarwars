const Films = require("../data");
const {response} = require("../utils");

module.exports = async (req, res) => {
    const {id} = req.query;
    const filmDel = await Films.delete(id);
    response(res, 200, filmDel);
}