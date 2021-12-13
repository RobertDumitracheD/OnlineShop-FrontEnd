import { TestBed } from '@angular/core/testing';

import { OnlineShopServiceService } from './online-shop-service.service';

describe('OnlineShopServiceService', () => {
  let service: OnlineShopServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlineShopServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
