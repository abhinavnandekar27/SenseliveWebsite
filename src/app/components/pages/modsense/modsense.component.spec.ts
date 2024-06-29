import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModsenseComponent } from './modsense.component';

describe('ModsenseComponent', () => {
  let component: ModsenseComponent;
  let fixture: ComponentFixture<ModsenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModsenseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModsenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
