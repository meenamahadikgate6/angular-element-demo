import { booleanAttribute, Component, inject, input, output } from '@angular/core';
import { LikeService } from './services/like.service';
import { SessionService } from './services/session.service';

@Component({
  selector: 'app-like-button',
  standalone: true, 
  imports: [],
  templateUrl: './like-button.component.html',
})
export class LikeButtonComponent {
  liked = input(false, { transform: booleanAttribute });
  likedChange = output<boolean>();

  private sessionService: SessionService; // ✅ Declare as a class property

  constructor(private likeService: LikeService) {
    this.sessionService = inject(SessionService); // ✅ Inject inside the constructor
  }
  clearCache(){
    this.sessionService.clearSession();
  }

  async toggleLike() {
    this.sessionService.setSession('user123'); // ✅ Store session data
    console.log('Session stored:', this.sessionService.sessionData()); // ✅ Correct usage

    const newLikedState = !this.liked();
    try {
      await this.likeService.updateLikeState(newLikedState);
      this.likedChange.emit(newLikedState);
    } catch (error) {
      console.error('Error updating like state:', error);
    }
  }
}
