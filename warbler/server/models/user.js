const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    email: {
        type: String, required: true, unique: true
    },
    username: {
        type: String, required: true, unique: true
    },
    password: {
        type: String, required: true
    },
    profileImageUrl: String,
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message"
        }
    ]
});
//add a prehook to hash password passed in userSchema 
userSchema.pre('save', async function (next) {
    try {
        if (!this.isModified('password')) {
            return next();
        } else {
            let hashedPassword = await bcrypt.hash(this.password, 10);
            this.password = hashedPassword;
            return next();
        }
    }
    catch (err) {
        return next(err);
    }
});
userSchema.methods.comparePassword = async function (candidatePassword, next) {
    try {
        let isMatched = await bcrypt.compare(candidatePassword, this.password);
        return isMatched;
    }
    catch (err) {
        return next(err);
    }
}
const User = mongoose.model('User', userSchema);



//add a method to compare a password passed in to the password store


module.exports = User;
