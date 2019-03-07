import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RememberButtonComponent } from './remember-button.component';

describe('RememberButtonComponent', () => {
  let component: RememberButtonComponent;
  let fixture: ComponentFixture<RememberButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RememberButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RememberButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
