import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicEvaCardComponent } from './basic-eva-card.component';

describe('BasicEvaCardComponent', () => {
  let component: BasicEvaCardComponent;
  let fixture: ComponentFixture<BasicEvaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicEvaCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicEvaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
