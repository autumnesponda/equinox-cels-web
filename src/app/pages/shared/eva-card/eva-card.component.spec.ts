import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaCardComponent } from './eva-card.component';

describe('EvaCardComponent', () => {
  let component: EvaCardComponent;
  let fixture: ComponentFixture<EvaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
