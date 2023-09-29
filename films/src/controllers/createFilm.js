const Film = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
    const data = req.body;
    const newFilm = await Film.create(data);
    response(res, 201, newFilm);
}