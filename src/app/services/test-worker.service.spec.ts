import { TestBed } from '@angular/core/testing';

import { TestWorkerService } from './test-worker.service';

describe('TestWorkerService', () => {
  let service: TestWorkerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestWorkerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
