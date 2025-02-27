import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    email: {
        type:String,
        required: true,
        unique: true
    },
    password: {
        type:String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    lastlogin: {
        type: Date,
        default: Date.now
    },
    isVerified: {
        type : Boolean,
        default: false
    },
    restPasswordToken: String,
    restPasswordExpiresAt: Date,
    verificationToken: String,
    verificationTokenExpiresAt: Date,
},{timestamps: true}//ajoute 2 champs createdAt:date de création du document et updateAt:date de la derniere modification
);
//creer un model Mongoose collection:users et la permession de l'exporter dans d'autre fichiers 
export const User = mongoose.model('User',userSchema);

//gerer l'authentification et la gestion des comptes des utilisateurs 
