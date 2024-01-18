const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const messageSchema = new Schema(
    {
        sender: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
        content: { type: String, trim: true },
        chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
        readBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
    },
    { timestamps: true }
);

const Barta = mongoose.model("Message", messageSchema);
module.exports = Barta;