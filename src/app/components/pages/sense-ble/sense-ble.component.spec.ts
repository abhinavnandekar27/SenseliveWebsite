import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenseBLEComponent } from './sense-ble.component';

describe('SenseBLEComponent', () => {
  let component: SenseBLEComponent;
  let fixture: ComponentFixture<SenseBLEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SenseBLEComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SenseBLEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
