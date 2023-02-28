import { TestBed } from '@angular/core/testing';

import { ModelViewerService } from './model-viewer.service';

describe('ModelViewerService', () => {
  let service: ModelViewerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModelViewerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
