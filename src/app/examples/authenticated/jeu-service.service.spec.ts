import { TestBed } from '@angular/core/testing';

import { JeuServiceService } from './jeu-service.service';

describe('JeuServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JeuServiceService = TestBed.get(JeuServiceService);
    expect(service).toBeTruthy();
  });
});
