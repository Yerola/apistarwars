const { catchedAsync } = require("../utils")

module.exports = {
    getCharacters: catchedAsync(require("./getCharacters")),
    createCharacter: catchedAsync(require("./createCharacter")),
    getCharById: catchedAsync(require("./getCharById")),
    deleteById: catchedAsync(require("./deleteById"))
}