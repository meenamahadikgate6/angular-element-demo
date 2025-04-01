import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LikeService {
  constructor(private http: HttpClient) {}

  updateLikeState(liked: boolean) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',  // ✅ Set content type
      'Authorization': 'Bearer YOUR_TOKEN_HERE',  // ✅ Example token (replace with actual token)
      'Custom-Header': '1104'  // ✅ Add any other required headers
    });
  
    return this.http
      .get('https://uatapi.poolbrain.com/config', { headers }) // ✅ Pass headers
      .toPromise();
  }
}
