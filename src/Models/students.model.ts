export interface Students {
    firstname: String,
    lastname: String,
    dob: Date,
    email: { type: String, require: true, unique: true },
    address: String,
    gender: Boolean,
}