import { TestBed } from '@angular/core/testing';

import { JoueurCarteService } from './joueur-carte.service';

describe('JoueurCarteService', () => {
  let service: JoueurCarteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JoueurCarteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
