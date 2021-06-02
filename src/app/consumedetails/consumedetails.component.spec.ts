import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumedetailsComponent } from './consumedetails.component';

describe('ConsumedetailsComponent', () => {
  let component: ConsumedetailsComponent;
  let fixture: ComponentFixture<ConsumedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumedetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
