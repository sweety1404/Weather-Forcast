import { TestBed } from '@angular/core/testing';

import { RightContainerService } from './right-container.service';

describe('RightContainerService', () => {
  let service: RightContainerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RightContainerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
