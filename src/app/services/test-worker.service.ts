import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestWorkerService {
  worker!: Worker;

  constructor() {
    if (typeof Worker !== 'undefined') {
      // Create a new
      this.worker = new Worker(new URL('./../workers/test.worker.ts', import.meta.url));
      this.worker.onmessage = ({ data }) => {
        console.log(`page got message: ${data}`);
      };
      this.worker.postMessage('hello 123');
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }
}
