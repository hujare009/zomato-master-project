//Library
import express from "express";
import bcrypt  from "bcryptjs";
import jwt from "jsonwebtokens";

//models
import { UserModel } from "../../database/user";


const Router = express.Router();

/*
Route    Sign
Des      Signup with mail and password
Params   Nope
Access   Public
Method   Post
*/

Router.post("/signup", async(req, res) => {
    try{
        const { email, password, fullname, phoneNumber } = req.body.credentials;

        // check email exist or not
        const checkUserByEmail = await UserModel.findOne({ email });
        const checkUserByphone = await UserModel.findOne({ email });

        if ( checkUserByEmail || checkUserByphone ) {
            return res.json({error: "user already exist!!"});
        }
        
        // hash the password (ecrypt) = we need a library (bcrypt.js)
        const bcryptSalt = await bcrypt.genSalt(8);

        const hashedPassword = await bcrypt.hash(password, bcryptSalt);

        //save to DB
        await UserModel.create({...req.body.credentials, password: hashedPassword,});

        //generate JWT auth token
        const token = jwt.sign({ user: { fullname, email },}, "ZomatoApp");

        //return
        return res.status(200).json({ token, status: "success" });
    } 
    catch (error) {
        return res.status(500).json({ error: error.message });
            }
});

export default Router;