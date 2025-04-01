import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private sessionKey = 'userSession';
  sessionData = signal<string | null>(null); // ✅ Signal to track session state

  constructor() {
    this.loadSession(); // ✅ Load session when service initializes
  }

  private loadSession() {
    const storedSession = localStorage.getItem(this.sessionKey);
    if (storedSession) {
      this.sessionData.set(storedSession);
    }
  }

  setSession(value: string) {
    localStorage.setItem(this.sessionKey, value);
    this.sessionData.set(value); // ✅ Update signal value
  }

  clearSession() {
    localStorage.removeItem(this.sessionKey);
    this.sessionData.set(null);
  }
}
