import { Component } from '@angular/core';
import { TestWorkerService } from './services/test-worker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-web-worker';

  constructor(private _testWorkerService: TestWorkerService) {}
}
