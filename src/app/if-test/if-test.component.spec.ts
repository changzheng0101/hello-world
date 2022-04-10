import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfTestComponent } from './if-test.component';

describe('IfTestComponent', () => {
  let component: IfTestComponent;
  let fixture: ComponentFixture<IfTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IfTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
