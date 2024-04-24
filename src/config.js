const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb+srv://admin-anushka:Anushka123@cluster0.furok7k.mongodb.net/oldage_home");

connect.then(() => {
    console.log("Database connected successfully");
})
.catch(() => {
    console.log("Database cannot be connected");
});

const loginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        default: 'defaultPassword'
    }
});

const collection =  mongoose.model("users", loginSchema);

module.exports = collection;
