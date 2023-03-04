import * as mongoose from 'mongoose';

export const PostSchema = new mongoose.Schema({
  title: String,
  category: String,
  description: String,
});
