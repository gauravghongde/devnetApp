import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteBadgeComponent } from './vote-badge.component';

describe('VoteBadgeComponent', () => {
  let component: VoteBadgeComponent;
  let fixture: ComponentFixture<VoteBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
