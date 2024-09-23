import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  // BehaviorSubject to manage the counter state
  private counterSubject = new BehaviorSubject<number>(0);

  // Observable for the current counter value
  counter$ = this.counterSubject.asObservable();

  // Get the current value of the counter
  getCounterValue(): number {
    return this.counterSubject.value;
  }

  // Increment the counter value
  increment(): void {
    this.counterSubject.next(this.counterSubject.value + 1);
  }

  // Decrement the counter value
  decrement(): void {
    this.counterSubject.next(this.counterSubject.value - 1);
  }

  // Reset the counter to 0
  reset(): void {
    this.counterSubject.next(0);
  }
}
