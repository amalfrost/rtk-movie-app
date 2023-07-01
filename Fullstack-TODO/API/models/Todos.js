const mongoose = require("mongoose")

const TodoSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    checked: {
        type: Boolean,
        required: true
    }

})

const TodoModel = mongoose.model("Todo", TodoSchema)

module.exports = TodoModel