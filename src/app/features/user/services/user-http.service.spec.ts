import { TestBed } from '@angular/core/testing';

import { UserHttpService } from './user-http.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UserService', () => {
  let service: UserHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(UserHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
