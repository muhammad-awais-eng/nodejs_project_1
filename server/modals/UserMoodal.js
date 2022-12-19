import mongoose from "mongoose"
import crypto from "crypto"


const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        trim: true,
        required: true,
        max: 12,
        unique: true,
        index: true,
        lowercase: true
    },
    name: {
        type: String,
        trim: true,
        required: true,
        max: 32
    },
    email: {
        type: String,
        trim: true,
        required: true,
        max: 32,
        unique: true,
    },
    hashed_password: {
        type: String,

        required: true,
    },
    salt: String,
    role: {
        type: String,
        default: "subscriber"
    },
    resetPasswordLink: {
        data: String,
        default: ''
    }
}, { timestamps: true }
)

///create virtual field password    for example   passwrd

userSchema.virtual('password')
    .set(function (password) {
        this._password = password


        this.salt = this.makeSalt()  //generate salt

        this.hashed_password = this.encryptPassword(password)  // encrypt password 

    })
    .get(function () {
        return this._password
    })




// methods > authenticate , encryptPassword

userSchema.methods = {

    authenticate: function (plainText) {
        return this.encryptPassword(plainText) == this.hashed_password
    },

    encryptPassword: function (password) {
        if (!password) return ''
        try {

            return crypto.createHmac('sha1', this.salt)
                .update(password)
                .digest("hex");

        } catch (err) {
            return ''
        }
    },
    makeSalt: function () {
        return Math.round(new Date().valueOf() * Math.random()) + ''
    }
}

module.exports = mongoose.model("User", userSchema);