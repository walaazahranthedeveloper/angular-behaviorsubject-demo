import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { CounterService } from './counter.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  template: `
  <div class="container">
  <h1>Counter App with BehaviorSubject</h1>
  <h2>{{ counter$ | async }}</h2>

  <button (click)="increment()" class="btn btn-primary">Increment</button>
  <button (click)="decrement()" class="btn btn-danger">Decrement</button>
  <button (click)="reset()" class="btn btn-secondary">Reset</button>
</div>

  `,
  styleUrls:['./app.component.css'],
})
export class AppComponent {
 // Observable for the counter value
 counter$: Observable<number>;

 constructor(private counterService: CounterService) {
   // Subscribe to the BehaviorSubject to get the current counter value
   this.counter$ = this.counterService.counter$;
 }

 // Increment the counter
 increment() {
   this.counterService.increment();
 }

 // Decrement the counter
 decrement() {
   this.counterService.decrement();
 }

 // Reset the counter
 reset() {
   this.counterService.reset();
 }
}
