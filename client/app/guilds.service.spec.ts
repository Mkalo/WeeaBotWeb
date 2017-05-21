import { TestBed, inject } from '@angular/core/testing';

import { GuildsService } from './guilds.service';

describe('GuildsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuildsService]
    });
  });

  it('should ...', inject([GuildsService], (service: GuildsService) => {
    expect(service).toBeTruthy();
  }));
});
