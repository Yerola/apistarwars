const { Schema } = require("mongoose");

const statesGender = ["Male", "Female", "n/a", "hermaphrodite", "none" ];

const  characterSchema = new Schema({
    _id: String,
    name: String,
    height: String,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_year: String,
    gender: {type: String, enum: statesGender},
    homeworld: {type: String, ref:"Planet" },
    films: [ {type: String, ref: "Film" } ]
})

characterSchema.statics.list = async function () {
    return await this.find()
        .populate("homeworld",["_id","name"])
        .populate("films",["_id", "title"]);
};

characterSchema.statics.get = async function (id) {
    return await this.findById(id)
        .populate("homeworld",["_id","name"])
        .populate("films",["_id", "title"]);
}

characterSchema.statics.insert = async function(character){
    return this.create(character);
}

characterSchema.statics.delete = async function(_id){
    return this.findByIdAndDelete(_id)
}

module.exports = characterSchema;