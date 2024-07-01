import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoegatewayComponent } from './poegateway.component';

describe('PoegatewayComponent', () => {
  let component: PoegatewayComponent;
  let fixture: ComponentFixture<PoegatewayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoegatewayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PoegatewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
