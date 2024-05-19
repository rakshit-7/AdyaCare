import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Session extends Document {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  currentVideoId: string;

  @Prop({ type: [String], default: [] })
  history: string[];
}

export const SessionSchema = SchemaFactory.createForClass(Session);
