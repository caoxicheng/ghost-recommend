import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostRecommendComponent } from './ghost-recommend.component';

describe('GhostRecommendComponent', () => {
  let component: GhostRecommendComponent;
  let fixture: ComponentFixture<GhostRecommendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GhostRecommendComponent]
    });
    fixture = TestBed.createComponent(GhostRecommendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
