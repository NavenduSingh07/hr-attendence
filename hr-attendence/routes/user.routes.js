const {Router} = require("express");

const userController =  Router();
const bcrypt = require('bcrypt');

var jwt = require('jsonwebtoken');
const {UserModel} = require("../models/UserModel")


userController.post("/signup", async (req, res) => {
    const {
        fullName,
        fathersName,
        dob,
        gender,
        maritalStatus,
        bloodGroup,
        officialContact,
        officialEmailId,
        personalContactNumber,
        personalEmailId,
        currentAddress,
        permanentAddress,
        dateOfJoining,
        department,
        designation,
        panNumber,
        bankDetails,
        password,
        age
    } = req.body;

    bcrypt.hash(password, 5, async function (err, hash) {
        if (err) {
            console.log("Something went wrong. Please try again later.");
            return res.status(500).json({ error: "Internal Server Error" });
        }

        const user = new UserModel({
            fullName,
            fathersName,
            dob,
            gender,
            maritalStatus,
            bloodGroup,
            officialContact,
            officialEmailId,
            personalContactNumber,
            personalEmailId,
            currentAddress,
            permanentAddress,
            dateOfJoining,
            department,
            designation,
            panNumber,
            bankDetails,
            password: hash,
            age
        });

        try {
            await user.save();
            return res.status(201).json({ msg: "Signup successful" });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: "Something went wrong. Please try again." });
        }
    });
});
userController.post("/login", async(req, res)=>{
    const {email, password} = req.body;
    const user = await UserModel.findOne({email})
    const hash = user.password
    bcrypt.compare(password, hash, function(err, result) {
        if(err){
            console.log("something went wrong..plz try again later")
        }
        if(result){
            const token =  jwt.sign({userId : user._id }, process.env.JWT_SECRET)
            res.send({message: "login successful", token})
           //res.send(token);
        }
        else{
            console.log("invalid credentials, plz signup if u havnt")
        }
        // result == true
    });
    
    
})

module.exports = {
    userController
}