import * as mongoose from 'mongoose';

export const studentSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    // dob: {type: Date, default: Date.now},
    dob: Date,
    email: { type: String, require: true, unique: true },
    address: String,
    gender: String,
}, {
    versionKey: false
});