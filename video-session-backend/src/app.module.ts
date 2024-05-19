import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SessionModule } from './session/session.module';
import { VideoModule } from './video/video.module';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://localhost/nest?retryWrites=true&w=majority',
    ),
    VideoModule,
    SessionModule,
  ],
})
export class AppModule {}
