import { Controller, Get, Query } from '@nestjs/common';
import { VideoService } from './video.service';

@Controller('videos')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @Get('search')
  async searchVideos(@Query('query') query: string) {
    return this.videoService.fetchVideos(query);
  }
}
