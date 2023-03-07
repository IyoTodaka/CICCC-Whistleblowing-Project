const mongoose = require("mongoose"); 

const reportSchema = new mongoose.Schema({

    createdUser:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required:true,
    },
    targetedDepartment:{
        type: String,

    },
    targetedName:{
        type: String,

    },
    subject:{
        type: String,
        required:true,
    },
    category:{
        type: String,
        required:true,
    },
    description:{
        type: String,
        required:true,
    },
    file:{
        type: Buffer,
        
    },
    postedDate:{
        type: Date,
        required:true,
    },
    updatedDate:{
        type: Date,
        required:true,
    },
    dueDate:{
        type: Date,
        required:true,
    },
    status:{
        type: String,
        required:true,
    },
   
   
})


module.exports = mongoose.model("Report" , reportSchema);