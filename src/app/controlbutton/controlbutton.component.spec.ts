import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlbuttonComponent } from './controlbutton.component';

describe('ControlbuttonComponent', () => {
  let component: ControlbuttonComponent;
  let fixture: ComponentFixture<ControlbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ControlbuttonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ControlbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
