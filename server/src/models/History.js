const mongoose = require("mongoose"); 

const historySchema = new mongoose.Schema({

    targetReport:{
        type: Schema.Types.ObjectId,
        ref: "Report",
        required:true,
    },
    message:{
        type: String,
        required: true,
    },
    postedDate:{
        type: Date,
        required: true,
    },
    replierType:{
        type: String,
        required:true,
    },
    userId:{
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    agentId:{
        type: Schema.Types.ObjectId,
        ref: "Admin",
    },
   
})


module.exports = mongoose.model("History" , historySchema);
