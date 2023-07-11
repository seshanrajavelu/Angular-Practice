import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QusestionAndAnswerComponent } from './qusestion-and-answer.component';

describe('QusestionAndAnswerComponent', () => {
  let component: QusestionAndAnswerComponent;
  let fixture: ComponentFixture<QusestionAndAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QusestionAndAnswerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QusestionAndAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
