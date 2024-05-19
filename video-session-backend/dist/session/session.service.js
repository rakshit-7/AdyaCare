"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionService = void 0;
const common_1 = require("@nestjs/common");
let SessionService = class SessionService {
    constructor() {
        this.sessions = [];
    }
    create(session) {
        this.sessions.push(session);
        return session;
    }
    findAll() {
        return this.sessions;
    }
    findOne(id) {
        return this.sessions.find(session => session.id === id);
    }
    update(id, session) {
        const index = this.sessions.findIndex(s => s.id === id);
        if (index === -1) {
            throw new Error('Session not found');
        }
        this.sessions[index] = session;
        return session;
    }
    delete(id) {
        this.sessions = this.sessions.filter(session => session.id !== id);
    }
    getCurrentVideo(userId) {
        return this.sessions.find(session => session.userId === userId);
    }
    updateCurrentVideo(userId, currentVideoId) {
        const session = this.sessions.find(session => session.userId === userId);
        if (!session) {
            throw new Error('Session not found');
        }
        session.currentVideoId = currentVideoId;
        return session;
    }
};
exports.SessionService = SessionService;
exports.SessionService = SessionService = __decorate([
    (0, common_1.Injectable)()
], SessionService);
//# sourceMappingURL=session.service.js.map