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
