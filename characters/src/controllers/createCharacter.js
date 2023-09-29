const Character = require("../data");
const { response } = require("../utils")

module.exports = async (req, res) => {
    const data = req.body;
    const newCharacter = await Character.create(data);
    response(res, 201, newCharacter)
}