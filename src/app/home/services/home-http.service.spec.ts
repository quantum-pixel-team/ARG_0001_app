import { TestBed } from '@angular/core/testing';

import { HomeHttpService } from './home-http.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HomeHttpService', () => {
  let service: HomeHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(HomeHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
