import { Session } from './session.model';
export declare class SessionService {
    private sessions;
    create(session: Session): Session;
    findAll(): Session[];
    findOne(id: string): Session;
    update(id: string, session: Session): Session;
    delete(id: string): void;
    getCurrentVideo(userId: string): Session;
    updateCurrentVideo(userId: string, currentVideoId: string): Session;
}
