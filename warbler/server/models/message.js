const mongoose = require('mongoose');
const User = require('./user');
const Schema = mongoose.Schema;


const messageSchema = new Schema({
    text: {
        type: String, required: true, maxLength: 160
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {
    timestamps: true
});
messageSchema.pre('remove', async function (next) {
    try {
        //find user
        let user = await User.findById(this.user);
        //remove the id of the messsage from message list
        user.messages.remove(this.id);
        //save that user
        await user.save();
        //return next
        return next()
    }
    catch (e) {
        return next(e);
    }
})
const Message = mongoose.model('Message', messageSchema);
module.exports = Message;
