const Characters = require("../data");
const {response} = require("../utils");

module.exports = async (req, res) => {
    const {id} = req.query;
    const characters = await Characters.delete(id);
    response(res, 200, characters);
}