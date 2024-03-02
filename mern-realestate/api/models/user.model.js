import mongoose, { mongo } from 'mongoose'
import { constrainedMemory } from 'process';

const usersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
},
    { timestamps: true });

const User = mongoose.model(User, usersSchema);

export default User;