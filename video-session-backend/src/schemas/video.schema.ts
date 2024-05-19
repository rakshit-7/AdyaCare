import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Video extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  url: string;

  @Prop({ required: true })
  choices: { label: string, nextVideoId: string }[];
}

export const VideoSchema = SchemaFactory.createForClass(Video);
