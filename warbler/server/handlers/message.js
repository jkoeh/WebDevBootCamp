const db = require('../models');

exports.createMessage = async function (req, res, next) {
    try {
        //create message
        let message = await db.Message.create({
            text: req.body.text,
            user: req.params.id
        });
        //find user
        let user = await db.User.findById(req.params.id);
        //push message id to the user
        user.messages.push(message._id);
        await user.save();
        //populate message with user
        let foundMessage = await db.Message.findById(message._id).populate("user", {
            username: true,
            profileImageUrl: true
        });
        //return 
        return res.status(200).json(foundMessage);
    }
    catch (e) {
        return next(e)
    }
}
//route /api/users/:id/messages/:message_id
exports.getMessage = async function (req, res, next) {
    try {
        //get message 
        var message = await db.Message.findById(req.params.message_id);
        if (message) {
            return res.status(200).json(message);
        }
        else {
            return next({
                status: 404, message: `message ${req.params.message_id} does not exist.`
            })
        }
    }
    catch (e) {
        return next(e);
    }
}
exports.deleteMessage = async function (req, res, next) {
    try {
        var message = await db.Message.findById(req.params.message_id);
        if (message) {
            await message.remove();
            return res.status(200).json(message);
        }
        else {
            return next({
                status: 404, message: `message ${req.params.message_id} does not exist.`
            });
        }
    }
    catch (e) {
        return next(e);
    }
}