const mongoose =  require("mongoose")

const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    fathersName: { type: String, required: true },
    dob: { type: Date, required: true },
    gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
    maritalStatus: { type: String, enum: ['Single', 'Married', 'Divorced', 'Widowed'], required: true },
    bloodGroup: { type: String, required: true },
    officialContact: { type: String, required: true },
    officialEmailId: { type: String, required: true, unique: true },
    personalContactNumber: { type: String, required: true },
    personalEmailId: { type: String, required: true, unique: true },
    currentAddress: {
        fullAddress: { type: String, required: true },
        district: { type: String, required: true },
        state: { type: String, required: true },
        pincode: { type: String, required: true },
    },
    permanentAddress: {
        fullAddress: { type: String, required: true },
        district: { type: String, required: true },
        state: { type: String, required: true },
        pincode: { type: String, required: true },
    },
    dateOfJoining: { type: Date, required: true },
    department: { type: String, required: true },
    designation: { type: String, required: true },
    panNumber: { type: String, required: true },
    bankDetails: {
        accountNumber: { type: String, required: true },
        bankName: { type: String, required: true },
        branch: { type: String, required: true },
    },
    password: { type: String, required: true },
    age: { type: Number, required: true }
});



const UserModel = mongoose.model("user", userSchema)

module.exports = {
    UserModel
}