import { TestBed } from '@angular/core/testing';

import { DatamangementService } from './datamangement.service';

describe('DatamangementService', () => {
  let service: DatamangementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatamangementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
