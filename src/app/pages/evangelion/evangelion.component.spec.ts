import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvangelionComponent } from './evangelion.component';

describe('EvangelionComponent', () => {
  let component: EvangelionComponent;
  let fixture: ComponentFixture<EvangelionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvangelionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvangelionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
