const { Schema } = require("mongoose");

const planetSchema = new Schema({
    _id: String,
    name: String,
    rotation_period: Number,
    orbital_period: Number,
    diameter: Number,
    climate: String,
    gravity: String,
    terrain: String,
    surface_water: Number,
    residents: [{type: String, ref: "Character"}],
    films: [{type: String, ref: "Film"}]
})

planetSchema.statics.list = async function () {
    return await this.find()
        .populate("residents",["_id","name"])
        .populate("films",["_id", "title"]);
};

planetSchema.statics.get = async function (id) {
    return await this.findById(id)
        .populate("residents",["_id","name"])
        .populate("films",["_id", "title"]);
}

planetSchema.statics.insert = async function(film) {
    return this.create(film);
}

planetSchema.statics.delete = async function(_id){
    return this.findByIdAndDelete(_id)
}

module.exports = planetSchema;