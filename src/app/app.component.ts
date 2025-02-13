import { Component, ViewEncapsulation } from '@angular/core';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  // userMessage: string = '';
  // botResponse: string = '';

  // constructor(private chatService: ChatService) {}

  // sendMessage() {
  //   if (this.userMessage.trim() === '') return;

  //   this.chatService.sendMessage(this.userMessage).subscribe(
  //     (response) => {
  //       this.botResponse = response.choices[0].message.content;
  //     },
  //     (error) => {
  //       console.error('API Error:', error);
  //       this.botResponse = 'Error fetching response.';
  //     }
  //   );
  // }
}