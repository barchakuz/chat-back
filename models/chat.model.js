const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    chatName : {
        type: String,
        trim: true,
        required: true,
    },
    isGroupChat : {
        type: Boolean,
        default: false
    },
    users: [{
        type : Schema.Types.ObjectId,
        ref: "user"
    }],
    groupAdmin: {
        type: Schema.Types.ObjectId,
        ref: "user"
    }
},{
    timestamps: true
})

const Chat = mongoose.model('chat', messageSchema);
module.exports = Chat;