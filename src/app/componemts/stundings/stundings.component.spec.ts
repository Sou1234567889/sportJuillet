import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StundingsComponent } from './stundings.component';

describe('StundingsComponent', () => {
  let component: StundingsComponent;
  let fixture: ComponentFixture<StundingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StundingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StundingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
