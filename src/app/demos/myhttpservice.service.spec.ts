import { TestBed } from '@angular/core/testing';

import { MyHttpService } from './myhttpservice.service';

describe('MyHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyHttpService = TestBed.get(MyHttpService);
    expect(service).toBeTruthy();
  });
});
