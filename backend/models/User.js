import mongoose from "mongoose";

const usuarioSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true
    },
    lastname:{
        type: String,
        required: true,
        trim: true
    },
    password:{
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    balance:{
        type: mongoose.Types.Decimal128,
        required: true,
        default: 0.0,
        trim: true
    },
    token:{
        type: String
    },
    confirmado: {
        type: Boolean,
        default: false
    }
}, 
{
    timestamps: true
});

const User = mongoose.model("User", usuarioSchema);
export default User;
