import mongoose, {Schema, Document, Model} from "mongoose";

interface IUser extends Document {
    name : string;
    email : string;
    password : string;
}

const userSchema : Schema<IUser> = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    }
})

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', userSchema);

export default User;