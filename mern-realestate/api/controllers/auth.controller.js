import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs';

export const signup = async (req, res) => {

    const { username, email, password } = req.body;
    // encyrpting password using bcrypt js and having 10 values
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });

    try {
        await newUser.save();
        // 201 - something is bing created
        res.status(201).json("User created successfully");

    } catch (error) {
        res.status(500).json(error.message);
    }


}