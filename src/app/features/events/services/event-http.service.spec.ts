import { TestBed } from '@angular/core/testing';

import { EventHttpService } from './event-http.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EventHttpService', () => {
  let service: EventHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(EventHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
