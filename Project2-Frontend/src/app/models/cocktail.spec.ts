import { Cocktail } from './cocktail';
import { TestBed } from '@angular/core/testing';

describe('Cocktail', () => {

  let model: Cocktail;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    model = TestBed.inject(Cocktail);
  });

  it('should create an instance', () => {
    expect(model).toBeTruthy();
  });
});
