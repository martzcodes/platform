import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs/Observable';

import { CollectionEffects } from './collection.effects';

describe('CollectionService', () => {
  let actions$: Observable<any>;
  let effects: CollectionEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CollectionEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(CollectionEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
