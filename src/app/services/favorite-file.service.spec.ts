import { TestBed } from '@angular/core/testing';

import { FavoriteFileService } from './favorite-file.service';

describe('FavoriteFileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FavoriteFileService = TestBed.get(FavoriteFileService);
    expect(service).toBeTruthy();
  });
});
