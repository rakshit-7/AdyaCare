import { Injectable } from '@nestjs/common';
import { Session } from './session.model'; // Ensure the correct path

@Injectable()
export class SessionService {
  private sessions: Session[] = [];

  // Create a session
  create(session: Session) {
    this.sessions.push(session);
    return session;
  }

  // Find all sessions
  findAll(): Session[] {
    return this.sessions;
  }

  // Find one session by ID
  findOne(id: string): Session {
    return this.sessions.find(session => session.id === id);
  }

  // Update a session by ID
  update(id: string, session: Session): Session {
    const index = this.sessions.findIndex(s => s.id === id);
    if (index === -1) {
      throw new Error('Session not found');
    }
    this.sessions[index] = session;
    return session;
  }

  // Delete a session by ID
  delete(id: string): void {
    this.sessions = this.sessions.filter(session => session.id !== id);
  }

  // Get the current video for a user
  getCurrentVideo(userId: string): Session {
    return this.sessions.find(session => session.userId === userId);
  }

  // Update the current video for a user
  updateCurrentVideo(userId: string, currentVideoId: string): Session {
    const session = this.sessions.find(session => session.userId === userId);
    if (!session) {
      throw new Error('Session not found');
    }
    session.currentVideoId = currentVideoId;
    return session;
  }
}
