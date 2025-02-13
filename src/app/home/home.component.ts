import { Component, signal } from '@angular/core';
import { catchError } from 'rxjs';
import { ChatService } from '../services/chat.service';
import { marked } from 'marked'; // Import marked to parse Markdown

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  inputValue = signal('');
  questions = signal<string[]>([]);
  answers = signal<string[]>([]);
  loading = signal<'idle' | 'loading' | 'success' | 'error'>('idle');

  constructor(private chatService: ChatService) {}

  submitQuestion() {
    const question = this.inputValue();
    if (question.trim()) {
      this.questions.update(qs => [...qs, question]);
  
      this.loading.set('loading');
  
      this.chatService.sendMessage(question)
        .pipe(
          catchError(err => {
            console.error('Error occurred: ', err);
            this.loading.set('error');
            
            // Push error message to answers array
            this.answers.update(ans => [...ans, 'An error occurred, please try again!']);
  
            return [];  // Return an empty array to prevent further handling
          })
        )
        .subscribe(response => {
          if (response && response.choices && response.choices.length > 0) {
            const answer = response.choices[0].message.content;
  
            const parsedAnswer = marked(answer);
            if (typeof parsedAnswer === 'string') {
              this.answers.update(ans => [...ans, parsedAnswer]);
            } else {
              console.error('Parsed answer is not a string:', parsedAnswer);
            }
  
            this.loading.set('success');
          } else {
            this.loading.set('error');
            // Push error message if response is empty or malformed
            this.answers.update(ans => [...ans, 'An error occurred']);
          }
        });
        
      this.inputValue.set('');
    }
  }
  

  handleChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.inputValue.set(target.value);
  }
}
