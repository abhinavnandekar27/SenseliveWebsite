import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrialiotComponent } from './industrialiot.component';

describe('IndustrialiotComponent', () => {
  let component: IndustrialiotComponent;
  let fixture: ComponentFixture<IndustrialiotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndustrialiotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndustrialiotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
