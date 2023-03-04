import { Document } from 'mongoose';

export interface Post extends Document {
  readonly title: string;
  readonly category: number;
  readonly description: string;
}
