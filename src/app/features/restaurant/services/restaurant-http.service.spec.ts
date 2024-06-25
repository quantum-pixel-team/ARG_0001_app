import { TestBed } from '@angular/core/testing';

import { RestaurantHttpService } from './restaurant-http.service';
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('RestaurantHttpService', () => {
  let service: RestaurantHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(RestaurantHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
