import { TestBed } from '@angular/core/testing';

import { HotelHttpService } from './hotel-http.service';

describe('HotelHttpService', () => {
  let service: HotelHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
