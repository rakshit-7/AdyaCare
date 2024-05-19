import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SessionService } from './session.service';

@Controller('sessions')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}
  @Post()
  create(@Body() session: Session) {
    return this.sessionService.create(session);
  }

  @Get()
  findAll() {
    return this.sessionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sessionService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() session: Session) {
    return this.sessionService.update(id, session);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.sessionService.delete(id);
  }

  @Get('current/:userId')
  getCurrentVideo(@Param('userId') userId: string) {
    return this.sessionService.getCurrentVideo(userId);
  }

  @Put('current/:userId')
  updateCurrentVideo(@Param('userId') userId: string, @Body('currentVideoId') currentVideoId: string) {
    return this.sessionService.updateCurrentVideo(userId, currentVideoId);
  }
}
