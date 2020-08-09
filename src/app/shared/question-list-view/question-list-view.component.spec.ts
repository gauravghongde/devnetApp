import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionListViewComponent } from './question-list-view.component';

describe('QuestionListViewComponent', () => {
  let component: QuestionListViewComponent;
  let fixture: ComponentFixture<QuestionListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
