import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  username: string;
  email: string;

}

const UserSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
 
});

export default mongoose.model<IUser>('User', UserSchema);
