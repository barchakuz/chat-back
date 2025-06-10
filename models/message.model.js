const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    sender:{
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    constent:{
        type : String
    },
    chatId: {
        type: Schema.Types.ObjectId,
        ref: 'chat'
    }
},{
    timestamps: true
})

const Message = mongoose.model('message', messageSchema);

module.exports = Message;