import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiUrl = 'https://openrouter.ai/api/v1/chat/completions';
  private apiKey = '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';

  constructor(private http: HttpClient) {}

  sendMessage(message: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json'
    });

    const body = {
      model: 'google/gemma-2-9b-it:free',
      messages: [{ role: 'user', content: message }]
    };

    return this.http.post(this.apiUrl, body, { headers });
  }
}
